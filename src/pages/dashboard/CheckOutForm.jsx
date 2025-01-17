import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const {user} = useAuth()
    const [error, setError] = useState()
    const [clientSecret, setClientSecres] = useState()
    const [transactionId, setTransactionId] = useState()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [cart, refetch] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
      if(totalPrice > 0){
        axiosSecure
          .post("/create-payment-intent", { price: totalPrice })
          .then((res) => {
            setClientSecres(res.data.clientSecret);
          });
      }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if(error){
            console.log("From error", error)
            setError(error.message)
        }else{
            console.log("From payment method", paymentMethod)
            setError("")
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName || "Anonymous",
              email: user.email || "Anonymous",
            },
          }
        });

        if(confirmError){
          console.log("Confirm error")
        }else{
          if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);

            // save the payment in database
            const payment = {
              email: user.email,
              price: totalPrice,
              transactionId: paymentIntent.id,
              date: new Date(),
              cartIds: cart.map(item => item._id),
              menuIds: cart.map(item => item.menuId),
              status: "Pending"
            }
            

            const res = await axiosSecure.post("/payments", payment)
            console.log(res.data)
            refetch()
            if(res.data.paymentResult.insertedId){
              Swal.fire({
                title: "Payment Successful!",
                icon: "success",
                draggable: true,
              });
              navigate("/dashboard/paymentHistory");
            }
          }
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-accent mt-3 px-6"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && <p className="text-green-600 font-medium">Your Transection ID: {transactionId}</p>}
      </form>
    );
};

export default CheckOutForm;
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"At a Glance!"}
      ></SectionTitle>
      <div>
        <h2 className="text-2xl font-medium uppercase">
          Total Payments: {payments.length}
        </h2>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead className="bg-yellow-600">
                <tr className="text-base uppercase text-white">
                  <th></th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="text-base">
                    <th>{index + 1}</th>
                    <td>{payment.email}</td>
                    <td>{payment.transactionId}</td>
                    <td>${payment.price}</td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

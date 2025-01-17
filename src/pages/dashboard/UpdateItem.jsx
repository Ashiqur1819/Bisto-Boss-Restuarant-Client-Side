import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const imageApiKey = import.meta.env.VITE_image_api_key;
const imageApiUrl = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const UpdateItem = () => {
    const item = useLoaderData()
    const {name, _id, recipe, image, category, price} = item
     const axiosPublic = useAxiosPublic();
     const axiosSecure = useAxiosSecure();
     const { register, handleSubmit, reset } = useForm();
     const onSubmit = async (data) => {
       const imageFile = { image: data.image[0] };
       const res = await axiosPublic.post(imageApiUrl, imageFile, {
         headers: {
           "content-type": "multipart/form-data",
         },
       });
       if (res.data.success) {
         const menuItem = {
           name: data.name,
           category: data.category,
           price: parseFloat(data.price),
           recipe: data.recipe,
           image: res.data.data.url,
         };
         const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
         console.log(menuRes.data)
         if (menuRes.data.modifiedCount) {
           reset();
           Swal.fire({
             title: "Item added successful!",
             icon: "success",
             draggable: true,
           });
         }
       }
     };
    return (
        <div>
          <div className="mb-12">
            <SectionTitle
              heading="Update Item"
            ></SectionTitle>
            <div className="bg-gray-100 p-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base text-gray-700">
                      Recipe Name*
                    </span>
                  </label>
                  <input
                  defaultValue={name}
                    {...register("name")}
                    type="text"
                    placeholder="Recipe Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium text-base text-gray-700">
                        Select Category*
                      </span>
                    </label>
                    <select
                    
                      defaultValue="default"
                      {...register("category")}
                      className="select w-full input-bordered"
                    >
                      <option disabled value="default">
                        Pick your category
                      </option>
                      <option value="salad">Salad</option>
                      <option value="pizza">Pizza</option>
                      <option value="soups">Soups</option>
                      <option value="desserts">Desserts</option>
                      <option value="drinks">Drinks</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium text-base text-gray-700">
                        Price*
                      </span>
                    </label>
                    <input
                    defaultValue={price}
                      {...register("price")}
                      type="number"
                      placeholder="Price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <label className="form-control mt-3">
                  <div className="label">
                    <span className="label-text font-medium text-base text-gray-700">
                      Recipe Details*
                    </span>
                  </div>
                  <textarea
                  defaultValue={recipe}
                    {...register("recipe")}
                    className="textarea textarea-bordered text-base h-24"
                    placeholder="Recipe Details"
                  ></textarea>
                </label>
                <label className="form-control w-full max-w-xs mt-3">
                  <div className="label">
                    <span className="label-text font-medium text-base text-gray-700">
                      Pick an Image*
                    </span>
                  </div>
                  <input
                    {...register("image")}
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </label>
                <input
                  className="bg-yellow-600 px-6 py-2 rounded-md text-white font-medium mt-12 cursor-pointer"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
    );
};

export default UpdateItem;
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { img, price, title } = loadedData;

  const handleOrder=(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;

        const orderData={
            img,email,price,title,name,date
        }
        
        fetch("http://localhost:5000/bookings",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(orderData)  
        })
        .then(res => res.json())
        .then(data => console.log(data))

  }



  return (
    <div className="mt-12">
        <h1 className="text-3xl text-center mb-8" >Checkout:{title}</h1>
      <form  onSubmit={handleOrder}  >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Provide Your Name"
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              name="date"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Provide Your Name"
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={user?.email} readOnly
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Amount
            </label>
            <input
              name="amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                defaultValue={`To Pay:${price}`} readOnly
            />
          </div>
        </div>
        <button type="submit" className="w-full text-white text-2xl p-2 rounded-xl mt-8 bg-blue-500">Confirm Order</button>
      </form>
    </div>
  );
};

export default CheckOut;

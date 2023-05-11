import React, { useContext, useState } from "react"
import img1 from '../../assets/images/login/login.svg'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import {  useNavigate } from "react-router-dom";

const Login = () => {
    const [error,setError]=useState('')
    const {signInwithEP}=useContext(AuthContext);
    const navigate=useNavigate();
    const state = "/";
    const handleSignUp=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInwithEP(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                title: 'Login Successfull',
                icon: 'success',
                confirmButtonText:'Okay'
              })
              navigate(state,{replace:true});
          })
          .catch((error) => {
            setError("Provide Valid Email and Password")
          });
    }
  return (
    <div>
      <div className="mt-12 md:grid  gap-3 items-center grid-cols-2  ">
        <div className="order-1">
          <img src={img1} alt="" />
        </div>
        <div>
          <h1 className="text-center text-4xl mb-12">Login!!!!!!</h1>
          <form onSubmit={handleSignUp}>
            <div className="mb-6 order-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Provide Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Provide Your Password"
              />
            </div>
            <div className="flex items-start mb-4"></div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
          <h1 className="text-2xl mt-4 text-red-600  font-semibold">{error}</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

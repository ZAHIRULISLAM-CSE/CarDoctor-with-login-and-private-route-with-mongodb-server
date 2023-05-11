import React from "react";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';

const MoreServices = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            More Services
          </span>
        </button>
      </div>
      <div className="mt-12 mb-12 bg-black items-center text-white p-16  flex justify-between ">
        <div className="flex gap-3 items-center">
          <div>
            <FaCalendarAlt></FaCalendarAlt>
          </div>
          <div>
                <p>We are open monday-friday</p>
                <p className="font-xl font-bold" >7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <FaPhoneAlt></FaPhoneAlt>
          </div>
          <div>
                <p>Have a question?</p>
                <p className="font-xl font-bold" >+2546 251 2658</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <FaPhoneAlt></FaPhoneAlt>
          </div>
          <div>
                <p>Need a repair? our address</p>
                <p className="font-xl font-bold" >Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreServices;

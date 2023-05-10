import React from "react";
import about1 from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="grid mt-12 mb-20 items-center gap-12 grid-cols-1 md:grid-cols-2 " >
      <div className="relative">
        <img className="h-[480px] w-[90%] " src={about1} alt="" />
        <img className="h-[250px] -bottom-10 -right-5  absolute " src={parts} alt="" />
      </div>
      <div>
        <p className="text-xl font-semibold text-[#FF3811] mb-4">About Us</p>
        <h1 className="text-4xl mb-4 font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h1>
        <p className="text-xl mb-4 font-semibold">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-xl mb-4 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button
          type="button"
          className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";

const Bannar = () => {
  return (
    <div className="mt-12">
      <div
        id="controls-carousel"
        className="relative   w-full"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-[450px] overflow-hidden rounded-lg md:h-96">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={img5}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="absolute  p-4 flex justify-center  flex-col text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
              <h1 className=" mb-4 text-2xl  md:text-4xl">Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className="w-[40%]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Discover More</button>
              </div>
            </div>
          </div>

          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={img1}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="absolute p-4 flex justify-center  flex-col text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
              <h1 className=" mb-4 text-4xl">Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className="w-[40%]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Discover More</button>
              </div>
            </div>
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={img2}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="absolute p-4 flex justify-center  flex-col text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
              <h1 className=" mb-4 text-4xl">Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className="w-[40%]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Discover More</button>
              </div>
            </div>
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={img3}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="absolute p-4 flex justify-center  flex-col text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
              <h1 className=" mb-4 text-4xl">Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className="w-[40%]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Discover More</button>
              </div>
            </div>
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src={img4}
              className="absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
            <div className="absolute p-4 flex justify-center  flex-col text-white h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  ">
              <h1 className=" mb-4 text-4xl">Affordable <br /> Price For Car <br /> Servicing</h1>
              <p className="w-[40%]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
              <button type="button" className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Discover More</button>
              </div>
            </div>
          </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute -top-5  right-20 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute -top-5  right-0 z-30 flex items-end justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Bannar;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const Myorders = () => {
  const { user, loading } = useContext(AuthContext);
  
  const [bookingData, setBookingData] = useState([]);
  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${email}`)
      .then((res) => res.json())
      .then((data) => setBookingData(data));
  }, [email]);


  const handleDelete=(id)=>{

    fetch(`http://localhost:5000/bookings/${id}`,{
        method:"DELETE"
    })
    .then(res=> res.json())
    .then(data =>{
        if(data.deletedCount>0){
            Swal.fire({
                title: 'Deleted Successfull',
                icon: 'success',
                confirmButtonText:'Okay'
              })
        }
        const remainingBooking=bookingData.filter(booking => booking._id !=id)
        setBookingData(remainingBooking);
    });


  }

  return (
    <div className="mt-12">
      <div className="relative p-4 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th></th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bookingData &&
              bookingData.map((booking) => (
                <tr
                  key={booking._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th>
                    <button onClick={()=>handleDelete(booking._id)}
                      type="button"
                      className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                    >
                        X
                    </button>
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="h-12 rounded-full w-12"
                      src={booking.img}
                      alt=""
                    />
                  </th>
                  <td className="px-6 py-4">{booking.name}</td>
                  <td className="px-6 py-4">{booking.title}</td>
                  <td className="px-6 py-4">{booking.price}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Confirm
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorders;

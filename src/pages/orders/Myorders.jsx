import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Myorders = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate=useNavigate();
  
  const [bookingData, setBookingData] = useState([]);
  const email = user?.email;
  

  const localData=localStorage.getItem("access-token")

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${email}`,{
        method:"GET",
        headers:{
          authorization:`${localData}`
        }
    })
      .then((res) => res.json())
      .then((data) =>{
        if(!data.error){
          setBookingData(data)
      }else{
        navigate("/")
      }
      });
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

  const handleUpdate=(id)=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "status":"Confirmed"
        })
    })
    .then(res=> res.json())
    .then(data =>{
            console.log(data)
            // console.log(type)
            if(data.modifiedCount>0){
                console.log("ok")
                 const remainingBooking=bookingData.filter(booking => booking._id !=id)
                 const modifiedBooking=bookingData.find(booking => booking._id =id)
                 modifiedBooking.status="Confirmed"
                 const newData=[modifiedBooking,...remainingBooking];
                 setBookingData(newData);

            }
        })
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
              bookingData.map((booking,index) => (
                <tr
                  key={index}
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
                    {
                        booking.status ? <span>Confirmed</span> :<button onClick={()=>handleUpdate(booking._id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                       Please  Confirm
                      </button>
                    }
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

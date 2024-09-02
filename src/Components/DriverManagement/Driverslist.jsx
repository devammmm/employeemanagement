
// // import React, { useState } from "react";
// // import "./driverslist.css";
// // import { IoMdSearch } from "react-icons/io";
// // import { useNavigate } from "react-router-dom";
// // import { useLocation } from "react-router-dom";

// // function Driverslist() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const data = location.state;

// //   const [drivers, setDrivers] = useState([
// //     {
// //       Name: "Charan",
// //       DriverId: "123",
// //       VehicleNumber: "AP12CD2454",
// //       Status: "Active",
// //     },
// //     {
// //       Name: "Nats",
// //       DriverId: "124",
// //       VehicleNumber: "AP12CD2455",
// //       Status: "Active",
// //     },
// //     {
// //       Name: "Rishi",
// //       DriverId: "125",
// //       VehicleNumber: "AP12CD2456",
// //       Status: "Active",
// //     },
// //     {
// //       Name: "Koti",
// //       DriverId: "126",
// //       VehicleNumber: "AP12CD2457",
// //       Status: "Active",
// //     },
// //   ]);

// //   const [editIndex, setEditIndex] = useState(null); // To keep track of which row is being edited
// //   const [editedDriver, setEditedDriver] = useState({}); // To hold the edited driver data

// //   const handleAddDriver = () => {
// //     navigate("/driverform");
// //   };

// //   const handleEdit = (index) => {
// //     setEditIndex(index);
// //     setEditedDriver(drivers[index]);
// //   };

// //   const handleSave = (index) => {
// //     const updatedDrivers = [...drivers];
// //     updatedDrivers[index] = editedDriver;
// //     setDrivers(updatedDrivers);
// //     setEditIndex(null);
// //   };

// //   const handleDelete = (index) => {
// //     const updatedDrivers = drivers.filter((_, i) => i !== index);
// //     setDrivers(updatedDrivers);
// //   };

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setEditedDriver((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   return (
// //     <div>
// //       <div className="driver-list-card">
// //         <div className="search-driver">
// //           <input className="search-input" type="text" placeholder="Search here..." />
// //           <IoMdSearch className="serachhh" />
// //           <button onClick={handleAddDriver} className="add-driver">
// //             <b>Add Driver +</b>
// //           </button>
// //         </div>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>S.No</th>
// //               <th>Name</th>
// //               <th>Driver Id</th>
// //               <th>Vehicle Number</th>
// //               <th>Status</th>
// //               <th>View More</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {drivers.map((item, index) => (
// //               <tr key={index}>
// //                 <td>{index + 1}</td>
// //                 <td>
// //                   {editIndex === index ? (
// //                     <input
// //                       type="text"
// //                       name="Name"
// //                       value={editedDriver.Name}
// //                       onChange={handleChange}
// //                     />
// //                   ) : (
// //                     item.Name
// //                   )}
// //                 </td>
// //                 <td>
// //                   {editIndex === index ? (
// //                     <input
// //                       type="text"
// //                       name="DriverId"
// //                       value={editedDriver.DriverId}
// //                       onChange={handleChange}
// //                     />
// //                   ) : (
// //                     item.DriverId
// //                   )}
// //                 </td>
// //                 <td>
// //                   {editIndex === index ? (
// //                     <input
// //                       type="text"
// //                       name="VehicleNumber"
// //                       value={editedDriver.VehicleNumber}
// //                       onChange={handleChange}
// //                     />
// //                   ) : (
// //                     item.VehicleNumber
// //                   )}
// //                 </td>
// //                 <td>
// //                   {editIndex === index ? (
// //                     <input
// //                       type="text"
// //                       name="Status"
// //                       value={editedDriver.Status}
// //                       onChange={handleChange}
// //                     />
// //                   ) : (
// //                     item.Status
// //                   )}
// //                 </td>
// //                 <td>
// //                   <a href="/driverprofile">{item.View || "View More"}</a>
// //                 </td>
// //                 <td>
// //                   {editIndex === index ? (
// //                     <>
// //                       <button onClick={() => handleSave(index)}>Save</button>
// //                       <button onClick={() => setEditIndex(null)}>Cancel</button>
// //                     </>
// //                   ) : (
// //                     <>
// //                       <button onClick={() => handleEdit(index)}>Edit</button>
// //                       <button onClick={() => handleDelete(index)}>Delete</button>
// //                     </>
// //                   )}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Driverslist;
// import React, { useState } from "react";
// import "./driverslist.css";
// import { IoMdSearch } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// function Driverslist() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const data = location.state;

//   const [drivers, setDrivers] = useState([
//     {
//       Name: "Charan",
//       DriverId: "123",
//       VehicleNumber: "AP12CD2454",
//       Status: "Active",
//     },
//     {
//       Name: "Nats",
//       DriverId: "124",
//       VehicleNumber: "AP12CD2455",
//       Status: "Active",
//     },
//     {
//       Name: "Rishi",
//       DriverId: "125",
//       VehicleNumber: "AP12CD2456",
//       Status: "Active",
//     },
//     {
//       Name: "Koti",
//       DriverId: "126",
//       VehicleNumber: "AP12CD2457",
//       Status: "Active",
//     },
//   ]);

//   const [editIndex, setEditIndex] = useState(null); // To keep track of which row is being edited
//   const [editedDriver, setEditedDriver] = useState({}); // To hold the edited driver data

//   const handleAddDriver = () => {
//     navigate("/driverform");
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditedDriver(drivers[index]);
//   };

//   const handleSave = (index) => {
//     const updatedDrivers = [...drivers];
//     updatedDrivers[index] = editedDriver;
//     setDrivers(updatedDrivers);
//     setEditIndex(null);
//   };

//   const handleDelete = (index) => {
//     const updatedDrivers = drivers.filter((_, i) => i !== index);
//     setDrivers(updatedDrivers);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setEditedDriver((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <div className="driver-list-card">
//         <div className="search-driver">
//           <input className="search-input" type="text" placeholder="Search here..." />
//           <IoMdSearch className="serachhh" />
//           <button onClick={handleAddDriver} className="add-driver">
//             <b>Add Driver +</b>
//           </button>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Driver Id</th>
//               <th>Vehicle Number</th>
//               <th>Status</th>
//               <th>Actions</th> {/* Move Actions header before View More */}
//               <th>View More</th>
//             </tr>
//           </thead>
//           <tbody>
//             {drivers.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {editIndex === index ? (
//                     <input
//                       type="text"
//                       name="Name"
//                       value={editedDriver.Name}
//                       onChange={handleChange}
//                     />
//                   ) : (
//                     item.Name
//                   )}
//                 </td>
//                 <td>
//                   {editIndex === index ? (
//                     <input
//                       type="text"
//                       name="DriverId"
//                       value={editedDriver.DriverId}
//                       onChange={handleChange}
//                     />
//                   ) : (
//                     item.DriverId
//                   )}
//                 </td>
//                 <td>
//                   {editIndex === index ? (
//                     <input
//                       type="text"
//                       name="VehicleNumber"
//                       value={editedDriver.VehicleNumber}
//                       onChange={handleChange}
//                     />
//                   ) : (
//                     item.VehicleNumber
//                   )}
//                 </td>
//                 <td>
//                   {editIndex === index ? (
//                     <input
//                       type="text"
//                       name="Status"
//                       value={editedDriver.Status}
//                       onChange={handleChange}
//                     />
//                   ) : (
//                     item.Status
//                   )}
//                 </td>
//                 <td>
//                   {/* Actions cell comes before the View More cell */}
//                   {editIndex === index ? (
//                     <>
//                       <button onClick={() => handleSave(index)}>Save</button>
//                       <button onClick={() => setEditIndex(null)}>Cancel</button>
//                     </>
//                   ) : (
//                     <>
//                       <button className="driver-edit-btn" onClick={() => handleEdit(index)}>Edit</button>
//                       <button className="driver-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
//                     </>
//                   )}
//                 </td>
//                 <td>
//                   <a href="/driverprofile">{item.View || "View More"}</a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Driverslist;
import React, { useState, useEffect } from "react";
import "./driverslist.css";
import { IoMdSearch } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

function Driverslist() {
  const navigate = useNavigate();
  const location = useLocation();
  const newDriver = location.state?.newDriver; // Get the new driver data from state if available

  const [drivers, setDrivers] = useState([
    {
      Name: "Charan",
      DriverId: "123",
      VehicleNumber: "AP12CD2454",
      Status: "Active",
    },
    {
      Name: "Nats",
      DriverId: "124",
      VehicleNumber: "AP12CD2455",
      Status: "Active",
    },
    {
      Name: "Rishi",
      DriverId: "125",
      VehicleNumber: "AP12CD2456",
      Status: "Active",
    },
    {
      Name: "Koti",
      DriverId: "126",
      VehicleNumber: "AP12CD2457",
      Status: "Active",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editedDriver, setEditedDriver] = useState({});

  useEffect(() => {
    // Check if there's a new driver and add it to the list
    if (newDriver) {
      setDrivers((prevDrivers) => [...prevDrivers, newDriver]);
    }
  }, [newDriver]);

  const handleAddDriver = () => {
    navigate("/driverform");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedDriver(drivers[index]);
  };

  const handleSave = (index) => {
    const updatedDrivers = [...drivers];
    updatedDrivers[index] = editedDriver;
    setDrivers(updatedDrivers);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedDrivers = drivers.filter((_, i) => i !== index);
    setDrivers(updatedDrivers);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedDriver((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="driver-list-card">
        <div className="search-driver">
          <input className="search-input" type="text" placeholder="Search here..." />
          <IoMdSearch className="serachhh" />
          <button onClick={handleAddDriver} className="add-driver">
            <b>Add Driver +</b>
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Driver Id</th>
              <th>Vehicle Number</th>
              <th>Status</th>
              <th>Actions</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="Name"
                      value={editedDriver.Name}
                      onChange={handleChange}
                    />
                  ) : (
                    item.Name
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="DriverId"
                      value={editedDriver.DriverId}
                      onChange={handleChange}
                    />
                  ) : (
                    item.DriverId
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="VehicleNumber"
                      value={editedDriver.VehicleNumber}
                      onChange={handleChange}
                    />
                  ) : (
                    item.VehicleNumber
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      type="text"
                      name="Status"
                      value={editedDriver.Status}
                      onChange={handleChange}
                    />
                  ) : (
                    item.Status
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <>
                      <button onClick={() => handleSave(index)}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="driver-edit-btn" onClick={() => handleEdit(index)}>Edit</button>
                      <button className="driver-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                    </>
                  )}
                </td>
                <td>
                  <a href="/driverprofile">{item.View || "View More"}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Driverslist;

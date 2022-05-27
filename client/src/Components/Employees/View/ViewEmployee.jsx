import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewEmployee() {
  const [emp, setEmp] = useState([]);

  const fetchEmp = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/getAll"
      );
      const responseData = await response.json();
      setEmp(responseData.employees);
    } catch (err) {
      console.log(err.message || "Something went wrong, please try again.");
    }
  };

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "employee/getAll"
        );
        const responseData = await response.json();
        setEmp(responseData.employees);
      } catch (err) {
        console.log(err.message || "Something went wrong, please try again.");
      }
    };

    fetchEmp();
  }, []);

  const deleteEmp = async (id) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + `employee/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const responseData = await response.json();

      fetchEmp();
    } catch (err) {
      console.log(err.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="container rounded mt-2">
      <div className="p-3 bd-white">
        <div className="d-flex justify-content-between">
          <div>
            <p>Employees</p>
          </div>
          <div>
            <Link to="employees/add" className="btn btn-success">
              Add
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">operation</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((e, index) => (
              <tr key={e._id}>
                <th scope="row">{index + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>
                  <Link
                    to={`employees/edit/${e._id}`}
                    className="btn-sm btn-warning no-style-link"
                  >
                    edit
                  </Link>
                  <button
                    onClick={() => deleteEmp(e._id)}
                    className="btn-sm btn-danger ms-1"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewEmployee;

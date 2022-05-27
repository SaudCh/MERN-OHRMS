import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddEmployee() {
  const history = useHistory();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const addEmp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "employee/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      history.push("/employees");
    } catch (err) {
      console.log(err.message || "Something went wrong");
    }
  };
  return (
    <div className="container rounded mt-2">
      <div className="p-3 bd-white">
        <div className="d-flex justify-content-between"></div>
        <div>
          <form onSubmit={addEmp}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                onChange={(name) => setName(name.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                onChange={(email) => setEmail(email.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Phone Number"
                onChange={(phone) => setPhone(phone.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;

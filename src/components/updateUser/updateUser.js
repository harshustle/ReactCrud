import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import "./updateUser.css"
import { Form, Button } from "react-bootstrap";

const UpdateUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user/${id}`);
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("error while fetching users: ", error.message);
      }
    };
    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/api/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("User updated:", result);
      alert("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  return (
    <>
      <div className="center-form">
        <h2>Update User</h2>
        <Form onSubmit={handleFormSubmit}>
          {/* name */}
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* phone */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {/* submit */}
            <Button variant="dark" type="submit" className="w-100 mt-4">
              Update User
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AnchorButton } from "../common/InputGroup.style";
import NoImage from "../common/NoImage.jpg";
import { addBlog } from "./redux/reducer";
import { toast, Toaster } from "react-hot-toast";

function Blogs() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const navigate = useNavigate();
  let blogs = useSelector(({ counterReducer }) => counterReducer.value);
  const dispatch = useDispatch();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setimage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { name, description, image };
    dispatch(addBlog(obj));
    setimage("");
    setname("");
    setdescription("");
    toast.success("Blog Added Successfully");
  };
  return (
    <>
      <Toaster />
      <nav className="d-flex justify-content-between navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          List of Blogs
        </a>
        <AnchorButton
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          LogOut
        </AnchorButton>
      </nav>
      <form onSubmit={handleSubmit} style={{ width: "50%", margin: "0 auto" }}>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            required
            type="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
          <small id="emailHelp" className="form-text text-muted">
            Blog Name
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            style={{ minHeight: "10em" }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Description"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Choose Image</label>
          <input
            onChange={(e) => onImageChange(e)}
            type="file"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Description"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div
        className="card-group mt-5"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        {blogs?.map(({ name, description, image }) => {
          return (
            <div style={{ width: "300px", margin: "5px" }}>
              <div className="card">
                <img
                  className="card-img-top"
                  width="30px"
                  src={image ? image : NoImage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blogs;

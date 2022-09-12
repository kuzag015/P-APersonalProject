import React from 'react'
import axios from "axios";
import "./BlogForm.css" 
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/blog", {title, description, image})
            .then((res) => {
                console.log(res);
                navigate('/all')
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    }


  return (
    <div>
        <div className="container">
            <div className="row ">
                <div className="col-12">
                    <h1>Write a Page</h1>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        {errors.title ? <p>{errors.title.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            rows="8"
                            
                            className="form-control form-control-lg"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                        {errors.description ? <p>{errors.description.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setImage(e.target.value)}
                            value={image}
                        />
                        {errors.image ? <p>{errors.image.message}</p> : null}
                    </div>
                    <div>
                    <span> </span>
                    </div>
                    <div>
                        <button className="btn btn-outline-light center" type="submit">Post</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogForm
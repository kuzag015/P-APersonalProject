import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import "./Edit.css";

const Edit = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [postId, setPostId] = useState("")
    const [errors, setErrors] = useState([])
    const [comment, setComment] = useState('')

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/blog/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setImage(res.data.image);
                setPostId(res.data.id)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/blog/${id}`, {title, description, image, comment})
            .then((res) => {
                console.log(res);
                navigate('/all')
            })
            .catch((err) => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            });
    }

    

return(
        <div className="detailsContainer">
            <div className="editContainer">
                <div className="imageDetail">
                    <img className="blogImageDetail" src={image}/>
                </div>
                <div className="row ">
                    <div className="col-12">
                        <form onSubmit={submitHandler}>
                            <h1 className="editTitle">Edit Post</h1>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
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
                                        rows="4"
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
                                    <button className="btn btn-outline-light large spaced" type="submit">Submit Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
)};   


export default Edit;
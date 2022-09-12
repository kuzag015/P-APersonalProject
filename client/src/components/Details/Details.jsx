import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import "./Details.css";

const Details = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [comment, setComment] = useState([]);
    const [allComments, setAllComments] = useState([]);


    const date = new Date(createdAt);
    const dayString = date.getDate();
    const monthString = date.getMonth();
    const yearString = date.getFullYear();

    const navigate = useNavigate();



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/blog/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setImage(res.data.image);
                setCreatedAt(res.data.createdAt)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, []);


    

    const deleteHandler = (id) => {
        let is_sure = window.confirm("Are you sure you want to delete your post?");
        if (is_sure == true) {
        axios
            .delete(`http://localhost:8000/api/blog/${id}`)
            .then((response) => {
                console.log("deleted post!");
                console.log(response);
                const filteredPosts = allPosts.filter((post) => {
                return post._id !== id;
        });
        setAllPosts(filteredPosts);
        navigate('/all');
        })
        .catch((err) => {
        console.log("error deleting post", err.response);
        });  
        } else {
            return;
        }
    };

    // commentHandler() is modeled after deleteHandler currently. Will change to commit comments upon submitting comment

    const commentHandler = (id) => {
        let is_sure = window.confirm("Are you sure you want to comment on your post?");
        if (is_sure == true) {
            axios.put(`http://localhost:8000/api/blog/${id}`)
            .then((res) => {
                setAllComments([...res.data.comment])
            })
            .catch((err)=> {
                console.log(err)
            })
            .catch((err) => {
            console.log("error commenting on post", err.response);
            });  
        } else {
            return;
        }
    };

return (
    <div className="detailsContainer">
        <div className="detailTitle">
            <h1 className="details">{title}</h1>
        </div>
        <div className="dateAdded">
            <h5 className="details"><em><strong>Posted {dayString}/{monthString}/{yearString}</strong></em></h5>
        </div>
        <div className="imageDetail">
            <img className="blogImageDetail" src={image}/>
        </div>
        <div className="detailsDescription">
            <h3 className="details"><em>{description}</em></h3>
        </div>
        <div className="deleteButton">
            <Link to={`/edit/${id}`}>
            <button className="btn btn-outline-light">Edit Post</button>
            </Link>
            <span> </span>
            <button onClick={() => {deleteHandler(id)}} className="btn btn-outline-light">Delete Post</button>
        </div>
        <div className="row ">
            <div className="col-12">
                <form onSubmit={commentHandler}>
                    <div className="form-group centered">
                        <button type='submit' className="btn btn-outline-light position">Leave a Comment</button>
                        <textArea
                            className="form-control"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
)}   


export default Details;
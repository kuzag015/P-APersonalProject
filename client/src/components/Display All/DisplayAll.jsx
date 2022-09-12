import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./DisplayAll.css";


const DisplayAll = () => {
    const [allPosts, setAllPosts] = useState([]);
    const fileReader = new FileReader();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/blog")
            .then((response) => {
            console.log(response.data);
            setAllPosts(response.data);
        })
            .catch((err) => {
            console.log(err.response);
        });
    }, []);

    return(
        <div className="image-grid">
            {
                allPosts.map((post)=>{
                    return(
                                <Link to={`/details/${post._id}`}>
                                    <img className="blogImage transparent" src={post.image}/>   
                                      {/* Tried using FileReader() to read local image address from user form " */}
                                </Link>             
                    )
            })}
        </div>
    );}
    
    export default DisplayAll;
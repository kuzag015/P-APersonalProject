import "./Topbar.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Topbar = () => {
  const navigate = useNavigate();

// let randFact = () => {
//   axios.get("https://api.fungenerators.com/fact/random")
//     .then((req, res) => {
//      let fact = res.json();
//      console.log(fact.contents)
//      return(fact.contents.fact);
      
//     })
//     .catch(err => console.log(err));
// };

  return (
    <div className="top">
        <div className="topLeft">Picture Book</div>
        <div className="topCenter">
            <ul className="listItems">
                <li className="listItem"><Link to="/home">Home</Link></li>
                <li className="listItem"><Link to="/new">New Post</Link></li>
                <li className="listItem"><Link to="/all">See All Posts</Link></li>
            </ul>
        </div>
        <div className="topRight">
            <img onClick={()=>{
              navigate(window.location.href = "https://www.gutenberg.org/")}} className="thumbnail" src="https://cdn-icons-png.flaticon.com/512/10/10742.png" alt=""/>
        </div>
    </div>
  )
}

export default Topbar
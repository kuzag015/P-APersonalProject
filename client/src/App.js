import Topbar from "./components/TopBar/Topbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"

import Home from "./components/Home/Home"
import BlogForm from "./components/Blog Form/BlogForm";
import DisplayAll from "./components/Display All/DisplayAll";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Login from "./components/Login/Login";




 function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Topbar/>
          <Routes>
               <Route path="/" element={<Login/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/new" element={<BlogForm />} />
               <Route path="/all" element={<DisplayAll />} />
               <Route path="/details/:id" element={<Details />} />
               <Route path="/edit/:id" element={<Edit />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

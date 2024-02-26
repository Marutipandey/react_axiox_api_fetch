import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if using client-side routing
import axios from 'axios';
const Navbar = () => {
    const api = "https://fakestoreapi.com";
    const [findDataa,setFindDataa] = useState([]);
    const [errDataa,setErrDataa] = useState("");

    const apiGetData = async(url) =>{
        try{
            const res = await axios.get(url);
            setFindDataa(res.data) 
        }catch(errDataa){
            setErrDataa(errDataa.message)
    
        }
    }   
    useEffect(()=>{
     apiGetData(`${api}/products`)
    },[])

    
  return (
    <div >
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/other-page" className="nav-link">Other Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
            {
        findDataa.map((Postt)=>{
            const {id,title} =Postt;
            return(
                <div key={id}>
                <ul>
                    <li>{title.slice(0,10)}</li>
                </ul>
        
              </div>
            )}
            
        )
         
        
        }

{errDataa && <p>"navbar err:" {errDataa}</p>}
            </div>
        </div>
      </div>
        
     

    </div>
    
  );
};

export default Navbar;

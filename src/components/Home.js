import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
const Home = () => {
    
    const [findData,setFindData] = useState([]);
    const [errData,setErrData] = useState("");




   
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setFindData(res.data);
      })
      .catch((error) => {
        setErrData(error.message);
      });
  }, []);
    
  return (
    <>
    <Navbar/>
    {findData.map((post)=>{
        const {id,title,description} = post;
        return(
            <div  key={id}>
             <h2>{title.slice(0,10)}</h2>
             <p>{description.slice(0,10)}</p>
            </div>
        )
    })
    }
    {
      errData &&  <h1>error data: {errData}</h1>
    }
    </>
   
  )
}

export default Home

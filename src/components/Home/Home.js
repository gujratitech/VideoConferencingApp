import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [value, setValue] = useState();

    const navigate = useNavigate();
    const handleClick = ()=>{
        if(value === ""){
            alert("Please enter room id")
            console.log("please enter room id");
        }
        else{
            navigate(`room/${value}`);
        }
    }
  return (
    <>
   <input type="text" placeholder='Enter Room id' name='' id='' onChange={(e) => setValue(e.target.value)} />

   <button onClick={handleClick}>Join</button>
    </>
  )
}

export default Home

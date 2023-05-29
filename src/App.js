import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { filterDatas , apiUrl } from "./data";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinning from "./components/Spinning";

const App = () => {

  const [courses , setcourses] = useState([]);
  const [loading , setloading] = useState(false);
  const [category , setcategory] = useState(filterDatas[0].title)

  async function fetchData(){

    try{
      setloading(true)
      const response = await fetch(apiUrl);
      const output = await response.json();
      setcourses(output.data);
      console.log(output.data);
      
      setloading(false);
    }
    catch(e){
      toast.error("Data is not fetched")
      // <ToastContainer />

    }
  }

  useEffect(()=>{
    return fetchData
  },[])

  return (
  <div className=" bg-bgDark2  justify-center  min-h-[100vh]">
    <Navbar></Navbar>
     <Filter filterDatas = {filterDatas} category={category} setcategory={setcategory}></Filter>
     <div className="w-[900px] bg-bgDark2 flex justify-center mx-auto items-center min-h-[500px] ">
      {loading?<Spinning></Spinning>:<Cards courses={courses} category={category}></Cards>}
     </div>
  </div>
  )};

export default App;

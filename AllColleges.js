import React, { useState,useEffect } from "react";
import College from "./College";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllColleges =() => {

    useEffect(() => {
            document.title="All Colleges || Connect with Kalyani";
    });

    //Function to call servers
    const getAllCollegesFromServer = () => {
        axios.get(`${base_url}/getallcolleges`).then(
            (response) => {
                //For Success
               // console.log("Success");
                console.log(response.data);
                toast.success("Colleges has been loaded",{position:"bottom-center"});
                setcolleges(response.data);
            },
            (error) => {
                //For Error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }

        );
    };

    
    //calling loading server function
    useEffect(()=>{
        getAllCollegesFromServer();
        },[]);

    const [colleges,setcolleges]=useState([]);

    const updateColleges=(id)=>{
        setcolleges(colleges.filter((c)=>c.id !==id));
    };

    //const[colleges,setcolleges]=useState([
      //  {item:101,title:"Java Course",description:"This is demo course"},
        //{item:102,title:"React Course",description:"This is React course"},
        //{item:103,title:"NodeJS Course",description:"This is NodeJS course"},
    //])
    return(
        <div>
            <h1>All Colleges</h1>
            <p>list of colleges as follows</p>
           {colleges.length > 0 
            ? colleges.map((item) => <College key={item.id} college={item}/>) 
            :"No Colleges"};
       </div>

    );
};

export default AllColleges;
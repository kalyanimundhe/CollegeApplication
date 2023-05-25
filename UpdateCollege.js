import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import College from "./College";


const UpdateCollege=()=>{
    useEffect(()=>{
        document.title="UPDATE College || Connect with Kalyani";
},[]);

    const [college,setcollege]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(college);
        postDatatoServer(college);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/addcollege`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("College added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something wenr wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-3">Fill College Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="CollegeId">Course Id</label>
                <Input
                        Type="text"
                        placeholder="Enter collegeId here"
                        name="CollegeId"
                        Id="CollegeId"
                        onChange={(e)=>{
                            setcollege({...college,id:e.target.value});
                        }}
                />
            </FormGroup>
            <FormGroup>
                <label for="name">College Name</label>
                <Input
                        Type="text"
                        placeholder="Enter college name here"
                        name="name"
                        Id="name"
                        onChange={(e)=>{
                            setcollege({...college,name:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="address">College Address</label>
                <Input
                        Type="textarea"
                        placeholder="Enter address here "
                        Id="address"
                        style={{height:150}}
                        onChange={(e)=>{
                            setcollege({...college,address:e.target.value});
                        }}
                />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Update College</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default UpdateCollege;
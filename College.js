import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const College=({college,update})=>{

  //delete college
  const deleteCollege=(id)=>{
    axios.delete(`${base_url}/deletecollege/${id}`).then(
      (response)=>{
        toast.success("College deleted successfully");
        update(id);
      },
      (error)=>{
        toast.error("College not deleted");
      }
    )
  }
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
        toast.success("College deleted successfully",{position:"bottom-center"});
    },
    (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something went wrong ",{position:"bottom-center"});
    }
);
};
return (
    <Card className="text-center">
    <CardBody>
          <CardSubtitle className="font-weight-bold">{college.name}</CardSubtitle>
          <CardText>{college.address}</CardText>  
          <Container className="text-center">
              <Button color="danger" onClick={()=>{
                deleteCollege(college.id);
              }} >Delete</Button>{' '}

              
              <Button color="warning  ml-5" type="submit" href="/update-college">Update</Button>
          </Container>
    </CardBody>
  </Card>
);  
}
export default College;
import { Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const About=()=>{
    useEffect(()=>{
        document.title="About || Information about college";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>About US</CardTitle>
            
            <p> 
                   This project is based on carrying out which college available in Maharastra.
                   This application helps to find college details for addmission point of view.

            </p>
           
        </CardBody>
        </Card>  
     </div>
    );
};
export default About;
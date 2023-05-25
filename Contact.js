import { Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Contact=()=>{
    useEffect(()=>{
        document.title="Contact || For help";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Contact US</CardTitle>
            
            <p> 
                   contact-Helpline no-450-825
                    website-www.collegemanagmenthelp.com

            </p>
           
        </CardBody>
        </Card>  
     </div>
    );
};
export default Contact;
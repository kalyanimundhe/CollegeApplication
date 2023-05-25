import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home || Information of college with kalyani";
},[]);
    return(
        
    <div >
       
       <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Information of College with Kalyani</CardTitle>
            
            <p> 
                    This college application is developed by Kalyani  for basic understanding of college available in Maharashtra
            </p>
            <Container className="text-center">
                <Button color="primary" outline>Get Details</Button>
            </Container>
        </CardBody>
        </Card>  
     </div>
    );
};
export default Home;
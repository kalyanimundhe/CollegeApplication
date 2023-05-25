import React from "react";
//import { Link } from "react-router-dom";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        <ListGroup>
          <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-college">Add College</ListGroupItem>
            <ListGroupItem tag="a" href="/view-colleges">View College</ListGroupItem>
            <ListGroupItem tag="a" href="/update-college">Update College</ListGroupItem>
            <ListGroupItem tag="a" href="/About-us">About</ListGroupItem>
            <ListGroupItem tag="a" href="/Contact-us">Contact</ListGroupItem>

        </ListGroup>
    );
    
}
export default Menus;
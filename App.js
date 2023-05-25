import { Button, Container, Row ,Col} from 'reactstrap';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Componants/Header';
import Contact from './Componants/Contact';
import Home from './Componants/Home';
import AllColleges from './Componants/AllColleges';
import AddCollege from './Componants/AddCollege'
import Menus from './Componants/Menus';
import UpdateCollege from './Componants/UpdateCollege';
import About from './Componants/About';


function App() {
  const btnHandle=()=>{
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    <div>
        
        <ToastContainer/>
          <Header/>
                <Container>
                    <div className="row">
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                      
                                  <Route path="/add-college" element={<AddCollege />} exact/> 
                        
                     
                                  <Route path="/view-colleges"element={<AllColleges />} exact/>

                                  <Route path="/update-college"element={<UpdateCollege />} exact/>
                                  <Route path="/About-us" element={<About/>}exact/>
                                  <Route path="/Contact-us" element={<Contact/>}exact/>


                        
                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
      
    </div>
   
  );
}

export default App;


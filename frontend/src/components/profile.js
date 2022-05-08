import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from "@nextui-org/react";
import Card from './card';
import data from '../data'


export default function profile() {
  return (


<div style ={{ backgroundColor: 'grey', height: "45rem"}} className='container mt-2'>
<h1> Profile information</h1> 
    <div className='row'>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
    <div>
                <img style= {{ height: "30rem" }} src="https://www.clipartmax.com/png/full/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png" alt="display image" />
            </div>
    </div>
    <div  className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <div style={{ textAlign: 'center', marginLeft: "180px", marginTop: "100px"}}>
    <h1 >Username:</h1>
      <h4>Ahmed_Gh</h4>
        
        <h1>Name:</h1>
      <h4>Mr. Ahmed alghamdi</h4>

      <h1>Email:</h1>
      <h4>Ahmed_Gh@gmail.com</h4>
      </div>

    </div>
  
</div>

</div>
  )
}

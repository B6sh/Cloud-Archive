import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from "@nextui-org/react";
import Card from './card';
import data from '../data'


export default function favorite() {
  return (



<div className='container mt-3'>
<h1> Favorite books</h1>   
    <div className='row'>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
        <Card />
    </div>
</div>

</div>
  )
}

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from "@nextui-org/react";
import Card from './card';

export default function Home() {
    return (
        <div className='container mt-3'>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Book name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="bookSearch">
                    Search
                </Button>
            </InputGroup>
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
            </div>

        </div>
    )
}

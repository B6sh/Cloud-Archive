import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from "@nextui-org/react";
import Card from './card';
import data from '../data'
// import { history } from "react-router-dom";

export default function Home() {
    const [books, setBooks] = useState(data);
    // const handleViewBook = (e) => {
    //     history.push(`/books/${id}`)
    // }
    return (
        <div className='container mt-3 mb-5'>
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
                {books.map((book) => (
                    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4'>
                        <Card title={book.title} author={book.authors} id={book.bookID} />
                    </div>
                ))}
            </div>

        </div>
    )
}

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Grid } from "@nextui-org/react";
import Card from './card';
import data from '../data'
import { GiArchiveResearch } from "react-icons/gi";
// import { history } from "react-router-dom";

export default function Home() {
    const [books, setBooks] = useState(data); // fetch all books
    // const handleViewBook = (e) => {
    //     history.push(`/books/${id}`)
    // }

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className='container mt-3 mb-5'>
            <Grid.Container justify="flex-start" >
                <Grid lg={12} xl={12} sm={12} md={12} xs={12}>
                    <Input
                        rounded
                        bordered
                        label="Search"
                        placeholder="Search for a book..."
                        color="primary"
                        contentRight={
                            <GiArchiveResearch width="16" height="16" fill="#038CC4" />
                        }
                        onChange={(e) => { setSearchTerm(e.target.value); }}
                    />
                </Grid>
            </Grid.Container>
            <div className='row'>
                {books.filter((book) => {
                    if (searchTerm == "") {
                        return book;
                    } else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return book;
                    }
                }).map((book) => (
                    <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4' key={book.bookID}>
                        <Card title={book.title} author={book.authors} id={book.bookID} />
                    </div>
                ))}
            </div>

        </div>
    )
}

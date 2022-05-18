import React, { useEffect, useState } from 'react'
import { Loading } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Grid } from "@nextui-org/react";
import Card from './card';
import data from '../data'
import { GiArchiveResearch } from "react-icons/gi";
import axios from 'axios';
// import { history } from "react-router-dom";

export default function Home() {
    const [books, setBooks] = useState([]); // fetch all books  useState([]);
    const [IsLoaded, setIsLoaded] = useState(false);
    // const handleViewBook = (e) => {
    //     history.push(`/books/${id}`)
    // }

    // To fetch all books from Backend
    useEffect(() => {
        axios.get('/book')
            .then(res => {
                // console.log(res);
                setBooks(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const [searchTerm, setSearchTerm] = useState("");
    const [visible, setVisible] = useState(10);

    const showMoreBooks = () => {
        setVisible((preValue) => preValue + 10);
    }
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
                {IsLoaded ?

                    books.filter((book) => {
                        if (searchTerm == "") {
                            return book;
                        } else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return book;
                        }
                    }).slice(0, visible).map((book) => (
                        <div className='col-lg-4 col-md-4 col-xl-4 col-sm-6 mt-4' key={book._id}>
                            <Card title={book.title} author={book.authors} id={book._id} />
                        </div>
                    ))

                    : <h1 className='text-center mt-5'><Loading size="xl" >Fetching books</Loading></h1>
                }
                <button onClick={showMoreBooks} className='btn btn-info text-white mt-5'>Load more books..</button>
            </div>
        </div>
    )
}

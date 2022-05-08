import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../data'
export default function Book() {
    const [id, setId] = useState(null);
    const [books, setBooks] = useState(data);
    const params = useParams();
    console.log(params.id)

    return (
        <div>
            Book description: {books[params.id].title}
        </div>
    )
}



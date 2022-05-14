import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Link, useNavigate} from "react-router-dom";
import React from 'react'

export default function Card2(props) {
    let navigate = useNavigate();
    // No fetch
    return (
        <Card cover css={{ w: "100%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        Book Title
                    </Text>
                    <Text h6 color="black">
                        {props.title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body>
                <Card.Image
                    src='https://w0.peakpx.com/wallpaper/972/48/HD-wallpaper-stack-of-books-blue-background-education-concepts-books-library-school-learning-concepts.jpg'
                    height={400}
                    width="100%"
                    alt="Book background"
                />
            </Card.Body>
            <Card.Footer
                blur
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            Author: {props.author}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Button onClick={() => {navigate(`/books/${props.id}`)}} flat auto rounded color="primary">
                                <Text
                                    css={{ color: "inherit" }}
                                    size={12}
                                    weight="bold"
                                    transform="uppercase"
                                >
                                    View Book
                                </Text>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

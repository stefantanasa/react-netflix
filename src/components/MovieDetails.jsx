import React from "react";
import {
  Card,
  Button,
  Container,
  ListGroup,
  Row,
  Badge,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const [comments, setComments] = useState([]);
  const [movieId, setMovieId] = useState("");
  let params = useParams();

  let fetchComments = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTExNTU3MzEsImV4cCI6MTY1MjM2NTMzMX0.ZK9YlOsbq0-R9Y8ZnEuqZbqRYm9wPj_VJxJELxOxd3o",
        },
      }
    );
    if (response.ok) {
      let com = await response.json();
      console.log(com);
      setComments(com);
    } else {
      console.log("Something is wrong");
    }
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Container className="">
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <ListGroup variant="flush">
          {comments.map((c) => (
            <ListGroup.Item key={c._id}>
              <Badge variant={"danger"} className="mr-3">
                {c.rate}
              </Badge>
              {c.comment}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default MovieDetails;

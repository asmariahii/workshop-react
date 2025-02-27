// Components/Events.js
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { Link } from 'react-router-dom'; // Importer Link pour la navigation
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("../src/data/Event.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Erreur lors du chargement des événements:", error));
  }, []);

  // Fonction pour réserver un événement
  const bookEvent = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, i) =>
        i === index && event.nbTickets > 0
          ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
          : event
      )
    );
  };

  // Fonction pour gérer Like/Dislike
  const toggleLike = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, i) =>
        i === index ? { ...event, like: !event.like } : event
      )
    );
  };

  return (
    <Container className="mt-4">
      {/* Message de bienvenue */}
      <Alert variant="success">
        <h4>Bienvenue sur notre plateforme d'événements!</h4>
        <p>Nous avons des événements passionnants à venir. Réservez votre place dès maintenant!</p>
      </Alert>

      <Row className="g-4">
        {events.map((event, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            {/* Lien vers la page de détails avec l'ID de l'événement */}
            <Link to={`/event/${event.id}`} style={{ textDecoration: 'none' }}>
              <Event 
                event={event} 
                onBook={() => bookEvent(index)} 
                onLikeToggle={() => toggleLike(index)} 
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;

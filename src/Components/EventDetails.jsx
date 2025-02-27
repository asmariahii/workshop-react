// Components/EventDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";

const EventDetails = () => {
  const { eventId } = useParams();  // Récupérer l'ID de l'événement depuis l'URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Vérifier si l'ID est défini
    if (!eventId) {
      console.error("ID de l'événement manquant");
      return;
    }

    fetch("../src/data/Event.json")
      .then((response) => response.json())
      .then((data) => {
        // Chercher l'événement avec l'ID récupéré
        const selectedEvent = data.find((event) => event.id === eventId);
        if (selectedEvent) {
          setEvent(selectedEvent);
        } else {
          console.error("Événement non trouvé");
        }
      })
      .catch((error) => console.error("Erreur lors de la récupération des détails de l'événement:", error));
  }, [eventId]);

  if (!event) {
    return <div>Chargement des détails...</div>;
  }

  return (
    <Container className="mt-4">
      <Alert variant="info">
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <p>Lieu: {event.location}</p>
        <p>Participants: {event.nbParticipants}/{event.nbTickets} billets réservés</p>
      </Alert>
    </Container>
  );
};

export default EventDetails;

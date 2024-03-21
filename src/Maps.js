import React from "react";

function Maps() {
  return (
    <div className="App">
      <h1 className="mapsH1">
        Biserica Penticostală "Betel" Rebrișoara
      </h1>
      <div className="mapContainer">
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563.4293233228395!2d24.451799346734337!3d47.28678222292325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749fcb7fa18d147%3A0xa8b140307b13d7d!2sBiserica%20Penticostal%C4%83%20%22Betel%22%20Rebri%C8%99oara!5e0!3m2!1sro!2sro!4v1710873040916!5m2!1sro!2sro"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="message">
        Vă așteptăm cu drag să ne vizitați la biserica noastră!
      </p>
      <div className="contactInfo">
        <p>Adresă: Str. Principală, Nr.242, Rebrișoara</p>
        <p>Telefon: 0123 456 789</p>
        <p>Email: contact@betelrebrișoara.ro</p>
      </div>
    </div>
  );
}

export default Maps;

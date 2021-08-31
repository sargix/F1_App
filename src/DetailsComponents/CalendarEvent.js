import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import BackButton from "../components/Utils/BackButton";
import { checkImg } from "../components/Utils/Images";

const CalendarEvent = (props) => {
  const [event, setEvent] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const round = props.match.params.round;

  const getEventData = () => {
    const api = `http://ergast.com/api/f1/current/${round}.json`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const event = data.MRData.RaceTable.Races[0];
        setEvent(event);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getEventData();
  });

  useEffect(() => {
    return () => {
      setEvent([]);
      setIsLoaded(false);
    };
  }, []);

  return (
    <>
      {isLoaded ? (
        <div>
          <BackButton />
          <div className="details">
            <h1 className="details__h1">Szczegóły</h1>
            <div
              className="details__div"
              style={{
                backgroundImage: `url(${checkImg(event.Circuit.circuitId)})`,
              }}
            >
              <div className="details__div-wrap">
                <h2 className="details__h2">{`Runda ${event.round} sezonu ${event.season}`}</h2>
                <p className="details__p">{event.raceName}</p>
                <p className="details__p">{event.Circuit.circuitName}</p>
                <p className="details__p">Współrzędne: </p>
                <p className="details__p">{event.Circuit.Location.lat}</p>
                <p className="details__p">{event.Circuit.Location.long}</p>
                <p className="details__p">{event.Circuit.Location.locality}</p>
                <p className="details__p">{event.Circuit.Location.country}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CalendarEvent;

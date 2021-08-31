import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import ButtonDetails from "../components/Utils/ButtonDetails";
import BackButton from "../components/Utils/BackButton";
import Error from "./Error";

import { checkImg } from "../components/Utils/Images";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const api = "http://ergast.com/api/f1/current.json";
    fetch(api)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        setCalendar(data.MRData.RaceTable.Races);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(`${error}`);
      });
  }, []);

  useEffect(() => {
    return () => {
      setCalendar([]);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const calendarEvents = calendar.map((event) => (
    <div className="calendar__event" key={event.round}>
      <h2 className="calendar__h2">Runda {event.round}</h2>
      <p className="calendar__name">{event.raceName}</p>
      <p className="calendar__location">
        {event.Circuit.Location.country}, {event.Circuit.Location.locality}
      </p>
      <p className="calendar__date">{event.date}</p>
      <div
        className="calendar__img"
        style={{
          backgroundImage: `url(${checkImg(event.Circuit.circuitId)})`,
        }}
      ></div>
      <ButtonDetails path={`/event/${event.round}`} />
    </div>
  ));
  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div>
            <BackButton />
            <div className="calendar">
              <h1 className="calendar__h1">Kalendarz</h1>
              {calendarEvents}
            </div>
          </div>
        ) : (
          <Loader />
        )
      ) : (
        <Error error={isError} />
      )}
    </>
  );
};

export default Calendar;

import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import ButtonDetails from "../components/Utils/ButtonDetails";
import BackButton from "../components/Utils/BackButton";
import Error from "./Error";

import { checkImg } from "../components/Utils/Images";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const api = "http://ergast.com/api/f1/current/circuits.json";
    fetch(api)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        setTracks(data.MRData.CircuitTable.Circuits);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(`${error}`);
      });
  }, []);

  useEffect(() => {
    return () => {
      setTracks([]);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const tracksInf = tracks.map((track) => (
    <div className="tracks__track" key={track.circuitId}>
      <h2 className="tracks__h2">Tor {track.circuitName}</h2>
      <p className="tracks__inf">
        Lokalizacja {track.Location.country}, {track.Location.locality}
      </p>
      <div
        className="tracks__img"
        style={{
          backgroundImage: `url(${checkImg(track.circuitId)})`,
        }}
      ></div>
      <ButtonDetails path={`/track/${track.circuitId}`} />
    </div>
  ));
  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div>
            <BackButton />
            <div className="tracks">
              <h1 className="tracks__h1">Tory</h1>
              {tracksInf}
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

export default Tracks;

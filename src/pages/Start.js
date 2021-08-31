import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import { randomImg } from "../components/Utils/StartImages";
import Error from "./Error";

const Start = () => {
  const [track, setTrack] = useState(null);
  const [driver, setDriver] = useState(null);
  const [gp, setGp] = useState(null);
  const [fastLapDriver, setFastLapDriver] = useState(null);
  const [lapTime, setLapTime] = useState(null);
  const [poleDriver, setPoleDriver] = useState(null);
  const [poleTime, setPoleTime] = useState(null);
  const [collisionCount, setCollisionCount] = useState(null);
  const [country, setCountry] = useState(null);
  const [inf_1, setInf_1] = useState(false);
  const [inf_2, setInf_2] = useState(false);
  const [inf_3, setInf_3] = useState(false);
  const [inf_4, setInf_4] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isError, setIsError] = useState(false);

  const downloadData = (api_1, api_2, api_3, api_4) => {
    fetch(api_1)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) =>
        response
          .json()
          .then((data) => {
            const race = data.MRData.RaceTable.Races[0];
            setTrack(race.Circuit.circuitName);
            setDriver(
              `${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`
            );
            setGp(race.raceName);
            setCountry(race.Circuit.Location.country);
            setInf_1(true);
          })
          .catch((error) => {
            setIsError(`${error}`);
          })
      );
    fetch(api_2)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) =>
        response
          .json()
          .then((data) => {
            const race = data.MRData.RaceTable.Races[0];
            setFastLapDriver(
              `${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`
            );
            setLapTime(race.Results[0].FastestLap.Time.time);
            setInf_2(true);
          })
          .catch((error) => {
            setIsError(`${error}`);
          })
      );
    fetch(api_3)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) =>
        response
          .json()
          .then((data) => {
            const race = data.MRData.RaceTable.Races[0];
            setPoleDriver(
              `${race.QualifyingResults[0].Driver.givenName} ${race.QualifyingResults[0].Driver.familyName}`
            );
            setPoleTime(race.QualifyingResults[0].Q3);
            setInf_3(true);
          })
          .catch((error) => {
            setIsError(`${error}`);
          })
      );
    fetch(api_4)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) =>
        response
          .json()
          .then((data) => {
            const race = data.MRData.StatusTable.Status[2];
            setCollisionCount(race.count);
            setInf_4(true);
          })
          .catch((error) => {
            setIsError(`${error}`);
          })
      );
  };

  useEffect(() => {
    const api_1 = "http://ergast.com/api/f1/current/last/results.json";
    const api_2 =
      "https://ergast.com/api/f1/current/last/fastest/1/results.json";
    const api_3 = "https://ergast.com/api/f1/current/last/qualifying/1.json";
    const api_4 = "https://ergast.com/api/f1/current/last/status.json";
    downloadData(api_1, api_2, api_3, api_4);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      if (inf_1 && inf_2 && inf_3 && inf_4) {
        setIsLoaded(true);
        setCounter(1);
      } else return;
    }
  }, [counter, inf_1, inf_2, inf_3, inf_4]);

  useEffect(() => {
    return () => {
      setTrack(null);
      setDriver(null);
      setGp(null);
      setPoleTime(null);
      setPoleDriver(null);
      setFastLapDriver(null);
      setLapTime(null);
      setCollisionCount(null);
      setCountry(null);
      setInf_1(false);
      setInf_2(false);
      setInf_3(false);
      setInf_4(false);
      setCounter(0);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const finishDriversCount = (track) => {
    switch (collisionCount) {
      case 0:
        return `Wszyscy kierowcy ukończyli wyścig na ${track}`;
      case 1:
        return `1 kierowca nie ukończył wyścigu na ${track}`;
      default:
        return `${collisionCount} kierowców nie ukończyło wyścigu na ${track}`;
    }
  };
  const newsMake = (headersNews) => {
    const news = headersNews.map((header, index) => (
      <div
        key={index}
        className="start__news"
        style={{ backgroundImage: `url(${header[1]})` }}
      >
        <div className="start__news-wrap">{header[0]}</div>
      </div>
    ));
    return news;
  };

  const headersNews = [
    [
      <h2 className="start__h2">
        {`Pole position na torze ${track} zdobywa ${poleDriver} z czasem ${poleTime}`}
      </h2>,
      randomImg(0, 2),
    ],
    [
      <h2 className="start__h2">{`${gp} wygrywa ${driver}`}</h2>,
      randomImg(3, 5),
    ],
    [
      <h2 className="start__h2">{finishDriversCount(track)}</h2>,
      randomImg(6, 8),
    ],
    [
      <h2 className="start__h2">
        {`Najszybsze okrążenie wyścigu na ${country} zdobywa ${fastLapDriver} z czasem ${lapTime}`}
      </h2>,
      randomImg(9, 11),
    ],
  ];

  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div className="start">
            <h1 className="start__h1">Strona główna</h1>
            {newsMake(headersNews)}
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

export default Start;

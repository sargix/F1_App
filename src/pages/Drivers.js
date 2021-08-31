import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import ButtonDetails from "../components/Utils/ButtonDetails";
import BackButton from "../components/Utils/BackButton";
import Error from "./Error";

import { checkImg } from "../components/Utils/Images";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const api = "https://ergast.com/api/f1/current/drivers.json";
    fetch(api)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data.MRData.DriverTable.Drivers);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(`${error}`);
      });
  });

  useEffect(() => {
    return () => {
      setDrivers([]);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const driversInf = drivers.map((driver) => (
    <div className="drivers__driver" key={driver.driverId}>
      <h2 className="drivers__h2">{`${driver.givenName} ${driver.familyName}`}</h2>
      <p className="drivers__num">Numer {driver.permanentNumber}</p>
      <p className="drivers__date">Data urodzenia {driver.dateOfBirth}</p>
      <p className="drivers__nat">Narodowość {driver.nationality}</p>
      <div
        className="drivers__img"
        style={{
          backgroundImage: `url(${checkImg(driver.driverId)})`,
        }}
      ></div>
      <ButtonDetails path={`/driver/${driver.driverId}`} />
    </div>
  ));
  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div>
            <BackButton />
            <div className="drivers">
              <h1 className="drivers__h1">Kierowcy</h1>
              {driversInf}
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

export default Drivers;

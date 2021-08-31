import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import BackButton from "../components/Utils/BackButton";
import Error from "./Error";

const DriversStd = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const api = "https://ergast.com/api/f1/current/driverStandings.json";
    fetch(api)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        setDrivers(
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        );
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(`${error}`);
      });
  }, []);

  useEffect(() => {
    return () => {
      setDrivers([]);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const driversTable = drivers.map((driver) => (
    <tr key={driver.Driver.driverId}>
      <td>{driver.position}</td>
      <td className={`driverStd__team-${driver.Constructors[0].constructorId}`}>
        {driver.Driver.givenName} {driver.Driver.familyName}
      </td>
      <td>{driver.Driver.permanentNumber}</td>
      <td>{driver.Constructors[0].name}</td>
      <td>{driver.points}</td>
    </tr>
  ));
  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div>
            <BackButton />
            <div className="driverStd">
              <h1 className="driverStd__h1">Klasyfikacja Kierowców</h1>
              <table className="driverStd__table">
                <thead>
                  <tr>
                    <th>Poz</th>
                    <th>Kierowca</th>
                    <th>Nr</th>
                    <th>Zespół</th>
                    <th>Pkt</th>
                  </tr>
                </thead>
                <tbody>{driversTable}</tbody>
              </table>
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
export default DriversStd;

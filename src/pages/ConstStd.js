import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import BackButton from "../components/Utils/BackButton";
import Error from "./Error";

const ConstStd = () => {
  const [constructors, setConstructors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const api = "https://ergast.com/api/f1/current/constructorStandings.json";
    fetch(api)
      .then((response) => {
        if (response.ok) return response;
        throw Error(response.statusText);
      })
      .then((response) => response.json())
      .then((data) => {
        setConstructors(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        );
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsError(`${error}`);
      });
  }, []);

  useEffect(() => {
    return () => {
      setConstructors([]);
      setIsLoaded(false);
      setIsError(false);
    };
  }, []);

  const constructorsTable = constructors.map((constructor) => (
    <tr key={constructor.Constructor.constructorId}>
      <td>{constructor.position}</td>
      <td className={`constStd__team-${constructor.Constructor.constructorId}`}>
        {constructor.Constructor.name}
      </td>
      <td>{constructor.points}</td>
    </tr>
  ));
  return (
    <>
      {!isError ? (
        isLoaded ? (
          <div>
            <BackButton />
            <div className="constStd">
              <h1 className="constStd__h1">Klasyfikacja Konstruktorów</h1>
              <table className="constStd__table">
                <thead>
                  <tr>
                    <th>Pozycja</th>
                    <th>Zespół</th>
                    <th>Pkt</th>
                  </tr>
                </thead>
                <tbody>{constructorsTable}</tbody>
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

export default ConstStd;

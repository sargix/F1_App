import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import BackButton from "../components/Utils/BackButton";
import { checkImg } from "../components/Utils/Images";

const Driver = (props) => {
  const [driver, setDriver] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const driverId = props.match.params.driverId;

  const getDriverData = () => {
    const api = `http://ergast.com/api/f1/drivers/${driverId}.json`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const driver = data.MRData.DriverTable.Drivers[0];
        setDriver(driver);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getDriverData();
  });

  useEffect(() => {
    return () => {
      setDriver([]);
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
                backgroundImage: `url(${checkImg(driver.driverId)})`,
              }}
            >
              <div className="details__div-wrap">
                <h2 className="details__h2">{`Kierowca ${driver.givenName} ${driver.familyName}`}</h2>
                <p className="details__p">{driver.pernamentNumber}</p>
                <p className="details__p">{driver.dateOfBirth}</p>
                <p className="details__p">{driver.nationality}</p>
                <p className="details__p">{driver.code}</p>
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

export default Driver;

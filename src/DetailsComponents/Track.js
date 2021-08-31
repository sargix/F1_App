import React, { useEffect, useState } from "react";

import Loader from "../components/Utils/Loader";
import BackButton from "../components/Utils/BackButton";
import { checkImg } from "../components/Utils/Images";

const Track = (props) => {
  const [track, setTrack] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const trackId = props.match.params.circuitId;

  const getTrackData = () => {
    const api = `http://ergast.com/api/f1/circuits/${trackId}.json`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const track = data.MRData.CircuitTable.Circuits[0];
        setTrack(track);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    getTrackData();
  });

  useEffect(() => {
    return () => {
      setTrack([]);
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
                backgroundImage: `url(${checkImg(track.circuitId)})`,
              }}
            >
              <div className="details__div-wrap">
                <h2 className="details__h2">{`Tor ${track.circuitName}`}</h2>
                <p className="details__p">Współrzędne: </p>
                <p className="details__p">{track.Location.lat}</p>
                <p className="details__p">{track.Location.long}</p>
                <p className="details__p">{track.Location.locality}</p>
                <p className="details__p">{track.Location.country}</p>
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

export default Track;

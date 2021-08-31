import React from "react";
import { Redirect, Route } from "react-router-dom";

import Start from "../pages/Start";
import DriversStd from "../pages/DriversStd";
import ConstStd from "../pages/ConstStd";
import Calendar from "../pages/Calendar";
import Tracks from "../pages/Tracks";
import Drivers from "../pages/Drivers";
import CalendarEvent from "../DetailsComponents/CalendarEvent";
import Driver from "../DetailsComponents/Driver";
import Track from "../DetailsComponents/Track";

const Main = () => {
  return (
    <main>
      <Route exact path="/">
        <Start />
      </Route>
      <Route path="/std-drv">
        <DriversStd />
      </Route>
      <Route path="/std-con">
        <ConstStd />
      </Route>
      <Route path="/calendar">
        <Calendar />
      </Route>
      <Route path="/tracks">
        <Tracks />
      </Route>
      <Route path="/drivers">
        <Drivers />
      </Route>
      <Route path="/event/:round" component={CalendarEvent}></Route>
      <Route path="/driver/:driverId" component={Driver}></Route>
      <Route path="/track/:circuitId" component={Track}></Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </main>
  );
};

export default Main;

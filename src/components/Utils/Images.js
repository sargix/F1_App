import bahrain from "../../images/tracks/bahrain.jpg";
import imola from "../../images/tracks/imola.jpg";
import portimao from "../../images/tracks/portimao.jpg";
import catalunya from "../../images/tracks/catalunya.jpg";
import monaco from "../../images/tracks/monaco.jpg";
import baku from "../../images/tracks/baku.jpg";
import ricard from "../../images/tracks/ricard.jpg";
import red_bull_ring from "../../images/tracks/red_bull_ring.jpg";
import silverstone from "../../images/tracks/silverstone.jpg";
import hungaroring from "../../images/tracks/hungaroring.jpg";
import spa from "../../images/tracks/spa.jpg";
import zandvoort from "../../images/tracks/zandvort.jpg";
import sochi from "../../images/tracks/sochi.jpg";
import istanbul from "../../images/tracks/istanbul.jpg";
import suzuka from "../../images/tracks/suzuka.jpg";
import americas from "../../images/tracks/americas.jpg";
import rodriguez from "../../images/tracks/mexico.jpg";
import interlagos from "../../images/tracks/interlagos.jpg";
import albert_park from "../../images/tracks/albert_park.jpg";
import jeddah from "../../images/tracks/jeddah.jpg";
import yas_marina from "../../images/tracks/yas_marina.jpg";
import monza from "../../images/tracks/monza.jpg";

import ham from "../../images/drivers/ham.jpg";
import bot from "../../images/drivers/bot.jpg";
import ver from "../../images/drivers/ver.jpg";
import per from "../../images/drivers/per.jpg";
import nor from "../../images/drivers/nor.jpg";
import ric from "../../images/drivers/ric.jpg";
import sai from "../../images/drivers/sai.jpg";
import lec from "../../images/drivers/lec.jpg";
import oco from "../../images/drivers/oco.jpg";
import alo from "../../images/drivers/alo.jpg";
import vet from "../../images/drivers/vet.jpg";
import str from "../../images/drivers/str.jpg";
import gas from "../../images/drivers/gas.jpg";
import tsu from "../../images/drivers/tsu.jpg";
import rus from "../../images/drivers/rus.jpg";
import lat from "../../images/drivers/lat.jpg";
import sch from "../../images/drivers/sch.jpg";
import maz from "../../images/drivers/maz.jpg";
import rai from "../../images/drivers/rai.jpg";
import gio from "../../images/drivers/gio.jpg";

export const checkImg = (name) => {
  switch (name) {
    case "bahrain":
      return bahrain;
    case "imola":
      return imola;
    case "portimao":
      return portimao;
    case "catalunya":
      return catalunya;
    case "monaco":
      return monaco;
    case "BAK":
      return baku;
    case "ricard":
      return ricard;
    case "red_bull_ring":
      return red_bull_ring;
    case "silverstone":
      return silverstone;
    case "hungaroring":
      return hungaroring;
    case "monza":
      return monza;
    case "spa":
      return spa;
    case "zandvoort":
      return zandvoort;
    case "sochi":
      return sochi;
    case "istanbul":
      return istanbul;
    case "suzuka":
      return suzuka;
    case "americas":
      return americas;
    case "rodriguez":
      return rodriguez;
    case "interlagos":
      return interlagos;
    case "albert_park":
      return albert_park;
    case "jeddah":
      return jeddah;
    case "yas_marina":
      return yas_marina;
    case "alonso":
      return alo;
    case "ocon":
      return oco;
    case "hamilton":
      return ham;
    case "bottas":
      return bot;
    case "max_verstappen":
      return ver;
    case "perez":
      return per;
    case "norris":
      return nor;
    case "ricciardo":
      return ric;
    case "sainz":
      return sai;
    case "leclerc":
      return lec;
    case "gasly":
      return gas;
    case "tsunoda":
      return tsu;
    case "russell":
      return rus;
    case "latifi":
      return lat;
    case "vettel":
      return vet;
    case "stroll":
      return str;
    case "mick_schumacher":
      return sch;
    case "mazepin":
      return maz;
    case "raikkonen":
      return rai;
    case "giovinazzi":
      return gio;
    default:
      break;
  }
};

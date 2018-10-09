import React, { Component } from "react";
import Header from "./header";
import SoftDrinks from "./SoftDrinks/SoftDrinks";
import Aperitifs from "./Aperitifs/Aperitifs";
import BAGinBoxCordial from "./Bag in Box Cordial/Bag in Box Cordial";
import BottleBeer from "./BottleBeer/BottleBeer";
import BottleWater from "./BottleWater/BottleWater";
import DraughtBeer from "./Draught Beer/Draught Beer";
import Liqueurs from "./Liqueurs/Liqueurs";
import RedWine from "./RedWine/RedWine";
import RoseWine from "./RoseWine/RoseWine";
import SparklingWine from "./SparklingWine/SparklingWine";
import Spirits from "./Spirits/Spirits";
import WhiteWine from "./WhiteWine/WhiteWine";
import "../../styles.css";

class ClosingForm extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <SoftDrinks className="wrapper" />
          <Aperitifs className="wrapper" />
          <BAGinBoxCordial className="wrapper" />
          <BottleBeer className="wrapper" />
          <BottleWater className="wrapper" />
          <DraughtBeer className="wrapper" />
          <Liqueurs className="wrapper" />
          <RedWine className="wrapper" />
          <RoseWine className="wrapper" />
          <SparklingWine className="wrapper" />
          <Spirits className="wrapper" />
          <WhiteWine className="wrapper" />
        </div>
      </React.Fragment>
    );
  }
}

export default ClosingForm;

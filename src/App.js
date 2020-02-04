import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

//Transition group downloaded

import MenuPanel from "./Components/MenuPanel";
import TopArea from "./Components/TopArea";
import LandingPage from "./Pages/LandingPage";
import HengitystiePage from "./Pages/HengitystiePage";
import VerenkiertoPage from "./Pages/VerenkiertoPage";
import IhoPage from "./Pages/IhoPage";
import TajuntaPage from "./Pages/TajuntaPage";
import HengitystaajuusPage from "./Pages/HengitystaajuusPage";
import HappisaturaatioPage from "./Pages/HappisaturaatioPage";
import SystolinenverenpainePage from "./Pages/SystolinenverenpainePage";
import SyketaajuusPage from "./Pages/SyketaajuusPage";
import LampotilaPage from "./Pages/LampotilaPage";
import VerensokeriPage from "./Pages/VerensokeriPage";
import TajunnantasoPage from "./Pages/TajunnantasoPage";
import HengitysPage from "./Pages/HengitysPage";
import EmergencyPage from "./Pages/EmergencyPage";
import InstructionPage from "./Pages/InstructionPage";

let testingdata = {
  "Onko hengitystie auki?": true,
  "Onko ilmatie estettä?": false,
  "Hengitys - Normaali hengitys/ei ääniä": true,
  "Hengitys - Vinkuna": true,
  "Hengitys - Korina": true,
  "Hengitys - Rohina": true,
  "Iho, paljastaminen - Normaali": true,
  "Iho, paljastaminen - Kuiva": true,
  "Iho, paljastaminen - Kostea": true,
  "Iho, paljastaminen - Kylmä": true,
  "Iho, paljastaminen - Kuuma": true,
  "Iho, paljastaminen - Ei poikkeavia löydöksiä": true,
  Iho: "Testing",
  "Tuntuuko paikallista lämpöeroa:": false,
  "Tarkista syke:": true,
  "Tajunta - Ei poikkeavia löydöksiä.": true,
  Tajunta: "Testing",
  Hengitystaajuus: 15,
  "Hengitystaajuus - NEWSscore": 1,
  Happisaturaatio: 95,
  "Happisaturaatio - NEWSscore": 1,
  "Systolinen verenpaine": 150,
  "Systolinen verenpaine - NEWSscore": 1,
  Syketaajuus: 60,
  "Syketaajuus - NEWSscore": 3,
  "Mittaa lämpötila": 37,
  "Mittaa lämpötila - NEWSscore": 1,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 10
};

function App() {
  let history = useHistory();
  const [personData, setPersonData] = useState(testingdata);
  const [emergencyVisibility, setEmergencyVisibility] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(false);

  console.log(personData);

  return (
    <BrowserRouter>
      <div className="App">
        <MenuPanel
          menuVisibility={menuVisibility}
          setMenuVisibility={setMenuVisibility}
        />
        <TopArea history={history} setMenuVisibility={setMenuVisibility} />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => (
              <LandingPage
                history={history}
                setEmergencyVisibility={setEmergencyVisibility}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitystie"
            render={props => (
              <HengitystiePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitys"
            render={props => (
              <HengitysPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/iho"
            render={props => (
              <IhoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verenkierto"
            render={props => (
              <VerenkiertoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunta"
            render={props => (
              <TajuntaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/hengitystaajuus"
            render={props => (
              <HengitystaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/happisaturaatio"
            render={props => (
              <HappisaturaatioPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/systolinenverenpaine"
            render={props => (
              <SystolinenverenpainePage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/syketaajuus"
            render={props => (
              <SyketaajuusPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/lampotila"
            render={props => (
              <LampotilaPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/tajunnantaso"
            render={props => (
              <TajunnantasoPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/verensokeri"
            render={props => (
              <VerensokeriPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
          <Route
            path="/instructionPage"
            render={props => (
              <InstructionPage
                personData={personData}
                setPersonData={setPersonData}
                history={history}
                {...props}
              />
            )}
          />
        </Switch>
        <EmergencyPage
          visibility={emergencyVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

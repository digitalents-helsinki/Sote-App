import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
import InstructionPageTwo from "./Pages/InstructionPageTwo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NextButton from "./Components/NextButton";

let testingdata = {
  "Onko hengitystie auki?": true,
  "Onko ilmatie estettä?": false,
  "Hengitys - Normaali hengitys/ei ääniä": true,
  "Iho, paljastaminen - Normaali": true,
  "Iho, paljastaminen - Ei poikkeavia löydöksiä": false,
  Iho: "Testing 23435",
  "Tarkista syke:": false,
  "Tuntuuko lämpörajoja raajoissa:": true,
  "Tajunta - Ei poikkeavia löydöksiä.": true,
  Hengitystaajuus: 15,
  "Hengitystaajuus - NEWSscore": 0,
  Happisaturaatio: 96,
  "Happisaturaatio - NEWSscore": 0,
  "Systolinen verenpaine": 111,
  "Systolinen verenpaine - NEWSscore": 0,
  Syketaajuus: 55,
  "Syketaajuus - NEWSscore": 0,
  "Mittaa lämpötila": 37,
  "Mittaa lämpötila - NEWSscore": 0,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 10,
  "Mittaa verensokeri: - NEWSscore": 0
};

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(sessionStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function App() {
  const [personData, setPersonData] = usePersistedState("personData", {});
  const [controlData, setcontrolData] = usePersistedState("controlData", {});

  const [emergencyVisibility, setEmergencyVisibility] = useState(null); // this should start out as null for animation logic
  const [menuVisibility, setMenuVisibility] = useState(false);

  const NEWSscoreTotal =
    (personData["Tajunnan taso"] === false ? 3 : 0) +
    personData["Hengitystaajuus - NEWSscore"] +
    personData["Happisaturaatio - NEWSscore"] +
    personData["Systolinen verenpaine - NEWSscore"] +
    personData["Syketaajuus - NEWSscore"] +
    personData["Mittaa lämpötila - NEWSscore"];

  const ControlNEWSscoreTotal =
    (controlData["Tajunnan taso"] === false ? 3 : 0) +
    controlData["Hengitystaajuus - NEWSscore"] +
    controlData["Happisaturaatio - NEWSscore"] +
    controlData["Systolinen verenpaine - NEWSscore"] +
    controlData["Syketaajuus - NEWSscore"] +
    controlData["Mittaa lämpötila - NEWSscore"];

  const generateClassNames = historyAction =>
    historyAction === "PUSH" ? "slide-right" : "slide-left";

  console.log(NEWSscoreTotal);

  return (
    <BrowserRouter>
      <div className="App">
        <MenuPanel
          menuVisibility={menuVisibility}
          setMenuVisibility={setMenuVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
          setPersonData={setPersonData}
          testingdata={testingdata}
        />
        <TopArea
          setMenuVisibility={setMenuVisibility}
          personData={personData}
        />
        <Route
          render={({ history, location }) => (
            <TransitionGroup
              component={null}
              childFactory={child =>
                React.cloneElement(child, {
                  classNames: generateClassNames(history.action)
                })
              }
            >
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames={generateClassNames(history.action)}
              >
                <Switch location={location}>
                  <Route
                    exact={true}
                    path="/"
                    children={props => (
                      <LandingPage
                        history={history}
                        setEmergencyVisibility={setEmergencyVisibility}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/hengitystie"
                    children={props => (
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
                    children={props => (
                      <HengitysPage
                        personData={personData}
                        setPersonData={setPersonData}
                        history={history}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/verenkierto"
                    children={props => (
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
                    children={props => (
                      <TajuntaPage
                        personData={personData}
                        setPersonData={setPersonData}
                        history={history}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/iho"
                    children={props => (
                      <IhoPage
                        personData={personData}
                        setPersonData={setPersonData}
                        history={history}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/hengitystaajuus"
                    children={props => (
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
                    children={props => (
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
                    children={props => (
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
                    children={props => (
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
                    children={props => (
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
                    children={props => (
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
                    children={props => (
                      <VerensokeriPage
                        personData={personData}
                        setPersonData={setPersonData}
                        history={history}
                        NEWSscoreTotal={NEWSscoreTotal}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/instructionPage"
                    children={props => (
                      <InstructionPage
                        personData={personData}
                        setPersonData={setPersonData}
                        controlData={controlData}
                        setcontrolData={setcontrolData}
                        history={history}
                        NEWSscoreTotal={NEWSscoreTotal}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/instructionPageTwo"
                    children={props => (
                      <InstructionPageTwo
                        personData={personData}
                        setPersonData={setPersonData}
                        controlData={controlData}
                        setcontrolData={setcontrolData}
                        NEWSscoreTotal={NEWSscoreTotal}
                        ControlNEWSscoreTotal={ControlNEWSscoreTotal}
                        history={history}
                        {...props}
                      />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <NextButton personData={personData} NEWSscoreTotal={NEWSscoreTotal} />
        <EmergencyPage
          visibility={emergencyVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

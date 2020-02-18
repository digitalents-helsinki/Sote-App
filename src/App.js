import React, { useState } from "react";
import "./App.scss";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

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
  Hengitystaajuus: 45,
  "Hengitystaajuus - NEWSscore": 3,
  Happisaturaatio: 345,
  "Happisaturaatio - NEWSscore": 0,
  "Systolinen verenpaine": 45,
  "Systolinen verenpaine - NEWSscore": 3,
  Syketaajuus: 35,
  "Syketaajuus - NEWSscore": 3,
  "Mittaa lämpötila": 345,
  "Mittaa lämpötila - NEWSscore": 2,
  "Tajunnan taso": true,
  "Mittaa verensokeri:": 5,
  "Mittaa verensokeri: - NEWSscore": 2
};

function App() {
  const [personData, setPersonData] = useState({});
  const [controlData, setcontrolData] = useState({});

  const [emergencyVisibility, setEmergencyVisibility] = useState(null); // this should start out as null for animation logic
  const [menuVisibility, setMenuVisibility] = useState(false);

  const NEWSscoreTotal =
    personData["Hengitystaajuus - NEWSscore"] +
    personData["Happisaturaatio - NEWSscore"] +
    personData["Systolinen verenpaine - NEWSscore"] +
    personData["Syketaajuus - NEWSscore"] +
    personData["Mittaa lämpötila - NEWSscore"];

  const generateClassNames = historyAction =>
    historyAction === "PUSH" ? "slide-right" : "slide-left";

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

        <EmergencyPage
          visibility={emergencyVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

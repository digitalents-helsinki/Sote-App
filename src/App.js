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
import KonsultoitavaPage from "./Pages/KonsultoitavaPage";
import ABCDEPage from "./Pages/ABCDEPage";
import NewsPisteytysPage from "./Pages/NewsPisteytysPage";
import ISBARPage from "./Pages/ISBARPage";
import LastReportPage from "./Pages/LastReportPage";
import InstructionPage from "./Pages/InstructionPage";
import InstructionPageTwo from "./Pages/InstructionPageTwo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NextButton from "./Components/NextButton";

function useSessionState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(sessionStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function useCookieState(key, defaultValue = "") {
  const [state, setState] = useState(() =>
    (cookieMatch => (cookieMatch ? cookieMatch[1] : defaultValue))(
      document.cookie.match(new RegExp(`(?:^|;\\s*)__HOST_SOTE_${key}=([^;]*)`))
    )
  );
  useEffect(() => {
    document.cookie = `__HOST_SOTE_${key}=${state}; Max-Age=${Number.MAX_SAFE_INTEGER}; path=/; Secure; SameSite=Strict;`;
  }, [key, state]);
  return [state, setState];
}

function App() {
  const [careType, setCareType] = useCookieState("careType");
  const [personData, setPersonData] = useSessionState("personData", {});
  const [controlData, setcontrolData] = useSessionState("controlData", {});

  const [emergencyVisibility, setEmergencyVisibility] = useState(null); // this should start out as null for animation logic
  const [KonsultoitavaVisibility, setKonsultoitavaVisibility] = useState(null);
  const [ABCDEVisibility, setABCDEVisibility] = useState(null);
  const [NewsPisteytysVisibility, setNewsPisteytysVisibility] = useState(null);
  const [ISBARVisibility, setISBARVisibility] = useState(null);
  const [LastReportVisibility, setLastReportVisibility] = useState(null);
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

  return (
    <BrowserRouter>
      <div className="App">
        <MenuPanel
          menuVisibility={menuVisibility}
          setMenuVisibility={setMenuVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
          setKonsultoitavaVisibility={setKonsultoitavaVisibility}
          setABCDEVisibility={setABCDEVisibility}
          setNewsPisteytysVisibility={setNewsPisteytysVisibility}
          setISBARVisibility={setISBARVisibility}
          setLastReportVisibility={setLastReportVisibility}
          setPersonData={setPersonData}
          setcontrolData={setcontrolData}
          careType={careType}
          setCareType={setCareType}
        />
        <TopArea
          setMenuVisibility={setMenuVisibility}
          personData={personData}
          careType={careType}
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
                        setCareType={setCareType}
                        careType={careType}
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
                        careType={careType}
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
                        ControlNEWSscoreTotal={ControlNEWSscoreTotal}
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
                        setEmergencyVisibility={setEmergencyVisibility}
                        personData={personData}
                        setPersonData={setPersonData}
                        controlData={controlData}
                        setcontrolData={setcontrolData}
                        NEWSscoreTotal={NEWSscoreTotal}
                        ControlNEWSscoreTotal={ControlNEWSscoreTotal}
                        history={history}
                        careType={careType}
                        {...props}
                      />
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <NextButton
          personData={personData}
          NEWSscoreTotal={NEWSscoreTotal}
          careType={careType}
        />
        <EmergencyPage
          visibility={emergencyVisibility}
          setEmergencyVisibility={setEmergencyVisibility}
          careType={careType}
        />
        <KonsultoitavaPage
          visibility={KonsultoitavaVisibility}
          setKonsultoitavaVisibility={setKonsultoitavaVisibility}
          careType={careType}
        />
        <ABCDEPage
          visibility={ABCDEVisibility}
          setABCDEVisibility={setABCDEVisibility}
          careType={careType}
        />
        <NewsPisteytysPage
          visibility={NewsPisteytysVisibility}
          setNewsPisteytysVisibility={setNewsPisteytysVisibility}
          caretype={careType}
        />
        <ISBARPage
          visibility={ISBARVisibility}
          setISBARVisibility={setISBARVisibility}
          caretype={careType}
        />
        <LastReportPage
          visibility={LastReportVisibility}
          setLastReportVisibility={setLastReportVisibility}
          careType={careType}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

//Transition group downloaded

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

function App() {
  let history = useHistory();
  const [personData, setPersonData] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        <TopArea history={history} />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => <LandingPage history={history} {...props} />}
          />
          <Route
            path="/hengitystie"
            render={props => <HengitystiePage history={history} {...props} />}
          />
          <Route
            path="/hengitys"
            render={props => <HengitysPage history={history} {...props} />}
          />
          <Route
            path="/iho"
            render={props => <IhoPage history={history} {...props} />}
          />
          <Route
            path="/verenkierto"
            render={props => <VerenkiertoPage history={history} {...props} />}
          />
          <Route
            path="/tajunta"
            render={props => <TajuntaPage history={history} {...props} />}
          />
          <Route
            path="/hengitystaajuus"
            render={props => (
              <HengitystaajuusPage history={history} {...props} />
            )}
          />
          <Route
            path="/happisaturaatio"
            render={props => (
              <HappisaturaatioPage history={history} {...props} />
            )}
          />
          <Route
            path="/systolinenverenpaine"
            render={props => (
              <SystolinenverenpainePage history={history} {...props} />
            )}
          />
          <Route
            path="/syketaajuus"
            render={props => <SyketaajuusPage history={history} {...props} />}
          />
          <Route
            path="/lampotila"
            render={props => <LampotilaPage history={history} {...props} />}
          />
          <Route
            path="/tajunnantaso"
            render={props => <TajunnantasoPage history={history} {...props} />}
          />
          <Route
            path="/verensokeri"
            render={props => <VerensokeriPage history={history} {...props} />}
          />
        </Switch>
        <EmergencyPage />
      </div>
    </BrowserRouter>
  );
}

export default App;

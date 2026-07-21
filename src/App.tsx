import "./App.css";

import AppHeader from "./components/layout/AppHeader";
import IncidentPanel from "./components/incidents/IncidentPanel";
import OperationsMap from "./components/map/OperationsMap";
import UnitPanel from "./components/units/UnitPanel";

function App() {
  return (
    <div className="app">
      <AppHeader />

      <main className="app-layout">
        <IncidentPanel />
        <OperationsMap />
        <UnitPanel />
      </main>
    </div>
  );
}

export default App;

import SidePanel from "../layout/SidePanel";

function IncidentPanel() {
  return (
    <SidePanel title="Incidents" statusText="0 Active">
      <div className="empty-state">
        <p>No active incidents</p>
      </div>
    </SidePanel>
  );
}

export default IncidentPanel;

import SidePanel from "../../components/layout/SidePanel";

function UnitPanel() {
  return (
    <SidePanel title="Response Units" statusText="0 Available">
      <div className="empty-state">
        <p>No response units available</p>
      </div>
    </SidePanel>
  );
}

export default UnitPanel;

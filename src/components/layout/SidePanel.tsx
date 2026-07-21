import type { ReactNode } from "react";

type SidePanelProps = {
  title: string;
  statusText: string;
  children: ReactNode;
};

function SidePanel({ title, statusText, children }: SidePanelProps) {
  return (
    <aside className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        <span>{statusText}</span>
      </div>

      {children}
    </aside>
  );
}

export default SidePanel;

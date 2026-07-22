function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <h1>
          Crisis<span>Grid</span>
        </h1>
        <p>Emergency Operations Center</p>
      </div>

      <div className="status">
        <span className="status-dot" aria-hidden="true" />
        <span>System Online</span>
      </div>
    </header>
  );
}

export default AppHeader;

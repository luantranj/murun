export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="navbar">
	  <h1>Nav bar</h1>
      </div>
      <div className="page-content">
        { children }
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}

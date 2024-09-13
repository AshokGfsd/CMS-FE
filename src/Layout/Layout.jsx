import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const handleClick = () => {
    setPath(window.location.pathname);
  };
  return (
    <main className="layout">
      <section className="sidebar" onClick={handleClick}>
        <Sidebar />
      </section>
      <section className="page">{children}</section>
    </main>
  );
};

export default Layout;

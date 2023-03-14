import React from "react"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
        <div className="logo">
          <h2>atpr-consulting</h2>
          <span>analizing - targeting - planning - realisation</span>
        </div>
        <ul className="navlist">
            <li> <Link className="navlistitem" to="/">Home</Link> </li>
            <li> <Link className="navlistitem" to="/seminare">Seminars</Link> </li>
            <li> <Link className="navlistitem" to="/contact">Contact</Link> </li>
            <li> <Link className="navlistitem" to="/about">About us</Link> </li>
        </ul>
    </nav>
  );
}
 export default Header
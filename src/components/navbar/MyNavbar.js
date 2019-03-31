import React from "react"
import { Link } from "gatsby"

import "./myNavbar.css"

const MyNavbar = () => (
  <ul className="nav_styles top_border">
    <li className="float_left brand">Carl-W.</li>
    <li className="float_right">
      {/* eslint-disable-next-line */}
      <a
        href="https://www.github.com/ugglr"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </li>
    <li className="float_right">
      <Link>Projects</Link>
    </li>
    <li className="float_right">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default MyNavbar

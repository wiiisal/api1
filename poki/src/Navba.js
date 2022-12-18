import React from 'react'
import { Link } from 'react-router-dom'

export default function Navba() {
  return (
    <div>
      <nav >
      <ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About Us</Link>
			</li>
			<li>
				<Link to="/contact">Contact Us</Link>
			</li>
			</ul>
      </nav>
    </div>
  )
}

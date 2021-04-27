import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nb-links">
          <Link to="/">Home</Link>
        </div>
        <div className="nb-links">
          <Link to="/todolist">To Do List</Link>
        </div>
        <div className="nb-links">
          <Link to="/tictoctoe">Tic Toc Toe</Link>
        </div>
{/*        <div className="nb-links">
          <Link to="/counter">Redux Counter</Link>
        </div>*/}
      </nav>
    </>
  )
}

export default NavBar




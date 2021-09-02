import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({handleOpen,isOpen}) => {
    return (
        <div className={
            isOpen ? "flex flex-col text-center items-center bg-yellow-500 md:hidden": "hidden"
        } onClick={handleOpen}>
        <Link className="p-4" to="/">
            Home
        </Link>
        <Link className="p-4" to="/menu">
            Menu
        </Link>
        <Link className="p-4" to="/about">
            About
        </Link>
        <Link className="p-4" to="/contact">
            Contact
        </Link>
        </div>
    )
}

export default Dropdown

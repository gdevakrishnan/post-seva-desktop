import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../static/navbar.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function Navbar() {
    const [menuBtn, setMenuBtn] = useState(true);
    const changeBtn = (e) => {
        e.preventDefault();
        setMenuBtn(!menuBtn);
    }

    return (
        <Fragment>
            <header>
                <nav>
                    <input type="checkbox" name="menu" id="menu" />
                    <h1 className='logo'>PostSeva</h1>
                    <label htmlFor="menu">
                        {
                            (menuBtn) ? <FaBarsStaggered /> : <MdClose />
                        }
                    </label>
                    <ul style={(menuBtn) ? { right: "-100%" } : { right: "0px" }}>
                        <li>
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'} >Blogs</Link>
                        </li>
                        <li>
                            <Link to={'/posts'} >Your Posts</Link>
                        </li>
                        <li>
                            <Link to={'/new_post'} >New Post</Link>
                        </li>
                        <li>
                            <Link to={'/logout'} >Logout</Link>
                        </li>
                        <li>
                            <Link to={'/register'} >Register</Link>
                        </li>
                        <li>
                            <Link to={'/login'} >Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Navbar
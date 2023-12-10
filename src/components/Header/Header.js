import logo  from "../images/logo.png";
import heroImg from "../images/hero-img.png";
import {useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";


    


function Header() {
    
    
    
    const [isOpen, setIsOpen] = useState(false)



  return (
    <>
        <header>
            <nav>
                <img src={logo} alt="" />
                <ul className={` list  ${ isOpen ? "active"  : "" } `}>
                    <li>
                        <a href="#">About </a>
                    </li>
                    <li>
                        <a href="#">Services  </a>
                    </li>
                    <li>
                        <a href="#">Pricing  </a>
                    </li>
                    <li>
                        <a href="#">Blog </a>
                    </li>
                </ul>

                <div className="nav-btns">
                    <button>
                      Contact
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="menu">
                        <RxHamburgerMenu/>
                    </button>
                </div>
            </nav>


            <div className="hero">
                <div className="hero-titles">
                    <h4>Modern Studio</h4>
                    <h1>
                        We’re Help 
                        To Build Your 
                        Dream Project
                    </h1>
                    <p>
                    Agency provides a full service range including technical skills, design, business understanding.
                    </p>
                    <div className="hero-btns">
                        <button>How We Work</button>
                        <button>Contact Us</button>
                    </div>
                </div>
                    <div className="hero-imgs">
                        <img src={heroImg} alt="" />
                    </div>
            </div>
        </header>
    </>
  )
}

export default Header
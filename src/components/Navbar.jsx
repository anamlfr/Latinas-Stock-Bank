import { Component } from "react";
import { MenuData } from "./MenuData";

import "./NavbarStyles.css"

class Navbar extends Component {
    state = {clicked: false};
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    handleLogout = () =>{
        navigate("/")
    }

    
    render() {
        return (
                  <nav className="NavbarItems">
                <h1 className="logo">Latinas Stock Bank <i className="fab fa-react"></i></h1>
                <div className="menu-icons"
                onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a href={item.url} 
                                className={item.cName}
                                onClick={item.title === "Cerrar sesión" ? this.handleLogout : null }
                                >
                                
                            <i className={item.icon}></i>{item.title}
                        </a>
                        </li>
                        

                        )
                    })}
                   
                </ul>
            </nav>

          
        )
    }
}

export default Navbar;

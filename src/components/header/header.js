
import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import SidebarVisibilityContext from '../../store/sidebarVisibilityContext';
import Button from "../button/button";
import { UserContext } from "../../store/userContext";



function Header() {
    const[, , toggleSidebarVisibility]=useContext(SidebarVisibilityContext);
    const { user, setUser } = useContext(UserContext);

    const logoutHandler = () =>{
        setUser(null);
    }
    const location = useLocation();

    return (
        <>
            <header className="web-header" id="web-header">
                <div className="container">
                    <button onClick={toggleSidebarVisibility} className="project project--light web-header__toggle-sidebar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link to ="/" className="web-header__logo">
                    
                    
                        <img className="web-header__logo-image" role="img" alt="The Library logo" src= "/images/The_Library_Logo.png" />
                        
                    </Link>

                    <div className='web-header__user-info'>
                        {!user && 
                        <>
                        <Link to= {{pathname:'/login', state: { prevPath: location.pathname }}}  className="button button--hollow web-header__signin"> Log In </Link>
                        <Link to= "/signup" className="button button--hollow web-header__signin"> Sign Up </Link>
                        </>
                        }

                        {
                            user &&
                            <>
                                <span> Hi, {user.user.username} </span>      
                                <button  className="button--hollow web-header__signin" onClick= { logoutHandler }> Log Out</button>                    
                            </>
                        }

                    </div>

                    
                </div>
            </header>
        </>    
    )
}

export default Header;
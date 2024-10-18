import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../styles/PageLayout.css"
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleLogout, handleRedirect } from "../actions/login";

function PageLayout(props) {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!props.loggedUser) {
            if(location.pathname) {
                props.dispatch(handleRedirect(location.pathname))
            }
            navigate('/login')
        }
    },[])

    const hanldeLogout = () => {
        props.dispatch(handleLogout());
        navigate('/login')
    }
    return (
        <>
            <nav className="nav-section">
                <ul className="list-nav">
                    <li><NavLink data-testid='homeLinkId' className={({isActive}) => isActive ? 'nav-active' : ''} to='/'>Home</NavLink></li>
                    <li><NavLink data-testid='leaderBoardLinkId' className={({isActive}) => isActive ? 'nav-active' : ''} to='/leaderboard'>LeaderBoard</NavLink></li>
                    <li><NavLink data-testid='addLinkId' className={({isActive}) => isActive ? 'nav-active' : ''} to='/add'>New Question</NavLink></li>
                </ul>

                <div style={{display:'flex', alignItems: 'center', marginRight: '10px'}}>
                    <img className="logged-avatar" src={props.loggedUser ? props.loggedUser.avatarURL : ''} alt=""></img>
                    <span onClick={hanldeLogout}>Log out</span>
                </div>
            </nav>
            <div className="line"></div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const loggedUser = state.login ? state.login.user : [];
    return {
        loggedUser
    }
};

export default connect(mapStateToProps)(PageLayout)
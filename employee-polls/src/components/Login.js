import '../styles/Login.css';
import { handleLogin } from "../actions/login";
import { connect } from "react-redux";
import { generateUID } from "../shared/_DATA";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    function handleChooseAvatar(user) {
        props.dispatch(handleLogin(user));
        if (props.redirecUrl) {
            navigate(props.redirecUrl)
        } else {
            navigate('/')
        }
    }

    return (
        <div className="login-page">
            <div>
                <h1>EMPLOYEE-POLLS</h1>
                <div>
                    {props.users && props.users.map((user) => (
                        <img key={generateUID()} onClick={() => handleChooseAvatar(user)} alt={user.name} src={user.avatarURL}></img>
                    ))}
                </div>
                <h3>LOGIN PAGE</h3>
                <p>Note: Access application by select picture of user!!</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const redirecUrl = state.login ? state.login.url : '';
    return {
        redirecUrl,
        users: state.user ? Object.values(state.user) : []
    }
};

export default connect(mapStateToProps)(Login);
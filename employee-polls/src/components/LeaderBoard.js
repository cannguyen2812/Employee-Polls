import { connect } from "react-redux";
import "../styles/LeaderBoard.css"
function LeaderBoard(props) {
    return (
        <div className="leader-board-page">
            <table>
                <thead>
                    <tr>
                        <th data-testid="userTestId" style={{ width: '500px' }}>User</th>
                        <th data-testid="answeredTestId" style={{ width: '200px' }}>Answered</th>
                        <th data-testid="createdTestId" style={{ width: '200px' }}>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listUser && props.listUser.map((user) => (
                        <tr key={user.id}>
                            <td style={{ display: "flex" }}>
                                <img className="image-table"
                                    src={user.avatarURL} alt=""></img>
                                <div className="user-data">
                                    <div>{user.name}</div>
                                    <div>{user.id}</div>
                                </div>
                            </td>
                            <td className="center-data-table">{Object.keys(user.answers).length}</td>
                            <td className="center-data-table">{Array.isArray(user.questions) ? user.questions.length : Object.keys(user.questions).length}</td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => {
    const listUser = state.user ? Object.values(state.user).sort((a, b) => {
        return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
    }) : '';
    return {
        listUser
    }
}
export default connect(mapStateToProps)(LeaderBoard);
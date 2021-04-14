const User = ({ match }) => {
    return (
        <div>
            <h2>User Page</h2>
            <p>Hello {match.params.username}</p>
        </div>
    )
}

export default User;
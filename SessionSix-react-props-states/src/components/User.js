
const User = (props) => {
    let name = props.name ? props.name : "Unknown";
    if (props.children) {
        return (<p>User Name: {name} | User Age: {props.age} | User City: {props.children}</p>);
    } else {
        return (<p>User Name: {name} | User Age: {props.age}</p>);
        // return (<p>Invalid Entry..!!</p>);
    }
}

export default User;

{/* <p>User Name: {props.name} | User Age: {props.age} | User City: {props.children}</p> */ }
{/* <p>User Name: {name} | User Age: {props.age} | User City: {props.children}</p> */ }

const Employee = (props) => {
    return (
        <div>
            <p>Name: {props.name} | Age: {props.children}</p>
        </div>
    );
}

export default Employee;
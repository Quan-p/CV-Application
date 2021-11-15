function DisplaySection(props) {
    if (props.firstName) {
        return (
            <div class='displaySection'>
                <span className='material-icons editIcon' onClick={props.handleEdit}>
						create
				</span>
                <p>
                    <span>First Name: </span> {props.firstName}
                </p>
                <p>
                    <span>Last Name: </span> {props.lastName}
                </p>
                <p>
                    <span>Email: </span> {props.email}
                </p>
                <p>
                    <span>Phone: </span> {props.phone}
                </p>
            </div>
        );
    }
}

export default DisplaySection;

import { NoPrint } from "react-easy-print";

function DisplaySection(props) {
    if (props.firstName) {
        return (
            <div class='displaySection'>
                <NoPrint>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
						create
				    </span>
                </NoPrint>
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
    } else if (props.companyName) {
        return (
            <div class='displaySection'>
                <NoPrint>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
						create
				    </span>
                </NoPrint>
                <p>
                    <span>Company Name: </span> {props.companyName}
                </p>
                <p>
                    <span>Position: </span> {props.position}
                </p>
                <p>
                    <span>From: </span> {props.from}
                </p>
                <p>
                    <span>To: </span> {props.to}
                </p>
                <p>
                    <span>Main Tasks: </span> {props.tasks}
                </p>
            </div>
        );
    } else {
        return (
            <div class='displaySection'>
                <NoPrint>
                    <span className='material-icons editIcon' onClick={props.handleEdit}>
						create
				    </span>
                </NoPrint>
                <p>
                    <span>School Name: </span> {props.schoolName}
                </p>
                <p>
                    <span>Position: </span> {props.study}
                </p>
                <p>
                    <span>From: </span> {props.from}
                </p>
                <p>
                    <span>To: </span> {props.to}
                </p>
            </div>
        );
    }
}

export default DisplaySection;

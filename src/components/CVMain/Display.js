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
                    <span className="sectionText">First Name: </span> {props.firstName}
                </p>
                <p>
                    <span className="sectionText">Last Name: </span> {props.lastName}
                </p>
                <p>
                    <span className="sectionText">Email: </span> {props.email}
                </p>
                <p>
                    <span className="sectionText">Phone: </span> {props.phone}
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
                    <span className="sectionText">Company Name: </span> {props.companyName}
                </p>
                <p>
                    <span className="sectionText">Position: </span> {props.position}
                </p>
                <p>
                    <span className="sectionText">From: </span> {props.from}
                </p>
                <p>
                    <span className="sectionText">To: </span> {props.to}
                </p>
                <p>
                    <span className="sectionText">Main Tasks: </span> {props.tasks}
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
                    <span className="sectionText">School Name: </span> {props.schoolName}
                </p>
                <p>
                    <span className="sectionText">Position: </span> {props.study}
                </p>
                <p>
                    <span className="sectionText">From: </span> {props.from}
                </p>
                <p>
                    <span className="sectionText">To: </span> {props.to}
                </p>
            </div>
        );
    }
}

export default DisplaySection;

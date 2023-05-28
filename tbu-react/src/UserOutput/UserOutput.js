import React from "react";
import "./UserOutput.css"

const UserOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p onClick={ props.chnageName }>
                Hello from { props.userName }
            </p>
        </div>
    )
}

export default UserOutput;
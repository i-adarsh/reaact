import React from "react";

const UserInput = ( props ) => {
    return (
        <>
            Enter new name: <input 
                type="text" 
                onChange={ props.eventHandler }
            />
        </>
    )
}

export default UserInput;
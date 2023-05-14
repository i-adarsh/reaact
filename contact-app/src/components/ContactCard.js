import React from "react";
import user  from '../images/user.png';

const cardContact = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className='item'>
            <div className='content'>
                <img className="ui avatar image" src={user} alt='user' />
                <div className='header'>{name}</div>
                <div>{email} 
                <span>
                <i 
                className='trash alternate outline icon'
                style = {{ color: 'red', marginLeft: '95%', marginTop: '7px'}}
                onClick={() => props.clickHandler(id)}
            >
            </i>
            </span>
            </div>
            </div>
            
            
        </div>
    );
}

export default cardContact;
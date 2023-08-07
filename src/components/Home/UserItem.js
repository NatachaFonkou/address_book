import React from 'react'
import './styles/UserItem.css';

function UserItem({user, onClick}) {
    return (
        <div className="d-flex justify-content-between" id='user_item' onClick={onClick}>
            <img className='box' src={user.profile} alt="profile" />
            <div className="box name_job">
                <h4 className='name'>{user.name}</h4>
                <h6 className='job'>{user.job}</h6>
            </div>
            <div className="box phone">{user.phone}</div>
            <div className=" box email">{user.email}</div>
        </div>
    )
}

export default UserItem

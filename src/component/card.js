import React from 'react'
import '../css/Card.css'
function Card({ user }) {
    return (
        <div className="container">
            <div className='card'>
                <div className='box'>
                    <div className='content'>
                        <h2>{user.name}</h2>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
                        <p>Website: {user.website}</p>
                        <p>Company: {user.company.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card
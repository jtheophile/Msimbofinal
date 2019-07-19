import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SearchResults extends Component {  

    render() {        
        const { users } = this.props.location.state
    
        
        return (
        <ul className="container">
                    {users.map(user => (
                        <li className='list-group-item'>
                        <Link to={`/users/${user._id}`}><h3>{user.businessName}</h3>
                        </Link>
                        <p>{user.businessAddress}
                        {user.website}
                        {user.facebook}
                        {user.twitter}
                        {user.instagram}
                        </p>
                    </li>
                ))}
        </ul>
        );
    }
}
import React from 'react';
import './Cards.css'; // Make sure the filename matches the component name and correct import path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faPhone, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';

const FetchedCard = ({ index, name, username, email, address, phone, website, company }) => {
    return (
        <div className="fetched-user-card">
            <h2>{index}: {name}</h2>
            <p>
                <FontAwesomeIcon icon={faUser} />
                <span> {username}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faEnvelope} />
                <span> {email}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span> {address.street}, {address.suite}, {address.city}, {address.zipcode}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faPhone} />
                <span> {phone}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faGlobe} />
                <span> {website}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faBuilding} />
                <span> {company.name} - {company.catchPhrase}</span>
            </p>
        </div>
    );
};

export default FetchedCard;

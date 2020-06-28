import React from 'react';
import './sq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SingleQuality(props) {
    return (
        <div className='quality'>
            <FontAwesomeIcon icon={props.icon} className='icon'/>
            <p>
                {props.desc}
            </p>
        </div>
    );
}

export default SingleQuality;
import React from 'react';
import './qrow.css';
import { faMoneyBillAlt, faCartArrowDown, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import SingleQuality from './singleQuality/sq.js';

function QualityRow() {
    return (
        <div className='rowContainer'>
            <SingleQuality icon={faMoneyBillAlt} desc='Shop quality products at amazing prices' className='icon'/>
            <SingleQuality icon={faCartArrowDown} desc='Top quality items' className='icon'/>
            <SingleQuality icon={faTruckLoading} desc='Delivered to your address in the shortest amount of time' className='icon'/>
        </div>
    );
}

export default QualityRow;
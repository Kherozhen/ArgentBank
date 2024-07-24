import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Field from '../Fields/Field';
import Select from '../Select/Select';


function Collapse ({ date, description, amount, balance, type, category, note }) {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const collapseOpen = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    return (
        
        <div className="collapses">
            <div className="infoCollapse">
                <p className="date">{date}</p>
                <p className="description">{description}</p>
                <p className="amount">{amount}</p>
                <p className="balance">{balance}</p>
                <button onClick={collapseOpen}>
                {isCollapsed ? 
                    <FontAwesomeIcon 
                    className="buttonCollapse"
                    icon={faAngleUp} /> 
                    :
                    <FontAwesomeIcon 
                    className="buttonCollapse"
                    icon={faAngleDown} />
                }
                </button>
            </div>
            {!isCollapsed && 
                <div className='collapseDetailsContent'>
                    <div className='collapseDetails'>
                        <p className='detailsTitle'>Transaction type</p>
                        <p className="type">{type}</p>
                    </div>
                    
                    <Select
                        label="Category"
                        categories={[ '...', 'Home', 'Family', 'Medical', 'Food', 'Car', 'Invoices / Bills', 'Insurances', 'Fines', 'Other',]} 
                        onChange={(newValue) => console.log('Selected Category:', newValue)}
                        titleEmpty={false}
                    />
                        
                    <Field 
                        label="Note"
                    />
                </div>
            }
        </div>
           
    )

};

export default Collapse;


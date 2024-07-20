import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faPencil  } from '@fortawesome/free-solid-svg-icons';

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
            </div>

            <button onClick={collapseOpen}>
                {isCollapsed ? 
                    <FontAwesomeIcon 
                    className="pencil"
                    icon={faAngleUp} /> 
                    :
                    <FontAwesomeIcon 
                    className="pencil"
                    icon={faAngleDown} />
                }
            </button>
            {!isCollapsed && 
                <div>
                    <p className="type">{type}</p>
                    <div>
                        <p className="category">{category}</p>
                        <button>
                            <FontAwesomeIcon 
                            className="pencil"
                            icon={faPencil} />
                        </button>
                    </div>
                    <div>
                        <p className="note">{note}</p>
                        <button>
                            <FontAwesomeIcon 
                            className="pencil"
                            icon={faPencil} />
                        </button>
                    </div>
                </div>
            }
        </div>
           
    )

};

export default Collapse;


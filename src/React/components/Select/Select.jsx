
import { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil  } from '@fortawesome/free-solid-svg-icons';


function Select({ label, categories, onChange, titleEmpty = false }) {

    const [value, setValue] = useState();
    const [collapsed, setCollapsed] = useState(true);
    
    const changeValue = (newValue) => {
        setValue(newValue);
        setCollapsed(true);
        onChange(newValue);
      };


    return(

    <div className="collapseDetails">
        <div className='detailsTitle'>{label}</div>
        <div className="selectCategory">
            <ul>
                <li className={collapsed ? "SelectTitle--show" : "SelectTitle--hide"}>
                    {value || (titleEmpty ? "" : " ")}
                </li>
                {!collapsed && (
                    <>
                       {categories.map((category) => (
                        <li key={category} onClick={() => changeValue(category)}>
                            <div className='choice'>
                                {category}
                            </div>
                            <div className='inputChoice'>
                                <input
                                defaultChecked={value === category}
                                name="selected"
                                type="radio"
                                />{" "}
                            </div>
                        </li>
                        ))}
                    </>
                )}
            </ul>
            <input type="hidden" value={value || ""} name={label || "select"} />
            <button
                type="button"
                className={collapsed ? "open" : "close"}
                onClick={(e) => {
                e.preventDefault();
                setCollapsed(!collapsed);
                }}>
                <FontAwesomeIcon 
                    icon={faPencil} />
            </button>
        </div>
    </div>
)};

export default Select;
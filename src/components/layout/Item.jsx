import React from 'react';
import { useDispatch } from 'react-redux';
import {increment, decrement,removeItem} from '../../redux/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


import './Item.css';

const Item= ({title,amount,img,price,id}) =>{
    const dispatch = useDispatch();
    
    return (
        <li className='parent'>

            <div>
                <img src={img} alt={title} className='image'/>
                
                <div>
                    <h4>{title}</h4>
                    <p className="price">{price}</p>
                    <button type='button'
                     className='remove-btn'
                     onClick={()=> dispatch(removeItem(id))}>
                         remove
                    </button>
                </div>
            </div>


            <div className='counter-container'>
                <FontAwesomeIcon icon={faChevronUp} 
                className='count-icon'
                onClick={()=> dispatch(increment(id))}
                />
                <p>{amount}</p>
                <FontAwesomeIcon icon={faChevronDown}
                 className='count-icon'
                 onClick={()=> dispatch(decrement(id))}
                 />
            </div>
        </li>
    )
}

export default React.memo(Item);

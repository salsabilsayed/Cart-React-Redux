import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAll } from '../../redux/actions';

import './Button.css';

const Button = () => {
    const dispatch = useDispatch()

    return (
       
        <div className='btn-container'>
            <button type='button' 
            className='btn'
            onClick={()=>dispatch(clearAll())}>
                clear cart
            </button>
        </div>
    )
}

export default React.memo(Button);

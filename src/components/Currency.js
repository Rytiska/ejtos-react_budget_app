import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = (props) => {
  const [ currency,setCurrency ] = useState('');
  const { dispatch, } = useContext(AppContext);
  
  const updateCurrency = (event) => {
    dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value,
        });
    setCurrency(event.target.value);
    return;
  }
  return (
    <div>  
    <span>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currency'
        onChange={(event) =>updateCurrency(event)}>Currency =({currency})
          <option value='£ Pound'>£ Pound</option>
          <option value='$ Dollar'>$ Dollar</option>
          <option value='€ Euro'>€ Euro</option>
          <option value='₹ Rupee'>₹ Rupee</option>
      </select>
      </span>
    </div>



  );
};

export default Currency;
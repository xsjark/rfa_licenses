import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  addEmail,
  selectUser
} from './userSlice';
import styles from './User.module.css';

export function User() {
  const current_user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
        {"redux: " + JSON.stringify(current_user)}
        {"state: " + JSON.stringify(email)}
        <input onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={() => dispatch(addEmail(email))} >Submit</button>
      
    </div>
  );
}

import React, { useState, useEffect } from "react";
import CurrencyFormat from 'react-currency-format';
import {useAxiosPost} from '../Hooks/HttpPosts';
import axios from 'axios';

const ChildComponent = (props) => {
    return(
        <h1> {props.message} </h1>
    );
}
export default TransactionHistory;
import React, { useState, useEffect } from "react";
import CurrencyFormat from 'react-currency-format';
import {useAxiosPost} from '../Hooks/HttpPosts';
import axios from 'axios';

export default function Transaction (){
    let data = {custID:22}

    const haha = useAxiosPost('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view', data)
    console.log(haha);
    let bal =  haha.data;
    console.log(bal);
    function handleTransaction (event){
        var number = Number(event.target[1].value.replace(/[^0-9.-]+/g,"")); // to save
        console.log(number);
        if(number < bal){
            let final = bal - number;
            let data= {custID:22, amount: final};
            
        }
    }

        return (
            <div className="transaction-inner">
                    <input type="disabled"  className="form-control"/>
                    <form onSubmit ={e => {e.preventDefault(); handleTransaction(e);}}> 
                    <div className="form-group" >
                        <label>Transfer to</label>
                        <input type="text" className="form-control" placeholder="Mobile Numer / UEN" />
                    </div>
                    <div className="form-group" >
                        <label>Transfer amount</label>
                        <CurrencyFormat className="form-control" thousandSeparator={true} prefix={'$'}  placeholder="$0.00"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Transfer</button>
                </form>
            </div>

        );
}
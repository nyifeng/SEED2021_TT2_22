import React, { useState, useEffect } from "react";
import CurrencyFormat from 'react-currency-format';
import {useAxiosPost} from '../Hooks/HttpPosts';
import axios from 'axios';

export default function Transaction (){
    let data = {custID:22}
    let bal =0;
    const haha = useAxiosPost('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view', data)
    if(haha.loading){

        console.log(haha.data[1]);
        bal = haha.data[1].availableBal;
    }
    function handleTransaction (event){
        var number = Number(event.target[2].value.replace(/[^0-9.-]+/g,"")); // to save
        console.log(number);
        if(number < bal){
            let updated = bal -number;
            let newData = {custID:22, amount:updated};
            console.log(updated);
            const config = {
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin': '*',
                  'x-api-key': 'IrZsuQz9Ns1h2yaHZwhmC2hjGq3xJXpG2KyqIJjG'
                }
              }
            //let response = useAxiosPost('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update', newData);
            axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update', newData, config)
            .then(res =>{
                console.log(res);
                window.location.reload(false);
                /*history.push('/'); */
            },
            err =>{
                if(err.response){
                    console.log("error-response");
                } else if(err.request){
                    console.log("error-request");

                }else{
                    console.log("error-else");

                }

            })
            /* Add transaction view*/
            let transactionUpdate = {
                eGift: false,
                dateTime: newDate(),
                custID: 22,
                expensesCat: "MISC",
                amount: number,
                message: "Thanks. :)",
                payeeID: 1
            }
        }
    }

        return (
            <div className="transaction-inner">
                    
                    <form onSubmit ={e => {e.preventDefault(); handleTransaction(e);}}> 
                    <div className="form-group" >
                        <label>Avaliable Balance</label>
                        <CurrencyFormat thousandSeparator={true} prefix={'$'} disabled className="form-control" value={bal}/>
                    </div>
                    
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
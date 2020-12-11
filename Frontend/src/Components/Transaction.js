import React, { useState } from "react";
import CurrencyFormat from 'react-currency-format';

export default function Transaction (){
    const [userData, setuUerData] = useState();


    function handleTransaction (event){
        
        var number = Number(event.target[1].value.replace(/[^0-9.-]+/g,"")); // to save
        console.log(number);
    }

        return (
            <div className="transaction-inner">
                                <form onSubmit ={e => {e.preventDefault(); handleTransaction(e);}}> 
                    <div className="form-group" >
                        <label>Transfer to</label>
                        <input type="text" className="form-control" placeholder="Mobile Numer / UEN" />
                    </div>
                    <div className="form-group" >
                        <label>Transfer amount</label>
                        <CurrencyFormat className="form-control" thousandSeparator={true} prefix={'$'} decimalScale="2" placeholder="$0.00"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Transfer</button>
                </form>
            </div>

        );
}
import React, { useState, useEffect } from "react";
import CurrencyFormat from 'react-currency-format';
import {useAxiosPost} from '../Hooks/HttpPosts';
import axios from 'axios';

export default function Transaction (){
    let data = {custID:22}
    let bal =0;
    let donutData = [];
    let donutString = [];
    const haha = useAxiosPost('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view', data)
    if(haha.loading){

        console.log(haha.data[1]);
        bal = haha.data[1].availableBal;
        donutData = [haha.data[0].availableBal, haha.data[1].availableBal, haha.data[2].availableBal];
        donutString =[haha.data[0].accountName,haha.data[1].accountName,haha.data[2].accountName];
    }
    const donutChart = {
        labels: donutString, 
            datasets: [
                {
                  label: 'Balance',
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: donutData
                }
              ]
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
                dateTime: '',
                custID: 22,
                expensesCat: "MISC",
                amount: number,
                message: "Thanks. :)",
                payeeID: 1
            }
        }
    }

        return (
            <div >
                    <div className="form-group" >
                    <label>{donutString[0]}     :</label>
                        <CurrencyFormat disabled thousandSeparator={true} prefix={'$'}  value={donutData[0]} />
                    </div>
                    <div className="form-group" >
                        <label>{donutString[1]}   :</label>
                        <CurrencyFormat disabled thousandSeparator={true} prefix={'$'}   value={donutData[1]}/>
                    </div>
                    <div className="form-group" >
                        <label>{donutString[2]}   :</label>
                        <CurrencyFormat disabled thousandSeparator={true} prefix={'$'}  value={donutData[2]} />
                    </div>
                    <br/>
                    <form onSubmit ={e => {e.preventDefault(); handleTransaction(e);}}> 
                    <div className="form-group" >
                        <label>Available Balance to Transfer: </label>
                        <CurrencyFormat thousandSeparator={true} prefix={'$'} disabled className="form-control" value={bal}/>
                    </div>
                    
                    <div className="form-group" >
                        <label>Transfer to :</label>
                        <input type="text" className="form-control" placeholder="Mobile Numer / UEN" />
                    </div>
                    <div className="form-group" >
                        <label>Transfer amount :</label>
                        <CurrencyFormat className="form-control" thousandSeparator={true} prefix={'$'}  placeholder="$0.00"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Transfer</button>
                </form>
            </div>

        );
}

/* 
                    <Bar
                        data={donutChart}
                        options={{
                            title:{
                              display:true,
                              text:'Available Balance',
                              fontSize:20
                            },
                            legend:{
                              display:true,
                              position:'right'
                            }
                          }}
                    />
*/
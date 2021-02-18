import React from 'react';

function Child(){
    return(
        <div  className='container'>
            <h1 className='text-centre'>Expense Tracker</h1>
            <h3>Your Balance<br/> 99$</h3>

            <div className='expense-container'>
                <h3>Income<br/> 99$</h3>
                <h3>Expense<br/> 99$</h3>
            </div>
            <h3 className='text-centre'>History</h3>
            <ul className='transaction-list'>
                <li>
                    <span>Cash</span>
                    <span>+90</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+90</span>
                </li>
                <li>
                    <span>Cash</span>
                    <span>+90</span>
                </li>
            </ul>
            <hr/>
            <h3 className='text-centre'>Add new transaction</h3>
            <hr/>

            <form className='transaction-form'>
                <label>
                    Enter Description<br/>
                    <input type='text' required/>
                </label>
                <br/>
                <label>
                    Enter Amount<br/>
                    <input type='number' required/>
                </label>
                <br/>
                <input type='submit' value='Add Transaction'/>
            </form>
        </div>
    )
}

export default Child;
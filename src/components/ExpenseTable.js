import React, { useState } from "react";
import { Link } from 'react-router-dom'



function ExpenseTable(props) {
    const {id, category, dateAdded, cost, handleDeleteExpense} = props
    
    // <h2> {category} </h2>

    return(
        <tr class="">
            <td class="single line"><h4 class="ui center aligned header">{category}</h4></td>
            <td class="single line">
                    {cost}
            </td>
            <td class="">
                <div class="ui star rating" role="radiogroup" tabIndex="-1">
                    {dateAdded}
                </div>
            </td>
            <td>
                <button onClick={(e) => handleDeleteExpense(id)}>Delete Expense</button>
            </td>
						
		</tr>
    )
}
export default ExpenseTable;
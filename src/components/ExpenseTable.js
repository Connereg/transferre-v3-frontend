import React, { useState } from "react";
import { Link } from 'react-router-dom'



function ExpenseTable(props) {
    const {id, category, dateAdded, cost} = props
    

    return(
        <tr class="">
            <td class="single line"><h4 class="ui center aligned header">{}</h4></td>
            <td class="single line">
                    <h2> {category} </h2>
            </td>
            <td class="">
                <div class="ui star rating" role="radiogroup" tabIndex="-1">
                    {dateAdded}
                </div>
            </td>
            <td>{cost}<br/>
            </td>
            <td>
                <button>Delete Button</button>
            </td>
						
		</tr>
    )
}
export default ExpenseTable;
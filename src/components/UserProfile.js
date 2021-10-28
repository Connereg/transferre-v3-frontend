import ExpenseTable from "./ExpenseTable";
import React, {useState} from 'react'

function UserProfile(props) {
	const [search, setSearch] = useState("")
	const {loggedInStatus, userExpensesAll , userTransactionsAll} = props

	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))

    function handleDeleteExpense(id) {
        fetch(`http://localhost:3000/user_expenses/${id}`, {
            method: "DELETE",
        });
    }

		const expenseListing = userExpensesAll.map((expense) => (
			<ExpenseTable
				key={expense.id}
				id={expense.id} 	
				category={expense.category}
				dateAdded={expense.created_at}
				cost={expense.cost}
                handleDeleteExpense={handleDeleteExpense}
				/>
		))

    

	return (
		<div>
			<br/>
			{/* <div width="fit-content" class="ui icon input">
				<input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Expenses"/>
				<i aria-hidden="true" class="search circular inverted link icon"></i>
			</div> */}
			<br/>
			<table class="ui celled padded table">
				<thead background="red">
					<tr>
						<th>Expense Category</th>
						<th>Date Added</th>
						<th>Cost</th>
						<th>Remove Expense</th>
					</tr>
				</thead>
				<tbody>
					{expenseListing}
				</tbody>
			</table>
		</div>
	)
}

export default UserProfile;
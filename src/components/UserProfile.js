import ExpenseTable from "./ExpenseTable";
import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react'

function UserProfile(props) {
	const [search, setSearch] = useState("")
	const {loggedInStatus, userExpensesAll , userTransactionsAll, user} = props

    const [newBalance, setNewBalance] = useState(user.balance)
    const [desiredSavings, setNewDesiredSavings] = useState(user.remainder)
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))

    function handleDeleteExpense(id) {
        fetch(`http://localhost:3000/user_expenses/${id}`, {
            method: "DELETE",
        });
    }

		// const expenseListing = userExpensesAll.map((expense) => (
		// 	<ExpenseTable
		// 		key={expense.id}
		// 		id={expense.id} 	
		// 		category={expense.category}
		// 		dateAdded={expense.created_at}
		// 		cost={expense.cost}
        //         handleDeleteExpense={handleDeleteExpense}
		// 		/>
		// ))

    function saveChangesToBalance() {
        fetch()

    }

    

	return (
		<div>
			<br/>
			{/* <div width="fit-content" class="ui icon input">
				<input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Expenses"/>
				<i aria-hidden="true" class="search circular inverted link icon"></i>
			</div> */}
			<br/>
            <h2>User Balance: ${user.balance}</h2>
            <h2>User Desired Savings: ${user.remainder}</h2>
            <Form>
                <Form.Field>
                    <label>Set New Balance</label>
                    <input onChange={(e) => setNewBalance(e.target.value)} placeholder='New Balance Total here' />
                    <button type="submit">Submit New Balance</button>
                </Form.Field>
            </Form>
            <br/>
            <Form>
                <Form.Field>
                <label>Set New Desired Savings</label>
                <input onChange={(e) => setNewDesiredSavings(e.target.value)} placeholder='New Desired Savings Total here' />
                <button type="submit">Submit New Desired Savings</button>
                </Form.Field>
            </Form>
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
					{/* {expenseListing} */}
				</tbody>
			</table>
            <br/>
            <table class="ui celled padded table">
				<thead background="red">
					<tr>
						<th>Transaction Category</th>
						<th>Date Added</th>
						<th>Cost</th>
						<th>Transaction With:</th>
					</tr>
				</thead>
				<tbody>
					{/* {expenseListing} */}
				</tbody>
			</table>
            <br/>
            <Button onClick={(e) => saveChangesToBalance()}>
                Save Changes to Budget
            </Button>

		</div>
	)
}

export default UserProfile;
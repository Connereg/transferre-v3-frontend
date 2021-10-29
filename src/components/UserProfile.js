import ExpenseTable from "./ExpenseTable";
import TransactionTable from "./TransactionTable";
import React, {useEffect, useState} from 'react'
import { Form, Button } from 'semantic-ui-react'

function UserProfile(props) {
	const [search, setSearch] = useState("")
	const {user, renderToggle, setRenderToggle} = props;
    
    const [userExpenses, setUserExpenses] = useState([]);
    const [userTransactions, setUserTransactions] = useState([]);

    const [newBalance, setNewBalance] = useState(0)
    const [desiredSavings, setNewDesiredSavings] = useState(user.remainder)

    const [userBalanceInput, setUserBalanceInput] = useState(0)
    const [userSavingsInput, setUserSavingsInput] = useState(0)
	// const results = (allNotes.filter ((note) => search === "" ||
	// note.title.toLowerCase().includes(search.toLowerCase()) || 
	// note.user.name.toLowerCase().includes(search.toLowerCase())
	// ))

    function fetchUserBalanceAndRemainder() {
        fetch(`http://localhost:3000/me`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then((data) => {
            setNewBalance(data.balance)
            setNewDesiredSavings(data.remainder)
        })
    }


    function fetchExpenses() {
        fetch(`http://localhost:3000/user_expenses/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then(setUserExpenses)
    }

    function fetchTransactions() {
        fetch(`http://localhost:3000/transferrable_transactions/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
        })
        .then((r) => r.json())
        .then(setUserTransactions)
    }

    useEffect(() => {
        fetchUserBalanceAndRemainder();
        fetchExpenses();
        fetchTransactions();
    }, [renderToggle]);

    function handleDeleteExpense(id) {
        fetch(`http://localhost:3000/user_expenses/${id}`, {
            method: "DELETE",
            credentials: 'include'
        });
        setRenderToggle(!renderToggle)
    }

    function handleDeleteTransaction(id) {
        fetch(`http://localhost:3000/transferrable_transactions/${id}`, {
            method: "DELETE",
            credentials: 'include'
        });
        setRenderToggle(!renderToggle)
    }

    function handleUpdateUserBalance(){
        fetch(`http://localhost:3000/balance`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
            body: JSON.stringify({
                "balance": userBalanceInput
            })
        });
       setRenderToggle(!renderToggle)
    }

    function handleUpdateUserSavings(){
        fetch(`http://localhost:3000/remainder`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
            body: JSON.stringify({
                "remainder": userSavingsInput
            })
        });
       setRenderToggle(!renderToggle)
    }

    let expenseTable = userExpenses.map((expense) => (
        <ExpenseTable
            key={expense.id}
            id={expense.id}
            category={expense.category}
            dateAdded={expense.created_at}
            cost={expense.cost}
            handleDeleteExpense={handleDeleteExpense}
        />
    ))

    // const transactionTable = userTransactions.map((transaction) => (
    //     <ExpenseTable
    //         key={transaction.id}
    //         id={transaction.id}
    //         category={transaction.category}
    //         dateAdded={transaction.created_at}
    //         cost={transaction.cost}
    //         transactee={transaction.transactee}

    //         handleDeleteExpense={handleDeleteExpense}
    //     />
    // ))

	return (
		<div>
			<br/>
			{/* <div width="fit-content" class="ui icon input">
				<input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Expenses"/>
				<i aria-hidden="true" class="search circular inverted link icon"></i>
			</div> */}
			<br/>
            <h2>User Balance: ${newBalance}</h2>
            <h2>User Desired Savings: ${desiredSavings}</h2>
            <Form>
                <Form.Field>
                    <label>Set New Balance</label>
                    <input onChange={(e) => setUserBalanceInput(e.target.value)} placeholder='New Balance Total here' />
                    <button onClick={handleUpdateUserBalance} type="submit">Submit New Balance</button>
                </Form.Field>
            </Form>
            <br/>
            <Form>
                <Form.Field>
                <label>Set New Desired Savings</label>
                <input onChange={(e) => setUserSavingsInput(e.target.value)} placeholder='New Desired Savings Total here' />
                <button onClick={handleUpdateUserSavings} type="submit">Submit New Desired Savings</button>
                </Form.Field>
            </Form>
			<table class="ui celled padded table">
				<thead background="red">
					<tr>
						<th>Expense Category</th>
						<th>Cost</th>
						<th>Date Added</th>
                        <th>Delete Expense</th>
					</tr>
				</thead>
				<tbody>
					{expenseTable}
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
					{/* {} */}
				</tbody>
			</table>
            <br/>
            <Button >
                Save Changes to Budget
            </Button>

		</div>
	)
}

export default UserProfile;
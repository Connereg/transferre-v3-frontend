import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'



function NewTransaction({ user, setRenderToggle, renderToggle }) {
    const [isTransaction, setIsTransaction] = useState(false);

    const [expenseCost, setExpenseCost] = useState(0.0)
    const [expenseCategory, setExpenseCategory] = useState("")

    const toggleIsTransaction = () => setIsTransaction(!isTransaction);

    let history = useHistory();


    function postNewExpense() {
        fetch(`http://localhost:3000/user_expenses/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include', // INCLUDE THIS IN EVERY REQUEST THAT NEEDS AUTH
            body: JSON.stringify({ 
                cost: expenseCost,
                category: expenseCategory
            })
        })
        history.push(`/user_profile`)
        setRenderToggle(!renderToggle)
    }

   
    // function postNewExpense() {
    //     fetch(`http://127.0.0.1:3000/user_expenses/`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({ 
    //             cost: expenseCost,
    //             category: expenseCategory
    //         })


    //     }
    //     )}


    return (
      <div class="new expense form">
        <Container>
            <br/>
            <h2>Create a new {isTransaction ? "Transaction" : "Expense"} as {localStorage.getItem("username")}</h2>
            <Form>
            <Form.Field>
                <Button onClick={toggleIsTransaction}>
                    {isTransaction ? 'Expense' : 'Transaction'}
                </Button>
            </Form.Field>
            {isTransaction ? (
                <Form.Field>
                    <label>Transactee</label>
                    <input placeholder='Username of transactee here' />
                </Form.Field>
            ): null}
            {isTransaction ? (
                <Form.Field>
                    <label>Sending or Charging?</label>
                    <input placeholder='Input "sending" if you wish to send money, or "charge" if you are requesting money' />
                </Form.Field>
            ): null}
            <Form.Field>
                <label>Expense Category</label>
                <input onChange={(e) => setExpenseCategory(e.target.value)} placeholder='Category of expense here' />
            </Form.Field>
            <Form.Field>
                <label>Expense Cost</label>
                <input onChange={(e) => setExpenseCost(e.target.value)} placeholder='Cost amount here' />
            </Form.Field>
            <Button type='submit' onClick={postNewExpense}>Submit</Button>
            </Form>
        </Container>
      </div> 

    )
}

export default NewTransaction;
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import { useState } from 'react';



function NewTransaction({ user }) {
    const [isTransaction, setIsTransaction] = useState(false);



    const toggleIsTransaction = () => setIsTransaction(!isTransaction);


    function postNewExpense() {

    }

   
    function postNewExpense() {
        fetch(`http://127.0.0.1:3000/user_expenses/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ 
                cost: 
            })

        }
        )}


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
            <Form.Field>
                <label>Expense Category</label>
                <input placeholder='Category of expense here' />
            </Form.Field>
            <Form.Field>
                <label>Expense Cost</label>
                <input placeholder='Cost amount here' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
            </Form>
        </Container>
      </div> 

    )
}

export default NewTransaction;
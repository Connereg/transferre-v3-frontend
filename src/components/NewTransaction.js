import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import { useState } from 'react';



function NewTransaction() {

    const [isTransaction, setIsTransaction] = useState(false);

    const toggleIsTransaction = () => setIsTransaction(!isTransaction);
    


    return (
      <div class="new expense form">
        <Container>
            <br/>
            <h2>Create a new {isTransaction ? "Transaction" : "Expense"} as {localStorage.getItem("username")}</h2>
            <Form>
            <Form.Field>
                <Button onClick={toggleIsTransaction}>
                    {isTransaction ? 'Transaction' : 'Expense'}
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
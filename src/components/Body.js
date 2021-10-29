import React from "react";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import UserProfile from "./UserProfile";
import NewTransaction from "./NewTransaction";


function Body(props) {
    const { loggedInStatus, user } = props;
    // const [userExpensesAll, setUserExpensesAll] = useState([]);
    const [userTransactionsAll, setUserTransactionsAll] = useState([]);
    const [renderToggle, setRenderToggle] = useState(true)

    // function fetchingExpenses() {
    //     fetch(`http://localhost:3000/user_expenses/`)
    //     .then((r) => r.json())
    //     .then((expensedata) => setUserExpensesAll(expensedata))
    // }

    function fetchingTransactions() {
        fetch(`http://localhost:3000/user_transactions/`)
        .then((r) => r.json())
        .then((transactiondata) => setUserTransactionsAll(transactiondata))
    }

    useEffect(() => {
        console.log("Populating data...");
        // fetchingExpenses()
        // fetchingTransactions()
        // console.log(userExpensesAll)
    }, [])




	return (
		<div className="body-div">
            <Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/user_profile">
					<UserProfile
                        // userExpensesAll={userExpensesAll}
                        userTransactionsAll={userTransactionsAll}
                        user={user}
                        renderToggle={renderToggle}
                        setRenderToggle={setRenderToggle}
					
					/>
				</Route>
				<Route exact path="/new_transaction">
                    <NewTransaction
                    user={user}
                    renderToggle={renderToggle}
                    setRenderToggle={setRenderToggle}

                    />
				</Route>
			</Switch>
			
		</div>
	);
}

export default Body;
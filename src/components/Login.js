import React, { useState } from "react";
import { Button, Form, Image, Modal } from "semantic-ui-react";
import { useHistory } from 'react-router-dom'

function Login(props) {
	const { retrieveLoggedInStatus, loggedInStatus, setUser } = props;

    let history = useHistory();

	const [open, setOpen] = React.useState(false);
	const [usernameInput, setUserNameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const userName = localStorage.getItem("username");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorsAll, setErrorsAll] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

	function handleLogInAttempt(e) {
        e.preventDefault();
		fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ usernameInput, passwordInput }),
        }).then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json().then((user) => setUser(user, true));
                }
                else {
                    r.json().then((err) => setErrorsAll(err.errors))
                    console.log(errorsAll)
                }
            });
        }        
        
    
    
    
    
        // 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			const correctLogin = data.find((user) => {
	// 				if (
	// 					user.name === usernameInput &&
	// 					user.password === passwordInput
	// 				) {
	// 					return user;
	// 				}
	// 			});
	// 			console.log("return", correctLogin);

	// 			if (correctLogin) {
	// 				localStorage.setItem("username", correctLogin.name);
	// 				localStorage.setItem("user_id", correctLogin.id);
	// 				localStorage.setItem("isLoggedIn", true);
	// 				retrieveLoggedInStatus(true);
	// 				setIsLoggedIn(true);
	// 			}
	// 		});
	// }

    function handleLogInTemp() {
        localStorage.setItem("username", usernameInput);
        localStorage.setItem("user_id", 1);
        localStorage.setItem("isLoggedIn", true);
        retrieveLoggedInStatus(true);
        setIsLoggedIn(true);

    }

    	// function handlePost() {
	// 	fetch("http://localhost:9292/users", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(newUser),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then(console.log("Added this fuckin user"));
	// 	renderPage();
	// }


	function handleLogOut() {
		localStorage.removeItem("username");
		localStorage.removeItem("user_id");
		localStorage.removeItem("isLoggedIn");
		retrieveLoggedInStatus(false);
		setIsLoggedIn(false);
        history.push(`/`)
	}
	const newUser = {
		name: usernameInput,
		password: passwordInput,
	};


	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button> {isLoggedIn ? "Log Out" : "Log In"} </Button>}
		>
			<Modal.Header>Log In to Transferre:</Modal.Header>
			<Modal.Content image>
				<Image
					size="medium"
					src="https://media.istockphoto.com/vectors/fast-coin-logo-designs-concept-vector-fast-cash-logo-template-money-vector-id1256931591?k=20&m=1256931591&s=170667a&w=0&h=9s5tonwJc4GNgRote0eR4hhlm4giHfUAFCrjwC_OV5Q="
					wrapped
				/>
				<Modal.Description>
					{!isLoggedIn ? (
						<Form >
							<Form.Field>
								<label>User Name</label>
								<input
									onChange={(e) =>
										setUserNameInput(e.target.value)
									}
									placeholder="User Name"
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									onChange={(e) =>
										setPasswordInput(e.target.value)
									}
									placeholder="Password"
								/>
							</Form.Field>
							<Button onClick={handleLogInAttempt} >Log In</Button>
							<Button type="submit">
								Sign Up
							</Button>
						</Form>
					) : null}
					<h4>
						{isLoggedIn
							? `You are now logged in as: ${userName}`
							: "You are not logged in!"}
					</h4>
					{isLoggedIn ? (
						<Button onClick={handleLogOut}> Log Out </Button>
					) : null}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button
					content="Close"
					labelPosition="right"
					onClick={() => setOpen(false)}
					positive
				/>
			</Modal.Actions>
		</Modal>

);
}

export default Login;
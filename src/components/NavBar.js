import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "./Login";

function NavBar({ retrieveLoggedInStatus, setLoggedInStatus, loggedInStatus, setUser }) {
	

	return (
		<div>
			<Menu>
				<Link to="/">
					<Menu.Item
						name="home"
						// active={activeItem === "home"}
						// onClick={handleItemClick}
					>
						Homepage
					</Menu.Item>
				</Link>
            {loggedInStatus ? (
				<Link to="/user_profile">
					<Menu.Item
						name="user_profile"
						// active={activeItem === "notes"}
						// onClick={handleItemClick}
					>
						User Profile
					</Menu.Item>
				</Link>
                ) : null}

				{loggedInStatus ? (
					<Link to="/new_transaction">
						<Menu.Item
							name="new_transaction"
							// active={activeItem === "new_note"}
							// onClick={handleItemClick}
						>
							New Transaction
						</Menu.Item>
					</Link>
				) : null}
				<Menu.Item style={{ float: "right" }}>
					<Login
						retrieveLoggedInStatus={retrieveLoggedInStatus}
						loggedInStatus={loggedInStatus}
                        setLoggedInStatus={setLoggedInStatus}
                        setUser={setUser}
					/>
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default NavBar;
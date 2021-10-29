import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

function Header() {
	return (
		<div>
			<Link to="/">
				{/* <img
					className="application-logo"
					src={
						"https://images-ext-2.discordapp.net/external/qZ_hvFg9jVtTxPaOITD2saf2EuXrnxCN_wx_Fnfgb70/https/upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"
					}
					alt={"flatiron-logo"}
				></img> */}
				<Image
					src={
						"https://media.istockphoto.com/vectors/fast-coin-logo-designs-concept-vector-fast-cash-logo-template-money-vector-id1256931591?k=20&m=1256931591&s=170667a&w=0&h=9s5tonwJc4GNgRote0eR4hhlm4giHfUAFCrjwC_OV5Q="
					}
					size="small"
				/>
			</Link>
            <h1 className="application-titler"> Transferre Budgeting</h1>
		</div>
	);
}

export default Header;
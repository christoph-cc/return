import "./Header.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import InStockLogo from "../../assets/images/InStock-Logo.svg";

export default function Header() {
	const { pathname } = useLocation();
	const navigation = [
		{
			name: "Warehouses",
			href: "/",
			is_active: pathname.includes("/warehouses") || pathname === "/" ? true : false,
		},
		{
			name: "Inventory",
			href: "/inventory",
			is_active: pathname.includes("/inventory")  ? true : false,
		},
	];

	return (
		<header className="header">
		</header>
	);
}

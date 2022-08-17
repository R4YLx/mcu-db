import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar bg-[#ED1D24]">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<NavLink to="/">Homepage</NavLink>
						</li>
						<li>
							<NavLink to="/movies/">Movies</NavLink>
						</li>
						<li>
							<NavLink to="/tvshows/">TV Shows</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<img src="/logo.png" alt="logo" className="w-24" />
			</div>
			<div className="navbar-end">
				<button
					className="btn btn-ghost btn-circle"
					onClick={() => alert("Not working yet. But soon! Maybe...")}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="white"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Navbar;

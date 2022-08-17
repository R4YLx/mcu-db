const HomePage = () => {
	return (
		<div className="hero min-h-screen">
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Welcome</h1>
					<p className="mb-5">
						This is a database with MCU related movies and TV shows. Soure code
						can be found on my GitHub page:
					</p>
					<p>
						<a
							className="link link-accent link-hover"
							href="https://github.com/R4YLx/mcu-db"
							target="blank"
						>
							https://github.com/R4YLx/mcu-db
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

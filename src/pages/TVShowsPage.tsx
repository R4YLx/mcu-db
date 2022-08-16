const TVShowsPage = () => {
	return (
		<main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{/* {isSuccess &&
				data?.data.map((tvshow: any) => (
					<div key={tvshow.id}>
						<div className="card m-8 min-h-max">
							<figure>
								<img src={tvshow.cover_url} alt="poster" className="w-full" />
							</figure>
							<div className="card-body bg-base-100 shadow-xl">
								<h2 className="card-title">{tvshow.title}</h2>
								<p className="truncate italic">Synopsis: {tvshow.overview}</p>
								<Link to={`/tvshows/${tvshow.id}`}>
									<div className="card-actions justify-end">
										<button className="btn bg-[#ED1D24] btn-outline text-white mt-4">
											Read more
										</button>
									</div>
								</Link>
							</div>
						</div>
					</div>
				))} */}
		</main>
	);
};

export default TVShowsPage;

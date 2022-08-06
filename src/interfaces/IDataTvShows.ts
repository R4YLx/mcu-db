export interface ITvShows {
	cover_url: string;
	directed_by: string;
	id: number;
	imdb_id: string;
	last_aired_date: string;
	number_episodes: number;
	number_seasons: number;
	overview: string;
	phase: number;
	release_date: string;
	saga: string;
	title: string;
	trailer_url?: string;
}

export interface IDataTvShows {
	data: ITvShows[];
	total: number;
}

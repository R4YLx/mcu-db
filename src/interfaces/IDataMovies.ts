export interface IMovie {
	box_office: string;
	chronology: number;
	cover_url: string;
	directed_by: string;
	duration: number;
	id: number;
	imdb_id: string;
	overview: string;
	phase: number;
	post_credit_scenes: number;
	related_movies: IMovie[];
	release_date: string;
	saga: string;
	title: string;
	trailer_url: string;
}

export interface IDataMovies {
	data: IMovie[];
	total: number;
}

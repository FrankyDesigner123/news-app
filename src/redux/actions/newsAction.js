export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const fetchArticles = () => {
	return async (dispatch) => {
		// add logic to fetch data
		const result = await fetch(
			'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=40dd709612784220b441caa95e930651'
		);

		const resultData = await result.json();

		dispatch({
			type: FETCH_ARTICLES,
			payload: resultData,
		});
	};
};

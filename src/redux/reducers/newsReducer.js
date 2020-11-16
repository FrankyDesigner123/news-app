import { FETCH_ARTICLES, TOGGLE_FAVORITES } from '../actions/newsAction';

const initialState = {
	articles: [],
	favorites: [],
};
export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_ARTICLES:
			return {
				...state,
				articles: action.payload,
			};
		case TOGGLE_FAVORITES:
			// Add or remove item from favorite

			// for each article in favorite
			const index = state.favorites.findIndex(
				(article) => article.url === action.payload // this payload is the url of the item we want to add to favorite (from newsAction)
			);

			if (index >= 0) {
				// item exists in favorites
				// if the item already exists in favorite, we need to remove it
				const favorites = [...state.favorites];
				favorites.splice(index, 1);

				return {
					...state,
					favorites: favorites,
				};
			} else {
				// item does not exists in favorites, we need to add it
				const article = state.articles.find(
					(article) => article.url === action.payload
				);

				return {
					...state,
					favorites: state.favorites.concat(article),
				};
			}
	}
	return state;
}

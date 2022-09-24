const BASE_URL = process.env.REACT_APP_QUOTE_API_URL;   // Set base URL of API in .env file in project "root" folder
const BASE_QUOTE_URL = BASE_URL + "quotes/";
const BASE_AUTHOR_URL = BASE_URL + "authors/";
const BASE_BOOK_URL = BASE_URL + "books/";
const RANDOM_QUOTE_URL = BASE_URL + "quotes/random/";
const TAGGED_QUOTE_URL = BASE_URL + "quotes/?tags=";
const STARTS_WITH_TAGS_URL = BASE_URL + "tags/?starts_with=";
const TAGS_URL = BASE_URL + "tags/";


export { BASE_AUTHOR_URL, BASE_BOOK_URL, BASE_QUOTE_URL, RANDOM_QUOTE_URL, TAGGED_QUOTE_URL, STARTS_WITH_TAGS_URL, TAGS_URL };

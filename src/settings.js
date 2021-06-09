const BASE_URL = "http://127.0.0.1:8000/api/v1/";
const BASE_QUOTE_URL = BASE_URL + "quotes/";
const BASE_AUTHOR_URL = BASE_URL + "authors/";
const BASE_BOOK_URL = BASE_URL + "books/";
const RANDOM_QUOTE_URL = BASE_URL + "quotes/random/";
const TAGGED_QUOTE_URL = BASE_URL + "quotes/?tags=";
const SIMILAR_TAGS_URL = BASE_URL + "tags/?starts_with=";


export { BASE_AUTHOR_URL, BASE_BOOK_URL, BASE_QUOTE_URL, RANDOM_QUOTE_URL, TAGGED_QUOTE_URL, SIMILAR_TAGS_URL };
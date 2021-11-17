import { rest } from 'msw';
import { setupServer } from 'msw/node';
import searchResults from 'utils/fixtures/searchResults.mock.json';

// import { API_BASE_URL } from 'utils/constants';
// const url = 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search';

const handlers = [
  rest.get('*', (req, res, ctx) => res(ctx.json(searchResults))),
];

export const server = setupServer(...handlers);
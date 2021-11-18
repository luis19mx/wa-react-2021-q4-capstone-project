import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { API_BASE_URL } from 'utils/constants';
import { metadata } from 'utils/fixtures/json';
import getMockedResponse from 'utils/test-utils/getMockedResponse';

const handlers = [
  rest.get(API_BASE_URL, (req, res, ctx) => {
    return res(ctx.json(metadata));
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    return res(ctx.json(getMockedResponse(query)));
  }),
];

export const server = setupServer(...handlers);

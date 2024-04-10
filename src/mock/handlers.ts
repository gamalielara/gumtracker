import { http, HttpRequestParsedResult, HttpResponse } from 'msw';
import { MOCK_HABITS } from './data/habits';

export const handlers = [
  http.get('/gumapp/habits-overview', () =>
    HttpResponse.json({
      status: 200,
      data: MOCK_HABITS,
    }),
  ),

  http.get('/gumapp/habits-list', () => HttpResponse.json({})),
];

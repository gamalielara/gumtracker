import { http, HttpRequestParsedResult, HttpResponse } from 'msw';
import { MOCK_ALL_HABITS, MOCK_HABITS } from './data/habits';
import { API_ENDPOINT } from '../utils/const';

export const handlers = [
  http.get(`${API_ENDPOINT}/habits-overview`, () =>
    HttpResponse.json({
      data: MOCK_ALL_HABITS,
    }),
  ),

  http.get(`${API_ENDPOINT}/habits-list`, () => HttpResponse.json({})),
];

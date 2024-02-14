import { http, HttpResponse } from 'msw';
import { simpleFaker } from '@faker-js/faker';
import { MOCK_USER } from '../data/user';

const sessions = [];

export const sessionHandlers = [
  http.post('/signin/session', async ({ request }) => {
    const user = await request.json();

    if (user.email !== MOCK_USER.email || user.password !== MOCK_USER.password)
      return HttpResponse.json({ status: 403 });

    const newSessionId = simpleFaker.string.uuid();

    sessions[newSessionId] = user;

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': `sessionId=${newSessionId}`
      }
    });
  })
];

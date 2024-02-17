import { http, HttpResponse } from 'msw';
import { simpleFaker } from '@faker-js/faker';
import { MOCK_USER } from '../data/user';
import { HttpStatuses } from '../../const/http-statuses';

const sessions = [];

export const sessionHandlers = [
  http.post('/signin/session', async ({ request }) => {
    const user = await request.json();

    if (user.email !== MOCK_USER.email || user.password !== MOCK_USER.password)
      return HttpResponse.json({ status: HttpStatuses.Forbidden });

    const newSessionId = simpleFaker.string.uuid();

    sessions[newSessionId] = user;

    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': `sessionId=${newSessionId}; path=/; max-age=3600;`
      }
    });
  })
  // http.post('/checkauthstatus/session', async ({request}) => {
  //   request.
  // })
];

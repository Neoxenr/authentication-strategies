import { http, HttpResponse } from 'msw';
import { simpleFaker } from '@faker-js/faker';
import { USER } from '../data/user';

export const sessionHandlers = [
  http.post('/signin/session', async ({ request }) => {
    const { email, password } = await request.json();

    if (email !== USER.email && password !== USER.password)
      return HttpResponse.json({ status: 403 });

    const newSessionId = simpleFaker.string.uuid();

    return HttpResponse.json(newSessionId);
  })
];

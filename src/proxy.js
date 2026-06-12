
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {

  const session = await auth.api.getSession({

    headers: await headers() // headers containing the user's session token
  });
  if (!session && !session?.user) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  console.log(request.url, "from proxy");


}

export const config = {
  matcher: '/allroom/:id',
}
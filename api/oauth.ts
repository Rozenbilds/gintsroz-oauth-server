// api/oauth.ts

export default async function handler(request: any, response: any) {
  return response.json({
    token: "This is a dummy token",
  });
}

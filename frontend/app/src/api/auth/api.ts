import { api } from "../init";
// TODO

export async function verify(token: string) {
  const response = await api({
    url: `http://localhost:3000/auth/verify-email?token=${token}`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")!).id,
      },
    },
  });

  return response;
}

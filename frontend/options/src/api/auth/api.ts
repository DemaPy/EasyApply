import { api } from "../init";
// TODO

export async function verify(token: string) {
  const response = await api({
    url: `/auth/verify-email?token=${token}`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")!).id,
      },
    },
  });

  return response;
}

interface LoginProps {
  email: string;
  password: string;
}

export async function login({ email, password }: LoginProps) {
  return await api({
    url: `/auth/login`,
    options: {
      method: "POST",
      body: JSON.stringify({ email, password }),
    },
  });
}

import { useEffect } from "react";

export const Error = () => {

  useEffect(() => {
    location.href = '/#/resume'
  }, [])
  return <main>Error page</main>;
};

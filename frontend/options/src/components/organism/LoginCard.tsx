import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FlexContainer } from "../molecules";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import { useState } from "react";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useMutation({
    mutationFn: login,
  });

  const handleLogin = () => {
    if (!email || !password) return;
    mutate({ email, password });
  };
  return (
    <Card className="border-none shadow-none p-0">
      <CardContent>
        <FlexContainer column className="gap-4">
          <FlexContainer column className="gap-2">
            <Label htmlFor="label">Email</Label>
            <Input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              id="email"
              type="email"
              placeholder="email"
            />
          </FlexContainer>
          <FlexContainer column className="gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              id="password"
              type="password"
              placeholder="password"
            />
          </FlexContainer>
        </FlexContainer>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>Login</Button>
      </CardFooter>
    </Card>
  );
};

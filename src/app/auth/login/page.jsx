"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import google from "@/assets/images/google.png";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      toast.error("Login failed");
    }

    if (data) {
      toast.success("Login successful!");
      router.push("/");
    }
  };
    const handleGoogleSignIn = async () => {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });
      if (error) {
        toast.error(error.message || "Google sign-in failed");
        
      }
    };
  

    return (
      <div className="px-6">
        <Card className="border border-gray-300 mx-auto max-w-125 py-10 mt-5">
          <h1 className="text-center text-2xl font-bold">Login Your Account</h1>

          <Form
            className="flex max-w-96 mx-auto flex-col gap-4"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="mehedihassan8830@gmail.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button className="bg-[#2e3c8f]" type="submit">
                <Check />
                Login
              </Button>
              <Button type="reset" variant="outline" className="text-[#2e3c8f]">
                Reset
              </Button>
            </div>
          </Form>

          <div className="mt-5 text-center text-xs text-gray-500">
            Do not have an account ?{" "}
            <Link href="/auth/register" className="text-blue-500">
              Register Now
            </Link>
          </div>

          <div className="divider">OR</div>
          <Button
            className="w-full text-black"
            variant="secondary"
            onClick={handleGoogleSignIn}
          >
            <img src={google} alt="Google Logo" width={20} height={20} />
            Sign in with Google
          </Button>
        </Card>
      </div>
    );
  }


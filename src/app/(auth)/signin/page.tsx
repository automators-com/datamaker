/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { signIn } from "next-auth/react";
import SEO from "../../../components/seo/index";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../../../components/auth/logo";
import "../auth.css";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <>
      <SEO title={`Sign In`} />
      <form
        className="flex flex-col"
        method="post"
        action="/api/auth/callback/credentials"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          signIn("credentials", {
            callbackUrl: String(callbackUrl),
            username: email,
            password: pwd,
          })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }}
      >
        <Logo />
        <p
          style={{
            padding: `2em`,
            margin: `0`,
            color: `#482B7C`,
            fontSize: `16px`,
            textAlign: `center`,
          }}
        >
          <strong>Sign in</strong> with your e-mail address
        </p>
        <input
          className="input-primary"
          name="username"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input-primary"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <div style={{ padding: `0 0 2em 0` }}>
          <Link
            href={"/auth/password"}
            className="auth-link"
            style={{ color: `#459CA7` }}
          >
            Forgot your password?
          </Link>
        </div>
        <button className="btn-primary" type="submit">
          {loading ? `Processing...` : `Sign in`}
        </button>
        <Link href={"/signup"} className="auth-link">
          No account yet? Sign up now
        </Link>
        {error ? (
          <div
            style={{
              width: `100%`,
              textAlign: `center`,
              padding: `2em 0 0 0`,
              color: `#482C7B`,
            }}
          >
            Invalid credentials provided. Please try again.
          </div>
        ) : null}
      </form>
    </>
  );
}

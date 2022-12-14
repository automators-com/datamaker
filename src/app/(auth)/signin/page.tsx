/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import { signIn } from "next-auth/react";
import SEO from "../../../components/seo/index";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../../../components/auth/logo";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user) {
    // redirect to templates page if already signed in
    router.push("/templates");
  }

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
        className="auth-form"
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
          className="auth-input"
          name="username"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <div style={{ padding: `0 0 2em 0` }}>
          <Link
            href={"/password"}
            className="auth-link"
            style={{ color: `#459CA7` }}
          >
            Forgot your password?
          </Link>
        </div>
        <button className="auth-button" type="submit">
          {loading && !error ? `Processing...` : `Sign in`}
        </button>
        <Link href={"/signup"} className="auth-link mt-8 border-t pt-4">
          No account yet?{" "}
          <span className="text-[#459CA7] underline">Sign up now</span>
        </Link>
        {error ? (
          <div className="auth-error">
            Invalid credentials provided. Please try again.
          </div>
        ) : null}
      </form>
    </>
  );
}

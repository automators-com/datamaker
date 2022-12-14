"use client";

import SEO from "../../../components/seo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../components/auth/logo";

export default function Password() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const handleReset = () => {
    // Send request to API
    setLoading(true);
    fetch("/api/auth/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          router.push(`/auth/password/reset?email=${email}`);
        } else if (res.status === 404) {
          setError("User not found");
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="main" className="auth-wrapper">
      <SEO title={`Password Reset`} />
      <form
        className="auth-form"
        method="post"
        action="/api/password"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          handleReset();
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
          <strong>Reset</strong> your account password
        </p>
        <input
          className="auth-input"
          name="text "
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="btn-primary" type="submit">
          {loading ? `Processing...` : `Reset`}
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
            User not found
          </div>
        ) : null}
      </form>
    </div>
  );
}

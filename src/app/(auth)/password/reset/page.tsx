"use client";

import SEO from "../../../../components/seo";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "../../../../components/auth/logo";

export default function Password() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    code: "",
    password: "",
    confirm_password: "",
    email: searchParams.get("email"),
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      setLoading(false);
    }
  }, [error]);

  const handleReset = () => {
    // Send request to API
    setLoading(true);

    // validate password
    if (data.password !== data.confirm_password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    fetch("/api/auth/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          router.push("/auth/signin");
        } else if (res.status === 404) {
          setError("Invalid Code");
          setLoading(false);
        } else {
          setError("Invalid Code");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="main" className="auth-wrapper">
      <SEO title={`Password Reset`} />
      <form
        method="put"
        action="/api/auth/password"
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
          className="input-primary"
          name="code"
          type="number"
          placeholder="Verification Code"
          onChange={(e) => setData({ ...data, code: e.target.value })}
          minLength={6}
          maxLength={6}
          required
        />
        <input
          className="input-primary"
          name="new_password"
          type="password"
          placeholder="New Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />
        <input
          className="input-primary"
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            setData({ ...data, confirm_password: e.target.value })
          }
          required
        />
        <button className="btn-primary" type="submit">
          {loading ? `Processing...` : `Reset`}
        </button>
        {error ? (
          <div
            style={{
              width: `100%`,
              textAlign: `center`,
              padding: `2em 0 0 0`,
              color: `#482C7B`,
            }}
          >
            {error}
          </div>
        ) : null}
      </form>
    </div>
  );
}

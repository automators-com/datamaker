"use client";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SEO from "../../../components/seo";
import Logo from "../../../components/auth/logo";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  // get next router
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState<string | null>(null);

  function handleCreateDefaults() {
    setLoading(false);
    // alert user of successful sign up
    alert("Sign up successful!");
    // redirect to login page
    router.push("/signin");
  }

  function handleSubmit() {
    setLoading(true);

    if (!error) {
      if (form.firstName && form.lastName && form.email && form.password) {
        // send post request to the signup api
        signUp(form)
          .then(function (res) {
            return res.json();
          })
          .then(({ message }) => {
            if (message !== "User created") {
              setError(message);
              setLoading(false);
            } else {
              // create default project for user
              handleCreateDefaults();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setError("Please fill out the missing information.");
      }
    }
  }

  useEffect(() => {
    if (form.password !== form.confirm) {
      setError("Please make sure your passwords match.");
      setLoading(false);
    } else {
      setError(null);
    }
  }, [form.password, form.confirm]);

  return (
    <>
      <SEO title={`Sign Up`} />
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: `flex`, alignItems: `flex-start` }}>
          <Link href="/signin" className="auth-link">
            &lt; Cancel
          </Link>
        </div>
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
          <strong>User details</strong> for new account
        </p>
        <input
          className="auth-input"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form.email}
        />
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          value={form.password}
        />
        <input
          className="auth-input"
          name="confirm"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => {
            setForm({ ...form, confirm: e.target.value });
          }}
          value={form.confirm}
        />
        <input
          className="auth-input"
          name="name"
          type="text"
          placeholder="First name"
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
          value={form.firstName}
        />
        <input
          className="auth-input"
          name="lastName"
          type="text"
          placeholder="Last name"
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
          value={form.lastName}
        />
        <button
          className="auth-button"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          {loading && !error ? `Processing...` : `Sign Up`}
        </button>
        <p className="auth-error">{error ? error : ""}</p>
      </form>
    </>
  );
}

type signUpForm = {
  firstName: string;
  lastName: string;
  email: string | string[];
  password: string;
  confirm: string;
};

const signUp = (form: signUpForm) =>
  fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

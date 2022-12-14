"use client";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
// import { getCsrfToken } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SEO from "../../../components/seo";
import Logo from "../../../components/auth/logo";
// import type { CtxOrReq } from "next-auth/client/_utils";
import "../auth.css";

export default function SignUp({ csrfToken }: { csrfToken: string }) {
  const [loading, setLoading] = useState(false);

  // get query parameters
  const searchParams = useSearchParams();
  const invitedOrgId = searchParams.get("orgID");
  const invitedEmail = searchParams.get("email");

  console.log({ invitedEmail, invitedOrgId });

  // get next router
  const router = useRouter();

  const [form, setForm] = useState({
    csrfToken: csrfToken,
    first_name: "",
    last_name: "",
    email: invitedEmail ? invitedEmail : "",
    password: "",
    confirm: "",
    organization: "",
    org_id: invitedOrgId ? invitedOrgId : "",
  });
  const [error, setError] = useState<string | null>(null);

  function handleCreateDefaults() {
    setLoading(false);
    // alert user of successful sign up
    alert("Sign up successful!");
    // redirect to login page
    router.push("/auth/signin");
  }

  function handleSubmit() {
    setLoading(true);

    if (!error) {
      if (form.first_name && form.last_name && form.email && form.password) {
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
          placeholder="E-mail Address"
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
          placeholder="Confirm Password"
          onChange={(e) => {
            setForm({ ...form, confirm: e.target.value });
          }}
          value={form.confirm}
        />
        <input
          className="auth-input"
          name="name"
          type="text"
          placeholder="Given Name"
          onChange={(e) => {
            setForm({ ...form, first_name: e.target.value });
          }}
          value={form.first_name}
        />
        <input
          className="auth-input"
          name="last_name"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setForm({ ...form, last_name: e.target.value });
          }}
          value={form.last_name}
        />
        {!invitedOrgId && (
          <input
            className="auth-input"
            name="organization"
            type="text"
            placeholder="Organization"
            onChange={(e) => {
              setForm({ ...form, organization: e.target.value });
            }}
            value={form.organization}
          />
        )}
        <button
          className="btn-primary"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          {loading ? `Processing...` : `Sign Up`}
        </button>
        <p style={{ textAlign: `center`, fontSize: `16px` }}>
          {error ? error : ""}
        </p>
      </form>
    </>
  );
}

type signUpForm = {
  first_name: string;
  last_name: string;
  email: string | string[];
  password: string;
  confirm: string;
  organization: string;
  org_id: string | string[];
};

const signUp = (form: signUpForm) =>
  fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

// export async function getServerSideProps(context: CtxOrReq | undefined) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }

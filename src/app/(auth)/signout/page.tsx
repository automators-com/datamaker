import { signIn } from "next-auth/react";
import SEO from "../../../components/seo";
import Link from "next/link";

export default function Signout() {
  return (
    <div id="main" className="auth-wrapper">
      <SEO title={`Signed Out`} />
      <div>
        <p style={{ color: `#FFFFFF` }}>You have been signed out.</p>
        <Link
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn("signin", { callbackUrl: "/" }).catch((error) =>
              console.log(error)
            );
          }}
        >
          <button className="btn-primary">Login</button>
        </Link>
      </div>
    </div>
  );
}

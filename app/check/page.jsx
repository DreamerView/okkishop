"use client";
import { useEffect, useState } from "react";

export default function ProtectedPage() {
  const [sessionStatus, setSessionStatus] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const data = await res.json();
          setSessionStatus(data.status);
        } else {
          setSessionStatus("unauthenticated");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setSessionStatus("unauthenticated");
      }
    };

    checkSession();
  }, []);

  if (sessionStatus === null) {
    return <p>Loading...</p>;
  }

  if (sessionStatus === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  console.log(sessionStatus);

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
    </>
  );
}


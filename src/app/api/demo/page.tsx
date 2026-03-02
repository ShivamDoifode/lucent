// at localhost:3000/api/demo

"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import * as Sentry from "@sentry/nextjs";
import { useState } from "react";

export default function DemoPage() {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleBlocking = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setLoading(false);
  };
  const handleBackground = async () => {
    setLoading(true);
    await fetch("/api/demo/background", { method: "POST" });
    setLoading(false);
  };

  // Client side Error
  const handleClientError = () => {
    Sentry.logger.info("User attempting to click on Client Function", {
      userId,
    });
    throw new Error("Client error: Something went wrong in the browser!");
  };

  //API Error
  const handleApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" });
  };

  //Inngest Error
  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-4">
      <Button disabled={loading} onClick={handleBlocking}>
        {loading ? "Loading..." : "Blocking"}
      </Button>
      <Button disabled={loading} onClick={handleBackground}>
        {loading ? "Loading..." : "Background"}
      </Button>

      <Button variant="destructive" onClick={handleClientError}>
        Client Error
      </Button>
      <Button variant="destructive" onClick={handleApiError}>
        API Error
      </Button>
      <Button variant="destructive" onClick={handleInngestError}>
        Inngest Error
      </Button>
    </div>
  );
}

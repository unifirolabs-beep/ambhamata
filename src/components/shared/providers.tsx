"use client";

import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { SmoothScroll } from "@/components/animations/smooth-scroll";
import { LocaleProvider } from "@/context/locale-context";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      // Prevent browser DOM Events from triggering raw [object Event] crashes
      if (
        event.reason instanceof Event ||
        (event.reason && typeof event.reason === "object" && !("message" in event.reason))
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    return () => window.removeEventListener("unhandledrejection", handleRejection);
  }, []);

  return (
    <LocaleProvider>
      <SmoothScroll enabled={false}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#1F1A1B",
              border: "1px solid rgba(166, 25, 50, 0.2)",
              boxShadow: "0 4px 20px 0 rgba(166, 25, 50, 0.15)",
            },
          }}
        />
      </SmoothScroll>
    </LocaleProvider>
  );
}

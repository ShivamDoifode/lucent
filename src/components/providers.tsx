"use client";

import { UnauthenticatedView } from "@/features/auth/components/unauthenticated-view";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ThemeProvider } from "./theme-provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SignedIn>
            {children}
            <div className="fixed top-4 right-4">
              <UserButton />
            </div>
          </SignedIn>

          <SignedOut>{<UnauthenticatedView />}</SignedOut>
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

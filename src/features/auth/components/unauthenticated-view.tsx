import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ShieldAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

export const UnauthenticatedView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-lg bg-muted">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldAlertIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Unauthorized Access</ItemTitle>
            <ItemDescription>
              You are not Authorized Bro. Please Sign In.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <SignInButton>
              <Button size="sm" variant="outline">
                Sign In
              </Button>
            </SignInButton>
          </ItemActions>
        </Item>
      </div>
    </div>
  );
};

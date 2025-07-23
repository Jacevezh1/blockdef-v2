import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-xs">Subscribe to our newsletter</CardTitle>
        <CardDescription className="text-xs">
          Opt-in to receive updates and news about the sidebar.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <SidebarInput type="email" placeholder="Email" />
            <Button
              className="bg-sidebar-primary text-xs text-sidebar-primary-foreground w-full shadow-none"
              size="icon"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export function DashboardPage() {
  return (
    <section className="">
      <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Welcome to the Dashboard</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </section>
  );
}

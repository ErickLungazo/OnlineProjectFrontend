import { File, FilePlus, MoreHorizontal, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useNavigate } from "react-router-dom";
import AssessmentsDropdown from "./AssessmentsDropdown";
import AssessmentForm from "./forms/AsessmentForm";

export function NavAsessments({
  assessments,
}: {
  assessments: {
    name: string;
  }[];
}) {
  const navigate = useNavigate();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Assessments</SidebarGroupLabel>
      <SidebarMenu>
        {assessments.map((item, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton asChild>
              <Link to={`/admin/assessments/${index}`}>
                <File />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
            <AssessmentsDropdown />
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => navigate("/admin/assessments")}
            className="text-sidebar-foreground/70"
          >
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
          <Dialog>
            <DialogTrigger asChild>
              <SidebarMenuButton
                variant={"outline"}
                className="text-sidebar-foreground/70"
              >
                <FilePlus className="text-sidebar-foreground/70" />
                <span>Create</span>
              </SidebarMenuButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create an Assessment</DialogTitle>
                <DialogDescription>Create</DialogDescription>
              </DialogHeader>

              <AssessmentForm />
            </DialogContent>
          </Dialog>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}

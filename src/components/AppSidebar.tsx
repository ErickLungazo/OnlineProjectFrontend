import React, { useEffect, useState } from "react";

import { NavMain } from "@/components/NavMain";
import { NavAsessments } from "@/components/NavAsessments";
import { NavUser } from "@/components/NavUser";
import { TeamSwitcher } from "@/components/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { dummyAssessments } from "@/lib/data";
import useRoleStore from "@/store/roleStore";
import { AdminNav } from "@/lib/navbar";
import { StudentNav } from "@/lib/navbar";
import { LecturerNav } from "@/lib/navbar";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { role } = useRoleStore();
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    if (role === "student") setNavItems(StudentNav);
    if (role === "lecturer") setNavItems(LecturerNav);
    if (role === "admin") setNavItems(AdminNav);
  }, [role]);

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    assessments: dummyAssessments,
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />

        {role === "admin" && <NavAsessments assessments={data.assessments} />}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

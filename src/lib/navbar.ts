import { BookOpen, Frame, List, Map, PieChart, Users } from "lucide-react";

export const AdminNav = [
  {
    title: "Courses",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Create Course",
        url: "/admin/courses/create",
      },
      {
        title: "Manage Courses",
        url: "/admin/courses",
      },
    ],
  },
  {
    title: "Units",
    url: "#",
    icon: List,
    items: [
      {
        title: "Create a Unit",
        url: "/admin/units/create",
      },
      {
        title: "Manage Units",
        url: "/admin/units",
      },
    ],
  },
  {
    title: "Lecturers",
    url: "#",
    icon: Users,
    isActive: true,
    items: [
      {
        title: "Create Lecturer",
        url: "/admin/lecturers/create",
      },
      {
        title: "Manage Lecturer",
        url: "/admin/lecturers",
      },
    ],
  },

  {
    title: "Students",
    url: "#",
    icon: Users,
    items: [
      {
        title: "Add a Student",
        url: "/admin/students/create",
      },
      {
        title: "Manage Students",
        url: "/admin/students",
      },
    ],
  },
];
export const LecturerNav = [
  {
    title: "Unit Content",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "Create Content",
        url: "/lecturer/contents/create",
      },
      {
        title: "Manage Contents",
        url: "/lecturer/contents",
      },
    ],
  },
];
export const StudentNav = [
  {
    title: "Academics",
    url: "#",
    icon: BookOpen,
    items: [
      {
        title: "My Course",
        url: "/student/course",
      },
      {
        title: "Register Units",
        url: "/student/units/register",
      },
      {
        title: "My Units",
        url: "/admin/units",
      },
    ],
  },
];

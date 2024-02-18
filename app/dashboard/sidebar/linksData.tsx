import { BugOutlined, FileAddOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

interface Link {
  title: string;
  icon: ReactNode;
  href: string;
}

export const sidebarLinks: Link[] = [
  {
    title: "Issues",
    icon: <BugOutlined size={10} />,
    href: "/dashboard",
  },
  {
    title: "Add Issue",
    icon: <FileAddOutlined size={10} />,
    href: "/dashboard/addIssue",
  },
];

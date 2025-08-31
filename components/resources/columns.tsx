"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Edit, Trash2, ArrowUpDown } from "lucide-react";
import type { CybersecurityResource } from "@/types/resources";

export const getSeverityColor = (
  severity: string
): "default" | "secondary" | "destructive" | "outline" => {
  switch (severity) {
    case "Critical":
      return "destructive";
    case "High":
      return "destructive";
    case "Medium":
      return "secondary";
    case "Low":
      return "outline";
    case "Info":
      return "outline";
    default:
      return "outline";
  }
};

interface ColumnsProps {
  onEdit: (resource: CybersecurityResource) => void;
  onDelete: (id: string) => void;
}

export const createColumns = ({
  onEdit,
  onDelete,
}: ColumnsProps): ColumnDef<CybersecurityResource>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-xs"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium min-w-[200px] text-xs">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <span className="text-xs font-semibold">Description</span>,
    cell: ({ row }) => (
      <div className="max-w-[300px] min-w-[250px]">
        <p className="text-xs text-muted-foreground line-clamp-2">
          {row.getValue("description")}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-semibold text-xs"
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className="text-xs min-w-[100px] justify-center"
      >
        {row.getValue("type")}
      </Badge>
    ),
  },
  {
    accessorKey: "links",
    header: () => <span className="text-xs font-semibold">Links</span>,
    cell: ({ row }) => {
      const links = row.getValue("links") as string[];
      return (
        <div className="flex flex-col gap-1 min-w-[120px]">
          {links.slice(0, 2).map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="h-3 w-3" />
              Link {index + 1}
            </a>
          ))}
          {links.length > 2 && (
            <span className="text-xs text-muted-foreground">
              +{links.length - 2} more
            </span>
          )}
        </div>
      );
    },
  },
];

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import {
  ArrowRightFromLine,
  CornerDownLeftIcon,
  SquareDashedIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMac } from "@/hooks/use-is-mac";
import { useMutationObserver } from "@/hooks/use-mutation-observer";
import { copyToClipboard } from "@/components/copy-button";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/dashboard", label: "Home" },
  { href: "/dashboard/blog", label: "Blog" },
  { href: "/dashboard/vulnerabilities", label: "Vulnerabilities" },
  { href: "/dashboard/tools", label: "Research Tools" },
  { href: "/dashboard/events", label: "Events" },
];

const pageTree = {
  children: [
    {
      $id: "dashboard",
      name: "Dashboard",
      type: "folder",
      children: [
        {
          type: "page",
          url: "/dashboard",
          name: "Overview",
        },
        /*         {
          type: "page",
          url: "/dashboard/alerts",
          name: "Recent Alerts",
        }, */
        // Bookmarks was commented out in original data, so omitted here
      ],
    },
    {
      $id: "events",
      name: "Events",
      type: "folder",
      children: [
        {
          type: "page",
          url: "/dashboard/events",
          name: "Events",
        },
        /*         {
          type: "page",
          url: "/dashboard/alerts",
          name: "Recent Alerts",
        }, */
        // Bookmarks was commented out in original data, so omitted here
      ],
    },
    {
      $id: "blog",
      name: "Blogs",
      type: "folder",
      children: [
        {
          type: "page",
          url: "/dashboard/blog",
          name: "Latest Blogs",
        },
        /*         {
          type: "page",
          url: "/dashboard/news?category=security",
          name: "Security Alerts",
        },
        {
          type: "page",
          url: "/dashboard/news?category=research",
          name: "Research Updates",
        },
        {
          type: "page",
          url: "/dashboard/news?category=tools",
          name: "Tool Releases",
        }, */
      ],
    },
    {
      $id: "vulnerabilities",
      name: "Vulnerabilities",
      type: "folder",
      children: [
        /*         {
          type: "page",
          url: "/dashboard/vulnerabilities/cves",
          name: "Critical CVEs",
        }, */
        {
          type: "page",
          url: "/dashboard/vulnerabilities/smart-contracts",
          name: "Smart Contract Bugs",
        },
        {
          type: "page",
          url: "/dashboard/vulnerabilities/exploits",
          name: "Protocol Exploits",
        },
      ],
    },
    {
      $id: "tools",
      name: "Tools",
      type: "folder",
      children: [
        {
          type: "page",
          url: "/dashboard/tools",
          name: "Tooling",
        },
        /*  {
          type: "page",
          url: "/dashboard/tools/network-scanner",
          name: "Network Scanner",
        },
        {
          type: "page",
          url: "/dashboard/tools/transaction-tracer",
          name: "Transaction Tracer",
        }, */
      ],
    },
  ],
};

const blocks = [
  {
    name: "hero",
    description: "Dashboard Overview Hero Section",
    categories: ["dashboard", "overview"],
  },
  {
    name: "alerts",
    description: "Recent Alerts Section",
    categories: ["dashboard", "alerts"],
  },
  {
    name: "news-latest",
    description: "Latest News Feed Section",
    categories: ["news", "feed"],
  },
  {
    name: "security-alerts",
    description: "Security Alerts Section",
    categories: ["news", "security"],
  },
  {
    name: "research-updates",
    description: "Research Updates Section",
    categories: ["news", "research"],
  },
  {
    name: "tool-releases",
    description: "Tool Releases Section",
    categories: ["news", "tools"],
  },
  {
    name: "vulnerabilities-cves",
    description: "Critical CVEs Section",
    categories: ["vulnerabilities", "cves"],
  },
  {
    name: "vulnerabilities-smart-contracts",
    description: "Smart Contract Bugs Section",
    categories: ["vulnerabilities", "smart-contracts"],
  },
  {
    name: "vulnerabilities-exploits",
    description: "Protocol Exploits Section",
    categories: ["vulnerabilities", "exploits"],
  },
  {
    name: "tool-code-analysis",
    description: "Code Analysis Tool Section",
    categories: ["tools", "code-analysis"],
  },
  {
    name: "tool-network-scanner",
    description: "Network Scanner Tool Section",
    categories: ["tools", "network-scanner"],
  },
  {
    name: "tool-transaction-tracer",
    description: "Transaction Tracer Tool Section",
    categories: ["tools", "transaction-tracer"],
  },
  {
    name: "footer",
    description: "Footer Section",
    categories: ["common"],
  },
];

export function CommandMenu(props: DialogProps) {
  const router = useRouter();
  const isMac = useIsMac();
  const [open, setOpen] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<
    "page" | "component" | "block" | null
  >(null);
  const [copyPayload, setCopyPayload] = React.useState("");

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        runCommand(() => {
          if (
            selectedType === "block" ||
            selectedType === "component" ||
            selectedType === "page"
          ) {
            copyToClipboard(copyPayload);
          }
        });
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [copyPayload, runCommand, selectedType]);

  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "bg-sidebar text-surface-foreground/60 dark:bg-secondary relative h-8 w-full justify-start pl-2.5 font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
          )}
          onClick={() => setOpen(true)}
        >
          <span className="hidden lg:inline-flex text-sm font-normal text-muted-foreground">
            Search...
          </span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
            <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
            <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800">
        <DialogHeader className="sr-only">
          <DialogTitle>Search...</DialogTitle>
          <DialogDescription>Search for a command to run...</DialogDescription>
        </DialogHeader>
        <Command
          className="**:data-[slot=command-input-wrapper]:bg-input/50 **:data-[slot=command-input-wrapper]:border-input rounded-none bg-transparent **:data-[slot=command-input]:!h-9 **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:!h-9 **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border"
          filter={(value, search, keywords) => {
            const extendValue = value + " " + (keywords?.join(" ") || "");
            if (extendValue.toLowerCase().includes(search.toLowerCase())) {
              return 1;
            }
            return 0;
          }}
        >
          <CommandInput placeholder="Search documentation..." />
          <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
            <CommandEmpty className="text-muted-foreground py-12 text-center text-sm">
              No results found.
            </CommandEmpty>
            <CommandGroup
              heading="Pages"
              className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
            >
              {navItems.map((item) => (
                <CommandMenuItem
                  key={item.href}
                  value={`Navigation ${item.label}`}
                  keywords={["nav", "navigation", item.label.toLowerCase()]}
                  onHighlight={() => {
                    setSelectedType("page");
                    setCopyPayload("");
                  }}
                  onSelect={() => {
                    runCommand(() => router.push(item.href));
                  }}
                >
                  <ArrowRightFromLine />
                  {item.label}
                </CommandMenuItem>
              ))}
            </CommandGroup>
            {pageTree.children.map((group) => (
              <CommandGroup
                key={group.$id}
                heading={group.name}
                className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
              >
                {group.type === "folder" &&
                  group.children.map((item) => {
                    if (item.type === "page") {
                      const isComponent = item.url.includes("/components/");

                      return (
                        <CommandMenuItem
                          key={item.url}
                          value={
                            item.name?.toString()
                              ? `${group.name} ${item.name}`
                              : ""
                          }
                          keywords={isComponent ? ["component"] : undefined}
                          onHighlight={() => {
                            setSelectedType(isComponent ? "component" : "page");
                            setCopyPayload(
                              isComponent
                                ? `Page: ${item.url.split("/").pop() ?? ""}`
                                : ""
                            );
                          }}
                          onSelect={() => {
                            runCommand(() => router.push(item.url));
                          }}
                        >
                          {isComponent ? (
                            <div className="border-muted-foreground aspect-square size-4 rounded-full border border-dashed" />
                          ) : (
                            <ArrowRightFromLine />
                          )}
                          {item.name}
                        </CommandMenuItem>
                      );
                    }
                    return null;
                  })}
              </CommandGroup>
            ))}
            {/*  {blocks.length ? (
              <CommandGroup
                heading="Blocks"
                className="!p-0 [&_[cmdk-group-heading]]:!p-3"
              >
                {blocks.map((block) => (
                  <CommandMenuItem
                    key={block.name}
                    value={block.name}
                    onHighlight={() => {
                      setSelectedType("block");
                      setCopyPayload(`Page: ${block.name}`);
                    }}
                    keywords={[
                      "block",
                      block.name,
                      block.description,
                      ...block.categories,
                    ]}
                    onSelect={() => {
                      runCommand(() =>
                        router.push(
                          `/dashboard/${block.categories[0]}/${block.name}`
                        )
                      );
                    }}
                  >
                    <SquareDashedIcon />
                    {block.description}
                    <span className="text-muted-foreground ml-auto font-mono text-xs font-normal tabular-nums">
                      {block.name}
                    </span>
                  </CommandMenuItem>
                ))}
              </CommandGroup>
            ) : null} */}
          </CommandList>
        </Command>
        <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium dark:border-t-neutral-700 dark:bg-neutral-800">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>{" "}
            {selectedType === "page" || selectedType === "component"
              ? "Go to Page"
              : null}
          </div>
          {copyPayload && (
            <>
              <Separator orientation="vertical" className="!h-4" />
              <div className="flex items-center gap-1">
                <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
                <CommandMenuKbd>C</CommandMenuKbd>
                {copyPayload}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CommandMenuItem({
  children,
  className,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void;
  "data-selected"?: string;
  "aria-selected"?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  useMutationObserver(ref, (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.();
      }
    });
  });

  return (
    <CommandItem
      ref={ref}
      className={cn(
        "data-[selected=true]:border-input data-[selected=true]:bg-input/50 h-9 rounded-md border border-transparent !px-3 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </CommandItem>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}

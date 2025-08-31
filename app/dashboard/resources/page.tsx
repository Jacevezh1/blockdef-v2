"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Plus } from "lucide-react";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import { useState } from "react";
import type {
  CybersecurityResource,
  SeverityLevel,
  ResourceType,
} from "@/types/resources";
import { initialResources } from "@/data/resources";
import { DataTable } from "@/components/resources/data-table";
import { createColumns } from "@/components/resources/columns";

export default function VulnerabilitiesPage() {
  const [resources, setResources] =
    useState<CybersecurityResource[]>(initialResources);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingResource, setEditingResource] =
    useState<CybersecurityResource | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    links: "",
    severity: "Medium" as SeverityLevel,
    type: "Vulnerability" as ResourceType,
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.category || !formData.description) return;

    const newResource: CybersecurityResource = {
      id: editingResource?.id || Date.now().toString(),
      name: formData.name,
      category: formData.category,
      description: formData.description,
      links: formData.links.split("\n").filter((link) => link.trim()),
      severity: formData.severity,
      type: formData.type,
      dateAdded:
        editingResource?.dateAdded || new Date().toISOString().split("T")[0],
    };

    if (editingResource) {
      setResources(
        resources.map((r) => (r.id === editingResource.id ? newResource : r))
      );
    } else {
      setResources([...resources, newResource]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      description: "",
      links: "",
      severity: "Medium",
      type: "Standard",
    });
    setEditingResource(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (resource: CybersecurityResource) => {
    setEditingResource(resource);
    setFormData({
      name: resource.name,
      category: resource.category,
      description: resource.description,
      links: resource.links.join("\n"),
      severity: resource.severity,
      type: resource.type,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setResources(resources.filter((r) => r.id !== id));
  };

  const columns = createColumns({ onEdit: handleEdit, onDelete: handleDelete });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Resources</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sx font-semibold tracking-tight">
                Blockchain Cybersecurity Resources
              </h1>
              <p className="text-muted-foreground text-xs mt-1">
                Comprehensive database of blockchain security vulnerabilities,
                tools, and research
              </p>
            </div>

            {/*  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => resetForm()}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Resource
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>
                    {editingResource ? "Edit Resource" : "Add New Resource"}
                  </DialogTitle>
                  <DialogDescription>
                    Add a new cybersecurity resource to the database with
                    relevant details and links.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Resource name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        placeholder="e.g., Smart Contract Vulnerabilities"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Detailed description of the resource"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="links">Links (one per line)</Label>
                    <Textarea
                      id="links"
                      value={formData.links}
                      onChange={(e) =>
                        setFormData({ ...formData, links: e.target.value })
                      }
                      placeholder="https://example.com/resource1&#10;https://example.com/resource2"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity</Label>
                      <Select
                        value={formData.severity}
                        onValueChange={(value: SeverityLevel) =>
                          setFormData({ ...formData, severity: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Critical">Critical</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Info">Info</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: ResourceType) =>
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Vulnerability">
                            Vulnerability
                          </SelectItem>
                          <SelectItem value="Tool">Tool</SelectItem>
                          <SelectItem value="Research">Research</SelectItem>
                          <SelectItem value="Best Practice">
                            Best Practice
                          </SelectItem>
                          <SelectItem value="Exploit">Exploit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit}>
                    {editingResource ? "Update" : "Add"} Resource
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog> */}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Total Resources
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold text-blue-600">
                  {resources.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Security resources
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Security Tools
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold text-green-600">
                  {resources.filter((r) => r.type === "Tool").length}
                </div>
                <p className="text-xs text-muted-foreground">Available tools</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs font-medium">
                  Categories
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold text-purple-600">
                  {new Set(resources.map((r) => r.category)).size}
                </div>
                <p className="text-xs text-muted-foreground">
                  Unique categories
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Security Resources Database</CardTitle>
              <CardDescription className="text-xs">
                Manage and explore blockchain cybersecurity resources,
                vulnerabilities, and tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={resources} />
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

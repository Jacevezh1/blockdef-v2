"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Globe, ExternalLink } from "lucide-react";
import {
  cryptoEvents,
  getEventsByDate,
  getCategoryColor,
  getImportanceIcon,
} from "@/data/events";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteFunctionsHeader } from "@/components/site-functions-header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  const eventsByDate = getEventsByDate();
  const selectedDateString = selectedDate?.toISOString().split("T")[0];
  const selectedEvents = selectedDateString
    ? eventsByDate[selectedDateString] || []
    : [];

  // Get events for current month view
  const currentMonthEvents = cryptoEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getMonth() === selectedMonth.getMonth() &&
      eventDate.getFullYear() === selectedMonth.getFullYear()
    );
  });

  const hasEventsOnDate = (date: Date): boolean => {
    const dateString = date.toISOString().split("T")[0];
    return !!eventsByDate[dateString];
  };

  const formatEventDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
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
                  <BreadcrumbPage>Events</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SiteFunctionsHeader />
        </header>
        <div className="flex-1 space-y-6">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-sm font-semibold">
                Crypto Events Calendar 2025
              </h1>
              <p className="text-sm text-muted-foreground">
                Stay updated with the most important cryptocurrency and
                blockchain events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    Event Calendar
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Click on a date to view events. Dates with events are
                    highlighted.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    onMonthChange={setSelectedMonth}
                    className="rounded-md border w-full p-8"
                    modifiers={{
                      hasEvents: (date) => hasEventsOnDate(date),
                    }}
                    modifiersStyles={{
                      hasEvents: {
                        backgroundColor: "rgb(59 130 246 / 0.1)",
                        color: "rgb(59 130 246)",
                        fontWeight: "500",
                      },
                    }}
                  />
                </CardContent>
              </Card>

              {/* Selected Date Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    {selectedDate
                      ? formatEventDate(selectedDate)
                      : "Select a Date"}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {selectedEvents.length > 0
                      ? `${selectedEvents.length} event${
                          selectedEvents.length > 1 ? "s" : ""
                        } scheduled`
                      : "No events scheduled"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <div
                        key={event.id}
                        className="space-y-2 p-3 border rounded-lg"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-medium leading-tight">
                            {event.title}
                          </h3>
                          <span className="text-sm">
                            {getImportanceIcon(event.importance)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.category}
                          </Badge>
                          {event.location && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </div>
                          )}
                          {event.isVirtual && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Globe className="h-3 w-3" />
                              Virtual
                            </div>
                          )}
                        </div>
                        {event.url && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs bg-transparent"
                            asChild
                          >
                            <a
                              href={event.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Learn More
                            </a>
                          </Button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <CalendarDays className="h-8 w-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No events on this date</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Monthly Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    {selectedMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    Overview
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {currentMonthEvents.length} events this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {currentMonthEvents.map((event) => (
                      <div
                        key={event.id}
                        className="space-y-2 p-3 border rounded-lg"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-medium leading-tight">
                            {event.title}
                          </h3>
                          <span className="text-sm">
                            {getImportanceIcon(event.importance)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {event.date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.category}
                          </Badge>
                          {event.location && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </div>
                          )}
                          {event.isVirtual && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Globe className="h-3 w-3" />
                              Virtual
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

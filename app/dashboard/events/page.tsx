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
        <header className="flex h-12 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-6">
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
        <div className="flex-1 space-y-4">
          <div className="p-6 space-y-6">
            <div className="space-y-1">
              <h1 className="text-[0.8rem] font-semibold tracking-tight">
                Crypto Events Calendar 2025
              </h1>
              <p className="text-xs text-muted-foreground">
                Stay updated with the most important cryptocurrency and
                blockchain events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-sx font-medium flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    Event Calendar
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Click on a date to view events. Dates with events are
                    highlighted.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center pb-6">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    onMonthChange={setSelectedMonth}
                    className="rounded-lg border border-border/50 w-full p-12"
                    modifiers={{
                      hasEvents: (date) => hasEventsOnDate(date),
                    }}
                    modifiersStyles={{
                      hasEvents: {
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        color: "hsl(var(--primary))",
                        fontWeight: "500",
                        borderRadius: "6px",
                      },
                    }}
                  />
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-sx font-medium">
                    {selectedDate
                      ? formatEventDate(selectedDate)
                      : "Select a Date"}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {selectedEvents.length > 0
                      ? `${selectedEvents.length} event${
                          selectedEvents.length > 1 ? "s" : ""
                        } scheduled`
                      : "No events scheduled"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <div
                        key={event.id}
                        className="space-y-3 p-4 border border-border/50 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sx font-medium leading-tight">
                            {event.title}
                          </h3>
                          <span className="text-sx shrink-0">
                            {getImportanceIcon(event.importance)}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs border-border/50 ${getCategoryColor(
                              event.category
                            )}`}
                          >
                            {event.category}
                          </Badge>
                          {event.location && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                              <MapPin className="h-3 w-3" />
                              {event.location}
                            </div>
                          )}
                          {event.isVirtual && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                              <Globe className="h-3 w-3" />
                              Virtual
                            </div>
                          )}
                        </div>
                        {event.url && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-xs h-8 border-border/50 hover:bg-muted/50 bg-transparent"
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
                    <div className="text-center py-12 text-muted-foreground">
                      <CalendarDays className="h-12 w-12 mx-auto mb-3 opacity-30" />
                      <p className="text-xs">No events on this date</p>
                      <p className="text-xs opacity-70 mt-1">
                        Select a different date to view events
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-sx font-medium">
                    {selectedMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    Overview
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {currentMonthEvents.length} events this month
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                  {currentMonthEvents.length > 0 ? (
                    currentMonthEvents.map((event) => (
                      <div
                        key={event.id}
                        className="space-y-2 p-3 border border-border/50 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sx font-medium leading-tight">
                            {event.title}
                          </h3>
                          <span className="text-sx shrink-0">
                            {getImportanceIcon(event.importance)}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">
                          {event.date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs border-border/50 ${getCategoryColor(
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
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <CalendarDays className="h-8 w-8 mx-auto mb-2 opacity-30" />
                      <p className="text-xs">No events this month</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

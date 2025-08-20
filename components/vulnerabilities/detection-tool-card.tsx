import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Shield, Zap } from "lucide-react";
import type { DetectionTool } from "@/types/vulnerability";

const iconMap = {
  Code,
  Shield,
  Zap,
};

interface DetectionToolCardProps {
  tool: DetectionTool;
}

export function DetectionToolCard({ tool }: DetectionToolCardProps) {
  const IconComponent = iconMap[tool.icon as keyof typeof iconMap];

  return (
    <div className="group space-y-3 p-4 border border-border rounded-lg transition-all duration-200 hover:shadow-sm hover:border-muted-foreground/20">
      <div className="flex items-center gap-2">
        <IconComponent className={`h-4 w-4 ${tool.iconColor}`} />
        <span className="font-medium text-foreground">{tool.name}</span>
        <Badge variant="outline" className="text-xs ml-auto">
          {tool.type}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {tool.description}
      </p>
      <Button
        size="sm"
        className="w-full group-hover:bg-primary/90 transition-colors"
      >
        Use Tool
      </Button>
    </div>
  );
}

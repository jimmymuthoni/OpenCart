import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  status: "healthy" | "warning" | "error";
  icon: LucideIcon;
  metrics: {
    label: string;
    value: string;
  }[];
  description?: string;
}

export function ServiceCard({ title, status, icon: Icon, metrics, description }: ServiceCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500/10 text-green-700 border-green-500/20";
      case "warning":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20";
      case "error":
        return "bg-red-500/10 text-red-700 border-red-500/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {title}
        </CardTitle>
        <Badge 
          variant="outline" 
          className={getStatusColor(status)}
        >
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        {description && (
          <p className="text-xs text-muted-foreground mb-3">
            {description}
          </p>
        )}
        <div className="space-y-2">
          {metrics.map((metric, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{metric.label}</span>
              <span className="font-medium">{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
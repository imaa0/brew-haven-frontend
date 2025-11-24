import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon: Icon, title, description, className }: InfoCardProps) => {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-8 hover-lift",
        "group cursor-default",
        className
      )}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;

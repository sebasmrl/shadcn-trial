import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="outline">Ouline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="secondary">Secondary</Badge>

      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>

    </div>
  );
}
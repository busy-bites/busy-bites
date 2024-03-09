import { Button } from "@/components/ui/button";

export default function DesignSystem() {
  return (
    <div className="mx-auto max-w-sm">
      {/* Button section */}
      <section className="flex gap-5 p-5">
        <Button>Button CTA</Button>
        <Button variant="outline">Button CTA</Button>
      </section>
      <section></section>
    </div>
  );
}

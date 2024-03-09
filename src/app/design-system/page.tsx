import { Button } from "@/components/ui/button";

export default function DesignSystem() {
  return (
    <div className="mx-auto max-w-sm space-y-10 p-5">
      {/* Button section */}
      <section className="flex gap-5">
        <Button>Button CTA</Button>
        <Button variant="outline">Button CTA</Button>
      </section>
      {/* Typography section */}
      <section>
        <Headline>Hello, Sofia</Headline>
        <Title>Title</Title>
      </section>
    </div>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return <h1 className="mb-6 text-3xl font-bold">{children}</h1>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-lg font-bold">{children}</h2>;
}

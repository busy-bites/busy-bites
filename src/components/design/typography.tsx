export function Headline({ children }: { children: React.ReactNode }) {
  return <h1 className="mb-6 text-3xl font-bold">{children}</h1>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-lg font-bold">{children}</h2>;
}

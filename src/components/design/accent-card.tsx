export default function AccentCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="flex items-center justify-around rounded-3xl bg-accent p-4">
      {children}
    </article>
  );
}

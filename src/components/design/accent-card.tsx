export default function AccentCard({
  image,
  title,
  description,
}: {
  image: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="flex items-center justify-around rounded-3xl bg-accent p-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs font-semibold">{description}</p>
      </div>
      {image}
    </article>
  );
}

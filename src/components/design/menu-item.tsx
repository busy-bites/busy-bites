import { FoodItem } from "./food";

export default function MenuItem({
  food,
  icon,
}: {
  food: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <FoodItem>{icon}</FoodItem>
      <p>{food}</p>
    </div>
  );
}

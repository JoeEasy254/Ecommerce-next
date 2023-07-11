import { ScrollArea } from "@/components/ui/scroll-area";

export default function categoriesListView() {
  const liquorCategories = [
    "Whiskey",
    "Vodka",
    "Rum",
    "Tequila",
    "Gin",
    "Wine",
    "Beer",
    "Liqueur",
  ];
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <ul className="space-y-3">
        {liquorCategories.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
    </ScrollArea>
  );
}

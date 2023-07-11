import Cartitem from "./Cartitem";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartItems() {
  return (
    <div>
      <ScrollArea className="h-[400px] w-[400px] rounded-md border p-4">
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </ScrollArea>

      <Card>
        <CardHeader>
          <CardTitle>Card Summary</CardTitle>
          <CardDescription>your cart summary:</CardDescription>
        </CardHeader>
        <CardContent>Total Ksh 5000</CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Proceed to checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

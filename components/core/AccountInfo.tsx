import { CreditCard, Settings, User, Trash, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function AccountInfo() {
  return (
    <>
      <div>
        <div>
          <div className="flex space-y-4 flex-col">
            <h1 className="text-2xl my-2">Personal Information</h1>
            <div className="flex justify-between items-center border p-2 rounded">
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                  <Label htmlFor="name">First Name</Label>
                  <Input type="text" id="name" placeholder="first name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                  <Label htmlFor="last name">Last Name</Label>
                  <Input type="text" id="lastName" placeholder="last name" />
                </div>
              </div>

              <div>
                <Button variant="outline">
                  Edit <Edit className="mx-2 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center border p-2 rounded">
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5 ">
                  <Label htmlFor="email">Email</Label>
                  <Input type="text" id="email" placeholder="email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input type="tel" id="mobile" placeholder="mobile Number" />
                </div>
              </div>
              <div>
                <Button variant="outline">
                  Edit <Edit className="mx-2 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4 flex-col">
            <h1 className="text-2xl my-2">Address</h1>
            <div className="flex justify-between items-center border p-2 rounded">
              <div>
                <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                  <Label htmlFor="name">First Name</Label>
                  <Input type="text" id="name" placeholder="first name" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 my-4">
                  <Label htmlFor="last name">Last Name</Label>
                  <Input type="text" id="lastName" placeholder="last name" />
                </div>
              </div>

              <div>
                <Button variant="outline">
                  Edit <Edit className="mx-2 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

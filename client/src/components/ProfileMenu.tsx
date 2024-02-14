import {
  Pencil,
  UserRound,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
export function ProfileMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="xl:w-32">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" onClick={toggleMenu} className="xl:h-fit">
            <img
              src={
                "https://res.cloudinary.com/dasxoa9r4/image/upload/v1682057684/netflx-web/w3ct3bv3nch7xbcsffgi.webp"
              }
              alt="logo"
              className="w-[1.7rem] mr-2  xl:w-28 rounded-lg  object-contain "
            />
            {isOpen ? (
              <ChevronUp size={15} />
            ) : (
              <ChevronDown size={15} className="xl:hidden" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-42  bg-[#232323] border-hidden font-semibold text-[#e2e8f0]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => navigate("profile")}>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Manage Profile</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Exit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("account")}>
              <UserRound className="mr-2 h-4 w-4" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("help-centers")}>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help Center</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="text-white bg-[#334155]" />
            <DropdownMenuLabel className="flex ">
              Sign Out of Netflix
            </DropdownMenuLabel>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

import { Film, Home, Clapperboard, TrendingUp, List, Bell } from "lucide-react";

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
import logo from "../../public/images/logo.png";
import { useNavigate } from "react-router-dom";
export function Menu() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="hidden maxWidth:grid xl:w-36 xl:text-9xl xl:grid xl:grid-cols-2 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="default"
            className="text-5xl xl:text-6xl xl:h-20  xl:w-72 grid grid-cols-4"
          >
            <img
              src={logo}
              alt="logo"
              className="w-[0.7rem] mr-3 xl:w-8 xl:mr-2"
              onClick={handleClick}
            />
            Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56  bg-[#1B1B1C] border-hidden font-semibold text-[#e2e8f0]">
          <DropdownMenuLabel className="flex items-center">
            <img src={logo} alt="logo" className="w-[0.7rem] mr-3" /> Netflix
            Web
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="text-white bg-[#334155]" />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Clapperboard className="mr-2 h-4 w-4" />
              <span>Tv Shows</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Film className="mr-2 h-4 w-4" />
              <span>Movies</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <TrendingUp className="mr-2 h-4 w-4" />
              <span>News and Popular</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <List className="mr-2 h-4 w-4" />
              <span>My List</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className="mr-2 h-4 w-4" />
              <span>Notification</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

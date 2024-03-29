import { GamePadIcon, HomeIcon, PriceIcon, UserIcon, WalkthroughsIcon } from "@/components"
import { cn } from "@/helpers/cn"
import { NavBarList } from "./NavBarList"
import { NavBarListItemButton } from "./NavBarListItemButton"
import { NavBarListItemLink } from "./NavBarListItemLink"
import { NavBarProps } from "./types"



export const NavBar = ({ className, ...props }: NavBarProps) => {
    return (
        <nav className={cn("flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300", className)} {...props} >
            <div className="flex items-center justify-center">
                <img src="https://soildata.mapbiomas.org/logos/navbar/soildata-m.png" alt="Logo SoilData" className="w-auto h-12 p-2 my-4  " />
            </div>

            <NavBarList className={"flex-grow"}>
                <NavBarListItemLink href="/">
                    <HomeIcon className="w-4 h-4 group-hover:text-slate-50 " />
                    Home
                </NavBarListItemLink>
                <NavBarListItemLink href="/Games">
                    <GamePadIcon className="w-4 h-4  group-hover:text-slate-50" />
                    Games
                </NavBarListItemLink>
                <NavBarListItemLink href="/Top10">
                    <PriceIcon className="w-4 h-4 group-hover:text-slate-50" />
                    Top 10
                </NavBarListItemLink>
                <NavBarListItemLink href="/Walkthroughs">
                    <WalkthroughsIcon className="w-4 h-4 group-hover:text-slate-50" />
                    Walkthroughs
                </NavBarListItemLink>

                <NavBarListItemButton>
                    <WalkthroughsIcon className="w-4 h-4 group-hover:text-slate-50" />
                    Teste
                </NavBarListItemButton>

            </NavBarList>

            <NavBarList>
                <NavBarListItemLink href="/User">
                    <UserIcon className="w-4 h-4 group-hover:text-slate-50" />
                    User
                </NavBarListItemLink>
            </NavBarList>
        </nav   >
    )
}
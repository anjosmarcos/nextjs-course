import { cn } from "@/helpers/cn"
import { NavBarListItemProps } from "./types"

export const NavBarListItem = ({ children, className, ...props }: NavBarListItemProps) => {
    return (
        <li className={cn("group my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center", className)}{...props}>
            {children}
        </li>
    )
}
import { cn } from "@/helpers/cn"
import Link from "next/link"
import { NavBarListItem } from "./NavBarListItem"
import { NavBarListItemLinkProps } from "./types"

export const NavBarListItemLink = ({ href, children, className, ...props }: NavBarListItemLinkProps) => {
    return (
        <NavBarListItem className={cn('p-0', className)}>
            <Link href={href} className="flex gap-2 items-center w-full p-2 rounded-lg" {...props}>
                {children}
            </Link>
        </NavBarListItem>
    )
}
import Link from "next/link"

import { fetchAppNavigation } from "@/shared/api/navigation.api"
import { ArrowDownIcon } from "@/shared/icons/down-arrow.icon"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"

type Props = {
	useDropdown?: boolean
}
export async function NavigationMenu({ useDropdown = true }: Props) {
	const data = await fetchAppNavigation()

	return (
		<>
			{data.map((item) =>
				item.children?.length ? (
					<>
						{useDropdown ? (
							<DropdownMenu key={item.href}>
								<DropdownMenuTrigger asChild>
									<div className="hover:text-foreground/80 text-foreground/60 flex cursor-pointer items-center transition-all duration-200 hover:scale-105">
										{item.label}
										<ArrowDownIcon className="size-6" />
									</div>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									{item.children.map((child) => (
										<DropdownMenuItem
											className="cursor-pointer"
											asChild
											key={child.href}
										>
											<Link href={child.href || "#"}>{child.label}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							item.children.map((child) => (
								<Link
									className="hover:text-foreground/80 text-foreground/60 transition-all duration-200 hover:scale-105"
									href={child.href || "#"}
									key={child.href}
								>
									{child.label}
								</Link>
							))
						)}
					</>
				) : (
					<Link
						className="hover:text-foreground/80 text-foreground/60 transition-all duration-200 hover:scale-105"
						href={item.href || "#"}
						key={item.href}
					>
						{item.label}
					</Link>
				)
			)}
		</>
	)
}

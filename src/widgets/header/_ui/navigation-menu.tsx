import Link from "next/link"
import { memo } from "react"

import { fetchAppNavigation } from "@/shared/api/navigation.api"
import { ArrowDownIcon } from "@/shared/icons/down-arrow.icon"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu"

const LINK_STYLES =
	"hover:text-foreground/80 text-foreground/60 transition-all duration-200 hover:scale-105"

type NavigationItem = {
	href: string
	label: string
	children?: NavigationItem[]
}

type Props = {
	useDropdown?: boolean
}

const DropdownNavigationItem = memo(({ item }: { item: NavigationItem }) => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<div className={`${LINK_STYLES} flex cursor-pointer items-center`}>
				{item.label}
				<ArrowDownIcon className="size-6" />
			</div>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			{item.children?.map((child) => (
				<DropdownMenuItem className="cursor-pointer" asChild key={child.href}>
					<Link href={child.href || "#"}>{child.label}</Link>
				</DropdownMenuItem>
			))}
		</DropdownMenuContent>
	</DropdownMenu>
))

const SimpleNavigationItem = memo(({ item }: { item: NavigationItem }) => (
	<Link className={LINK_STYLES} href={item.href || "#"} key={item.href}>
		{item.label}
	</Link>
))

const FlatNavigationItems = memo(({ items }: { items: NavigationItem[] }) => (
	<>
		{items.map((child) => (
			<SimpleNavigationItem key={child.href} item={child} />
		))}
	</>
))

export async function NavigationMenu({ useDropdown = true }: Props) {
	const data = await fetchAppNavigation()

	return (
		<>
			{data.map((item) =>
				item.children?.length ? (
					<div className="flex flex-col gap-6" key={item.href}>
						{useDropdown ? (
							<DropdownNavigationItem item={item} />
						) : (
							<FlatNavigationItems items={item.children} />
						)}
					</div>
				) : (
					<SimpleNavigationItem key={item.href} item={item} />
				)
			)}
		</>
	)
}

DropdownNavigationItem.displayName = "DropdownNavigationItem"
SimpleNavigationItem.displayName = "SimpleNavigationItem"
FlatNavigationItems.displayName = "FlatNavigationItems"

import { Suspense } from "react"

import { NavigationSkeleton } from "../_skeleton/navigation-skeleton"

import { NavigationMenu } from "./navigation-menu"

type Props = {
	useDropdown?: boolean
}
export function Navigation({ useDropdown = true }: Props) {
	return (
		<nav className="relative flex h-full flex-col gap-6 text-lg font-medium lg:flex-row lg:text-base">
			<Suspense fallback={<NavigationSkeleton />}>
				<NavigationMenu useDropdown={useDropdown} />
			</Suspense>
		</nav>
	)
}

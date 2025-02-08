import { Suspense } from "react"

import { NavigationSkeleton } from "../_skeleton/navigation-skeleton"

import { NavigationMenu } from "./navigation-menu"

export function Navigation() {
	return (
		<nav className="flex flex-col gap-6 text-lg font-medium md:flex-row md:text-base">
			<Suspense fallback={<NavigationSkeleton />}>
				<NavigationMenu />
			</Suspense>
		</nav>
	)
}

import Link from "next/link"

import { fetchAppNavigation } from "@/shared/api/navigation.api"

export async function NavigationMenu() {
	const data = await fetchAppNavigation()

	return (
		<>
			{data.map((item) => (
				<Link
					className="hover:text-foreground/80 text-foreground/60 transition-all duration-200 hover:scale-105"
					href={item.href || "#"}
					key={item.href}
				>
					{item.label}
				</Link>
			))}
		</>
	)
}

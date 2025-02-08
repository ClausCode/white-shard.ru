import { Skeleton } from "@/shared/ui/skeleton"

export function NavigationSkeleton() {
	return (
		<>
			<Skeleton className="h-6 w-18" />
			<Skeleton className="h-6 w-14" />
			<Skeleton className="h-6 w-22" />
			<Skeleton className="h-6 w-12" />
		</>
	)
}

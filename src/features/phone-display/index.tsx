import { Suspense } from "react"

import { Phone } from "./_ui/phone"
import { PhoneIcon } from "@/shared/icons/phone.icon"
import { cn } from "@/shared/lib/utils"
import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
	className?: string
}

export async function PhoneDisplay({ className }: Props) {
	return (
		<div className={cn("flex items-center gap-4", className)}>
			<PhoneIcon className="text-primary size-6" />
			<Suspense fallback={<Skeleton className="h-6 w-36" />}>
				<Phone />
			</Suspense>
		</div>
	)
}

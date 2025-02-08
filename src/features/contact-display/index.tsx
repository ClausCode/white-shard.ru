import { Suspense } from "react"

import { Contact } from "./_ui/contact"
import { TelegramIcon } from "@/shared/icons/telegram.icon"
import { cn } from "@/shared/lib/utils"
import { Skeleton } from "@/shared/ui/skeleton"

type Props = {
	className?: string
}

export async function ContactDisplay({ className }: Props) {
	return (
		<div className={cn("flex items-center gap-3", className)}>
			<TelegramIcon className="text-primary size-6" />
			<Suspense fallback={<Skeleton className="h-6 w-36" />}>
				<Contact />
			</Suspense>
		</div>
	)
}

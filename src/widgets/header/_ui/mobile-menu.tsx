"use client"

import { Menu } from "lucide-react"
import React from "react"

import { Button } from "@/shared/ui/button"
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from "@/shared/ui/sheet"

type MobileMenuProps = {
	logo?: React.ReactElement
	children: React.ReactElement | React.ReactElement[] | never
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function MobileMenu({
	logo,
	children,
	open,
	onOpenChange
}: MobileMenuProps) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu className="h-5 w-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetTitle className="mb-5 border-b pb-5">{logo}</SheetTitle>
				<div
					className="flex h-full flex-col justify-between pb-12"
					onClick={() => onOpenChange(false)}
				>
					{children}
				</div>
			</SheetContent>
		</Sheet>
	)
}

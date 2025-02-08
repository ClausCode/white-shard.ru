"use client"

import React from "react"

import { MobileMenu } from "./_ui/mobile-menu"

type Props = {
	logo?: React.ReactElement
	navigation: React.ReactElement
	contacts?: React.ReactElement
	actions?: React.ReactElement
}

export function AppHeaderLayout(props: Props) {
	const [open, setOpen] = React.useState(false)

	return (
		<header className="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 mx-auto w-full max-w-screen-xl backdrop-blur-sm">
			<div className="container flex h-14 items-center px-4">
				<div className="mr-2 md:hidden">
					<MobileMenu logo={props.logo} open={open} onOpenChange={setOpen}>
						{props.navigation}
						<div className="flex flex-col gap-4 py-8">
							{props.contacts}
							{props.actions}
						</div>
					</MobileMenu>
				</div>

				<div className="mr-8 ml-4 md:ml-0">{props.logo}</div>
				<div className="flex flex-1 items-center">
					<div className="hidden md:flex">{props.navigation}</div>
					<div className="flex flex-1 items-center justify-end space-x-3">
						<div className="mr-8 hidden md:flex">{props.contacts}</div>
						{props.actions}
					</div>
				</div>
			</div>
		</header>
	)
}

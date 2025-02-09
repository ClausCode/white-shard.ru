"use client"

import React from "react"

import { MobileMenu } from "./_ui/mobile-menu"

type Props = {
	logo?: React.ReactElement
	navigation: React.ReactElement
	navigationMobile: React.ReactElement
	contacts?: React.ReactElement
	actions?: React.ReactElement
}

export function AppHeaderLayout(props: Props) {
	const [open, setOpen] = React.useState(false)

	return (
		<header className="supports-backdrop-filter:bg-background/60 sticky top-0 z-50 mx-auto w-full backdrop-blur-sm">
			<div className="container flex h-14 max-w-screen-xl items-center justify-self-center px-4">
				<div className="mr-2 lg:hidden">
					<MobileMenu logo={props.logo} open={open} onOpenChange={setOpen}>
						{props.navigationMobile}
						<div className="flex flex-col gap-4 py-8">
							{props.contacts}
							{props.actions}
						</div>
					</MobileMenu>
				</div>

				<div className="mr-8 ml-4 lg:ml-0">{props.logo}</div>
				<div className="flex flex-1 items-center">
					<div className="hidden lg:flex">{props.navigation}</div>
					<div className="flex flex-1 items-center justify-end space-x-3">
						<div className="mr-8 hidden lg:flex">{props.contacts}</div>
						{props.actions}
					</div>
				</div>
			</div>
		</header>
	)
}

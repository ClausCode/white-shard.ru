import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import { AppHeader } from "@/widgets/header"

import "./globals.css"
import { cn } from "@/shared/lib/utils"

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Next.js + Payload CMS",
	description: "Example of a Next.js app with Payload CMS and Shadcn/UI"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html suppressHydrationWarning lang="ru">
			<body
				className={cn(
					"bg-background min-h-screen antialiased",
					jetbrainsMono.variable
				)}
			>
				<AppHeader />

				{children}
			</body>
		</html>
	)
}

import { ThemeToggle } from "@/features/theme"

import { Button } from "@/shared/ui/button"

export default function Home() {
	return (
		<div className="justify-self-center">
			<Button>Example Next.js + Payload CMS App</Button>
			<ThemeToggle />
		</div>
	)
}

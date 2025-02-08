import { PhoneDisplay } from "@/features/phone-display"

import { ActionList } from "./_ui/action-list"
import { Navigation } from "./_ui/navigation"
import { AppHeaderLayout } from "./layout"
import { AppLogo } from "@/shared/ui/app-logo"

export async function AppHeader() {
	return (
		<AppHeaderLayout
			logo={<AppLogo />}
			navigation={<Navigation />}
			contacts={<PhoneDisplay />}
			actions={<ActionList />}
		/>
	)
}

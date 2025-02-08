import { API_URL } from "../lib/config"
import { NavigationLink } from "../types/navigation.type"

type NavigationResponse = {
	navigation: NavigationLink[]
}
export async function fetchAppNavigation() {
	const response = await fetch(
		`${API_URL}/globals/settings?depth=1&select[navigation]=true`
	)
	if (!response.ok) return []
	const data = (await response.json()) as NavigationResponse
	return data.navigation
}

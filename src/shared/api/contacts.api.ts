import { API_URL } from "../lib/config"
import { Contacts } from "../types/contacts.type"

type ContactsResponse = {
	contacts: Contacts
}
export async function fetchAppContacts() {
	const response = await fetch(
		`${API_URL}/globals/settings?depth=1&select[contacts]=true`
	)
	if (!response.ok) return []
	const data = (await response.json()) as ContactsResponse
	return data.contacts
}

import Link from "next/link"

import { fetchAppContacts } from "@/shared/api/contacts.api"
import { Contacts } from "@/shared/types/contacts.type"

export async function Phone() {
	const contacts = (await fetchAppContacts()) as Contacts
	const href = `tel:+${contacts.phone?.replace(/[^0-9]/g, "")}`
	return (
		<Link href={href} className="tracking-tighter">
			{contacts.phone}
		</Link>
	)
}

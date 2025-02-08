import Link from "next/link"

import { fetchAppContacts } from "@/shared/api/contacts.api"
import { Contacts } from "@/shared/types/contacts.type"

export async function Contact() {
	const contacts = (await fetchAppContacts()) as Contacts
	const href = `https://t.me/${contacts.telegram}?text=${contacts.message}`
	return (
		<Link href={href} className="tracking-tighter">
			t.me/{contacts.telegram}
		</Link>
	)
}

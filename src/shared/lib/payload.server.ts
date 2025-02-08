"use server"

import config from "@payload-config"
import { CollectionSlug, GlobalSlug, getPayload } from "payload"

export const getAppCMS = async () => {
	return await getPayload({ config })
}

export async function getCMSGlobal(slug: GlobalSlug) {
	const payload = await getAppCMS()
	return payload.findGlobal({ slug })
}

export async function getCMSCollection(collection: CollectionSlug) {
	const payload = await getAppCMS()
	return payload.find({ collection })
}

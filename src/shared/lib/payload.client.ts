"use client"

import { Media } from "@/dashboard/payload-types"

export function getMediaURL(data: Media | number) {
	if (typeof data === "number") return "/"
	return data.url || "/"
}

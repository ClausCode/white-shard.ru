import { GlobalConfig } from "payload"

import { NavigationLink } from "@/shared/types/navigation.type"

export const SettingsGlobal: GlobalConfig = {
	slug: "settings",
	label: "⚙️ Основные настройки",
	access: {
		read: () => true
	},
	fields: [
		{
			name: "navigation",
			type: "array",
			label: "Навигация",
			defaultValue: [
				{ label: "Landing", href: "/landing" },
				{ label: "О нас", href: "/about" }
			] as NavigationLink[],
			fields: [
				{
					name: "label",
					required: true,
					type: "text",
					label: "🏷️ Название"
				},
				{
					name: "href",
					required: true,
					type: "text",
					label: "🔗 Ссылка",
					defaultValue: "/"
				}
			],
			admin: {
				components: {
					RowLabel: "/custom/row-label#ArrayRowLabel"
				}
			}
		},
		{
			name: "contacts",
			type: "group",
			label: "📃 Контакты",
			fields: [
				{
					name: "phone",
					required: true,
					type: "text",
					label: "📞 Телефон",
					defaultValue: "+7 (959) 596 77 03"
				}
			]
		}
	]
}

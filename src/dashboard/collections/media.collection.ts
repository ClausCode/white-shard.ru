import type { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Медиа",
    plural: "🗃️ Медиа / Файлы",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};

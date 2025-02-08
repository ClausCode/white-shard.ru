"use client";

import { useRowLabel } from "@payloadcms/ui";

export const ArrayRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ title?: string }>();

  const customLabel = `Item ${String(rowNumber).padStart(2, "0")} `;

  return <h4>{data.title || customLabel}</h4>;
};

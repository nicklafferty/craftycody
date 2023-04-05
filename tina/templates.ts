import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      name: "date",
      label: "publish_date",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
  ] as TinaField[];
}

import type { Collection } from 'tinacms';

export const PageCollection: Collection = {
  name: 'page',
  label: 'Pages',
  path: 'src/content/page',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      return `/${document._sys.filename}`;
    },
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      label: 'Corpo',
      type: 'rich-text',
      isBody: true,
      required: true,
    },
  ],
};

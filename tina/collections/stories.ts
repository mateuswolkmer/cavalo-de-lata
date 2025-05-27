import type { Collection } from 'tinacms';

export const StoriesCollection: Collection = {
  name: 'stories',
  label: 'Histórias',
  path: 'src/content/stories',
  format: 'mdx',
  ui: {
    router({ document }) {
      return `/stories/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Título',
      isTitle: true,
      required: true,
    },
    {
      name: 'pubDate',
      label: 'Data de publicação',
      type: 'datetime',
    },
    {
      name: 'updatedDate',
      label: 'Data de atualização',
      type: 'datetime',
    },
    {
      name: 'heroImage',
      label: 'Imagem de destaque',
      type: 'image',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Corpo',
      isBody: true,
    },
  ],
};

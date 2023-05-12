import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'referenceImages',
      title: 'Additional Images',
      type: 'image',
      of: [
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'github',
      title: 'Github Link',
      type: 'string',
    }),
    defineField({
      name: 'demo',
      title: 'Live Demo Link',
      type: 'string',
    }),
    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'reference', to: {type: 'tags'}}],
      }),
    defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'logo'}}],
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
    defineField({
      name: 'softwareDetails',
      title: 'Software Details',
      type: 'blockContent',
    }),
  ],
})

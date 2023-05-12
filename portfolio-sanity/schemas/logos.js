import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Tech logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'members',
  title: 'members',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'class',
      title: 'class',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'status',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'blockContent',
    }),
  ],
})

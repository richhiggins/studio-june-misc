import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      type: 'image',
      name: 'articleImage',
      fields: [
        defineField({
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          rows: 2,
        }),
      ],
      options: {
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
    }),
  ],
})

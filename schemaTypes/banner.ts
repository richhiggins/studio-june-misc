import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sharedBanner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Re-usable banner component for landing pages',
    }),
  ],
})

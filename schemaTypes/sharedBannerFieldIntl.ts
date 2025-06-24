import {defineField, defineType} from 'sanity'

// shared banner with field level il8n
export default defineType({
  name: 'sharedBannerFieldIntl',
  title: 'Shared Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    // hidden multi-tenancy market field
    defineField({
      name: 'market',
      type: 'string',
      hidden: true,
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare(selection) {
      const previewTitle = selection.title[0].value // preview `en` title

      return {
        title: previewTitle,
      }
    },
  },
})

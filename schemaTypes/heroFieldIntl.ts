import {defineField, defineType} from 'sanity'

// hero object with field level il8n
export default defineType({
  name: 'heroFieldIntl',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      type: 'image',
      name: 'articleImage',
      fields: [
        defineField({
          type: 'internationalizedArrayText',
          name: 'alt',
          title: 'Alternative text',
        }),
      ],
      /*
        // not sure how to enable with field intl plugin
      options: {
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },*/
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

import {defineArrayMember, defineField, defineType} from 'sanity'

// landingPage with field level il8n
export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'components',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'heroFieldIntl',
        }),
        defineArrayMember({
          type: 'reference',
          to: [{type: 'sharedBannerFieldIntl'}],
          title: 'Shared Banner',
        }),
      ],
      description: 'Array of page components with field level localisation.',
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

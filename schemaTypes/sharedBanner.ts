import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sharedBanner',
  title: 'Shared Banner',
  type: 'document',
  groups: [{name: 'default', default: true}, {name: 'variants'}],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'default',
    }),
    // example field for DE, variant config could be made dynamic to the language
    defineField({
      name: 'titleVariants',
      type: 'internationalizedArrayString',
      group: 'variants',
    }),
    // hidden doc-intl language field
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
    // hidden multi-tenancy market field
    defineField({
      name: 'market',
      type: 'string',
      hidden: true,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'language'},
  },
})

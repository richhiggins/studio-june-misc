import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroDocIntl',
  title: 'Hero Component',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
  /*
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      fields: [
        defineField({
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          rows: 2,
        }),
      ],
      /*
      options: {
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },

    }),
    defineField({
      name: 'marketExclusions',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Austria', value: 'at'},
          {title: 'France', value: 'fr'},
          {title: 'Germany', value: 'de'},
          {title: 'Spain', value: 'es'},
          {title: 'Italy', value: 'it'},
        ],
        layout: 'grid',
      },
      description: 'EU markets where this hero component should not be shown.',
      group: 'market exclusions',
    }),
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
  ],
  */
})

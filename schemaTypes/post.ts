import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Components',
      of: [
        defineArrayMember({
          name: 'banner',
          type: 'banner',
        }),
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          type: 'reference',
          to: [
            {
              type: 'sharedBanner',
            },
          ],
          options: {
            filter: ({document}) => {
              if (!document.language) {
                return {
                  filter: '!defined(language)',
                }
              }
              return {
                filter: `language == $language`,
                params: {language: document.language},
              }
            },
          },
          title: 'Shared Banner',
        }),
      ],
    }),
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
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

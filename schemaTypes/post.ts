import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
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
      title: 'Page builder',
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
          to: [{type: 'sharedBanner'}],
        }),
      ],
    }),
    defineField({
      name: 'language',
      type: 'string',
      hidden: true,
    }),
  ],
})

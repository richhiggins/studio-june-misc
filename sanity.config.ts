import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {PortableTextEditorPlugins} from './plugins/pte'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {documentInternationalization} from '@sanity/document-internationalization'
import {assist} from '@sanity/assist'

export default defineConfig({
  name: 'default',
  title: 'Studio Latest June',

  projectId: '509lu81n',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
        {id: 'fr', title: 'French'},
        {id: 'it', title: 'Italian'},
        {id: 'es', title: 'Spanish'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string'],
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'de', title: 'German'},
        {id: 'fr', title: 'French'},
        {id: 'it', title: 'Italian'},
        {id: 'es', title: 'Spanish'},
        {id: 'nl', title: 'Dutch'},
      ],
      schemaTypes: ['post', 'sharedBanner'],
    }),
    assist({
      translate: {
        document: {
          languageField: 'language',
          documentTypes: ['post', 'sharedBanner'],
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    components: {
      portableText: {
        plugins: PortableTextEditorPlugins,
      },
    },
  },
})

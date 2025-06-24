import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, schemaTypesFieldLevel} from './schemaTypes'
import {PortableTextEditorPlugins} from './plugins/pte'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {documentInternationalization} from '@sanity/document-internationalization'
import {assist} from '@sanity/assist'
import {structure} from './structure/structure'
import {fieldStructure} from './structure/structure-field-li8n'
import MyLogo from './myLogo'

export default defineConfig([
  /*{
    icon: MyLogo,
    name: 'showroom',
    title: 'Content Showroom',
    basePath: '/showroom',

    projectId: '509lu81n',
    dataset: 'production',
  },
  {
    icon: MyLogo,
    name: 'ca',
    title: 'Puma CA Store',
    basePath: '/ca',

    projectId: '509lu81n',
    dataset: 'production',
    plugins: [
      structureTool({structure: caStructure}),
      internationalizedArray({
        languages: [
          {id: 'en', title: 'English'},
          {id: 'fr', title: 'French'},
        ],
        defaultLanguages: ['en'],
        fieldTypes: ['string'],
      }),
      documentInternationalization({
        // Required configuration
        supportedLanguages: [
          {id: 'en', title: 'English'},
          {id: 'fr', title: 'French'},
        ],
        schemaTypes: ['post', 'sharedBanner'],
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  */
  {
    icon: MyLogo,
    name: 'eu',
    title: 'Puma EU Store',
    basePath: '/eu',

    projectId: '509lu81n',
    dataset: 'production',

    plugins: [
      //    structureTool(),
      structureTool({structure}),
      visionTool(),
      documentInternationalization({
        // Required configuration
        supportedLanguages: [
          {id: 'en', title: 'English'},
          {id: 'de', title: 'German'},
          {id: 'fr', title: 'French'},
          {id: 'it', title: 'Italian'},
          {id: 'es', title: 'Spanish'},
          {id: 'nl', title: 'Dutch'},
          {id: 'fi', title: 'Finnish'},
          {id: 'pt', title: 'Portuguese'},
          {id: 'pl', title: 'Polish'},
          {id: 'cs', title: 'Czech'},
          {id: 'sv', title: 'Swedish'},
        ],
        schemaTypes: ['post', 'sharedBanner'],
      }),
      internationalizedArray({
        languages: [
          {id: 'at-de', title: 'Austria (German)'},
          {id: 'ch-de', title: 'Switzerland (German)'},
        ],
        fieldTypes: ['string'],
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
      templates: (prev) => {
        prev.forEach((item) => {
          // append `market` value for the current workspace
          if (item.schemaType.match('post|sharedBanner')) item.value.market = 'eu'
        })

        return [...prev]
      },
    },

    form: {
      components: {
        portableText: {
          plugins: PortableTextEditorPlugins,
        },
      },
    },
  },
  {
    // @ts-ignore
    icon: MyLogo,
    name: 'eu-field',
    title: 'Puma EU Store (field level translation)',
    basePath: '/eu-field',

    projectId: '509lu81n',
    dataset: 'production',

    plugins: [
      structureTool({structure: fieldStructure}),
      visionTool(),
      internationalizedArray({
        languages: [
          {id: 'en', title: 'English'},
          {id: 'de', title: 'German'},
          {id: 'fr', title: 'French'},
          {id: 'it', title: 'Italian'},
          {id: 'es', title: 'Spanish'},
          {id: 'nl', title: 'Dutch'},
          {id: 'fi', title: 'Finnish'},
          {id: 'pt', title: 'Portuguese'},
          {id: 'pl', title: 'Polish'},
          {id: 'cs', title: 'Czech'},
          {id: 'sv', title: 'Swedish'},
        ],
        fieldTypes: ['string', 'text'],
      }),
    ],

    schema: {
      types: schemaTypesFieldLevel,
      templates: (prev) => {
        prev.forEach((item) => {
          // append `market` value for the current workspace
          if (item.schemaType.match('post|sharedBanner')) item.value.market = 'eu'
        })

        return [...prev]
      },
    },

    form: {
      components: {
        portableText: {
          plugins: PortableTextEditorPlugins,
        },
      },
    },
  },
  /*
  {
    icon: MyLogo,
    name: 'gb',
    title: 'Puma GB Store',
    basePath: '/gb',

    projectId: '509lu81n',
    dataset: 'production',
  },
  {
    icon: MyLogo,
    name: 'us',
    title: 'Puma US Store',
    basePath: '/us',

    projectId: '509lu81n',
    dataset: 'production',
  },
  */
])

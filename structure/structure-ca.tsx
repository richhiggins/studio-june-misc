import type {StructureResolver} from 'sanity/structure'
import {DocumentsIcon} from '@sanity/icons'
import TranslatedDoc from './TranslatedDoc'

const LANGUAGES = [
  {id: 'en', title: 'English', icon: '🇬🇧'},
  {id: 'fr', title: 'French', icon: '🇫🇷'},
]

export const caStructure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      /*
      S.divider({title: 'Field-level translation', id: 'landing-pages-field', type: 'divider'}),
      S.documentTypeListItem('landingPage').title('Landing Pages'),
      S.divider({
        title: 'Document-level translation',
        id: 'landing-pages',
        type: 'divider',
      }),
      */
      //      S.documentTypeListItem('post').title('Landing Pages'),
      S.listItem()
        .title('Landing Pages')
        .schemaType('post')
        .child(
          S.list()
            .title('Landing Pages')
            .items([
              ...LANGUAGES.map((language) =>
                S.listItem()
                  .title(language.id.toLocaleUpperCase())
                  .schemaType('post')
                  .icon(() => (
                    <TranslatedDoc icon={<DocumentsIcon />} languageIcon={language.icon} />
                  ))
                  .child(
                    S.documentList()
                      .id(language.id)
                      .title(`${language.title} Landing Pages`)
                      .schemaType('post')
                      //.apiVersion(SANITY_API_VERSION)
                      .filter('_type == "post" && language == $language && market == "ca"')
                      .params({language: language.id})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('page-language', {
                          id: 'page-language',
                          language: language.id,
                        }),
                      ])
                      .canHandleIntent((intentName, params) => {
                        if (intentName === 'edit') {
                          return false
                        }

                        if (!params.template) {
                          return true
                        }

                        const languageValue = params?.template?.split(`-`).pop()
                        return languageValue === language.id
                      }),
                  ),
              ),
              S.divider(),
              S.listItem().title(`All languages`).schemaType('post').child(
                S.documentList()
                  .id(`all-posts`)
                  .title(`All languages`)
                  .schemaType('post')
                  .filter('_type == "post" && market == "ca"'),
                //                    .apiVersion(SANITY_API_VERSION)
                //                    .canHandleIntent(
                //                    (intentName, params) => intentName === 'edit' || params.template === `guide`,
                //                ),
              ),
            ]),
        ),
      //      S.documentTypeListItem('sharedBanner').title('Shared Components'),
      S.listItem()
        .title('Shared Components')
        .schemaType('sharedBanner')
        .child(
          S.list()
            .title('Shared Components')
            .items([
              ...LANGUAGES.map((language) =>
                S.listItem()
                  .title(language.id.toLocaleUpperCase())
                  .schemaType('sharedBanner')
                  .icon(() => (
                    <TranslatedDoc icon={<DocumentsIcon />} languageIcon={language.icon} />
                  ))
                  .child(
                    S.documentList()
                      .id(language.id)
                      .title(`${language.title} Landing Pages`)
                      .schemaType('sharedBanner')
                      //.apiVersion(SANITY_API_VERSION)
                      .filter('_type == "sharedBanner" && language == $language && market == "ca"')
                      .params({language: language.id})
                      .initialValueTemplates([
                        S.initialValueTemplateItem('page-language', {
                          id: 'page-language',
                          language: language.id,
                        }),
                      ])
                      .canHandleIntent((intentName, params) => {
                        if (intentName === 'edit') {
                          return false
                        }

                        if (!params.template) {
                          return true
                        }

                        const languageValue = params?.template?.split(`-`).pop()
                        return languageValue === language.id
                      }),
                  ),
              ),
              S.divider(),
              S.listItem().title(`All languages`).schemaType('post').child(
                S.documentList()
                  .id(`all-shared-banners`)
                  .title(`All languages`)
                  .schemaType('sharedBanner')
                  .filter('_type == "sharedBanner" && market == "ca"'),
                //                    .apiVersion(SANITY_API_VERSION)
                //                    .canHandleIntent(
                //                    (intentName, params) => intentName === 'edit' || params.template === `guide`,
                //                ),
              ),
            ]),
        ),
    ])

import type {StructureResolver} from 'sanity/structure'
import {DocumentsIcon} from '@sanity/icons'
import TranslatedDoc from './TranslatedDoc'

const LANGUAGES = [
  {id: 'en', title: 'English', icon: '🇬🇧'},
  {id: 'de', title: 'German', icon: '🇩🇪'},
  {id: 'fr', title: 'French', icon: '🇫🇷'},
  {id: 'it', title: 'Italian', icon: '🇮🇹'},
  {id: 'es', title: 'Spanish', icon: '🇪🇸'},
  {id: 'nl', title: 'Dutch', icon: '🇳🇱'},
]

export const fieldStructure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem('landingPage').title('Landing Pages'),
      S.documentTypeListItem('sharedBannerFieldIntl').title('Shared Components'),
    ])

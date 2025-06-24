import type {PortableTextPluginsProps} from 'sanity'
import {AutoCloseBracketsBehaviorPlugin} from './auto-close-brackets-plugin'
import {TextOnlyPasteBehaviorPlugin} from './text-only-paste-plugin'

export function PortableTextEditorPlugins(props: PortableTextPluginsProps) {
  return (
    <>
      {props.renderDefault(props)}
      <AutoCloseBracketsBehaviorPlugin />
      <TextOnlyPasteBehaviorPlugin />
      {/* Add any other plugins here */}
    </>
  )
}

// plugins/pte/text-only-paste-plugin.tsx
import {useEditor} from '@portabletext/editor'
import {defineBehavior, execute} from '@portabletext/editor/behaviors'
import {useEffect} from 'react'
/**
 * This Behavior will clean non alphanumeric characters when pasting into the portable text editor
 */
const textOnlyPasteBehaviour = defineBehavior({
  on: 'clipboard.paste',
  // skip guard, not really needed here
  actions: [
    ({event}) => {
      const cleanedClipboardContents = event.originEvent.dataTransfer
        .getData('text/plain')
        .replace(/[^a-zA-Z0-9\s]/g, '')

      return [
        execute({
          type: 'insert.text',
          text: cleanedClipboardContents,
        }),
      ]
    },
  ],
})

export function TextOnlyPasteBehaviorPlugin() {
  const editor = useEditor()

  useEffect(() => {
    const unregisterBehavior = editor.registerBehavior({
      behavior: textOnlyPasteBehaviour,
    })

    return () => {
      unregisterBehavior()
    }
  }, [editor])

  return null
}

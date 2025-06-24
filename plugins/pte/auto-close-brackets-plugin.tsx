// plugins/pte/auto-close-brackets-plugin.tsx
import {useEditor} from '@portabletext/editor'
import {defineBehavior, execute} from '@portabletext/editor/behaviors'
import {useEffect} from 'react'
/**
 * This Studio Plugin shows how to:
 *
 * 1. Define a standalone and portable Behavior using `defineBehavior`
 * 2. Register the Behavior using `editor.registerBehavior` inside a React component
 * 3. Package the component as a plugin to import into a Studio config
 */

/**
 * This Behavior will auto-close brackets when the user inserts an opening
 * bracket. It will also move the cursor in between the brackets so the user
 * can start typing immediately.
 */
const autoCloseBracketsBehavior = defineBehavior({
  on: 'insert.text',
  guard: ({event}) => {
    const bracketPairs: Record<string, string | undefined> = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    const lastInsertedChar = event.text.at(-1)
    const closingBracket =
      lastInsertedChar !== undefined ? bracketPairs[lastInsertedChar] : undefined

    if (closingBracket !== undefined) {
      // Pass the closing bracket to the actions for reuse
      return {closingBracket}
    }

    return false
  },
  actions: [
    ({event}) => [
      // Execute the original event that includes the opening bracket
      execute(event),
    ],
    (_, {closingBracket}) => [
      execute({
        type: 'insert.text',
        text: closingBracket,
      }),
      execute({
        type: 'move.backward',
        distance: closingBracket.length,
      }),
    ],
  ],
})

export function AutoCloseBracketsBehaviorPlugin() {
  const editor = useEditor()

  useEffect(() => {
    const unregisterBehavior = editor.registerBehavior({
      behavior: autoCloseBracketsBehavior,
    })

    return () => {
      unregisterBehavior()
    }
  }, [editor])

  return null
}

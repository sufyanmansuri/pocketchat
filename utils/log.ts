import { inspect } from 'util'

export function log(object: any, ...tags: string[]) {
  console.log(
    inspect(object, { colors: true, depth: null, showHidden: true }),
    ...tags
  )
}

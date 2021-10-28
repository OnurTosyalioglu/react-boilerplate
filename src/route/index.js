import publicIndex from './public.index'
import privateIndex from './private.index'
import protectedIndex from './protected.index'

export default [
  ...publicIndex,
  ...privateIndex,
  ...protectedIndex,
]

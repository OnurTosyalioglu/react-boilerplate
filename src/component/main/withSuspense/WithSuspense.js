import React, { Fragment, Suspense } from 'react'

import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import Fallback from '../fallback/Fallback'

const WithSuspense = Component => {
  return props => (
    <Fragment>
      <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  )
}

export default WithSuspense

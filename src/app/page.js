
import React from 'react'
import Default from './components/Default'
import { Suspense } from 'react'

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Default />
  </Suspense>
  )
}

export default Home


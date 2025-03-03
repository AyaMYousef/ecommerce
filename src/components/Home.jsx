import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import Categories from './Categories'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Component</title>

      </Helmet>
      <Header />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}

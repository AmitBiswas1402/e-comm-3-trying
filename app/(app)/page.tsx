import { sanityFetch } from '@/sanity/lib/live';
import { ALL_CATEGORIES_QUERY } from '@/sanity/queries/categories';
import React, { Suspense } from 'react'

const Home = () => {
  const { data: categories } = sanityFetch({
    query: ALL_CATEGORIES_QUERY
  })

  return (
    <div>
      {/* Featured Products Carousel */}

      <Suspense>
        
      </Suspense>

      <div className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">

          </h1>

        </div>

      </div>
    </div>
  )
}

export default Home;
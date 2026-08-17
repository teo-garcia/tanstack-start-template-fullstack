import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '~/components/home-page/home-page'
import { getSeoMeta, siteMetadata } from '~/lib/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: getSeoMeta({
      title: `Home | ${siteMetadata.shortName}`,
    }),
  }),
  component: HomePage,
})

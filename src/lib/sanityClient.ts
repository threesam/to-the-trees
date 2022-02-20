// require('dotenv').config()
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '8h8x1ca4',
  dataset: 'production',
  useCdn: true
})

export default client

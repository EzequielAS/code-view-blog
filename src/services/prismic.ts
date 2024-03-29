import * as prismic from '@prismicio/client'
import { enableAutoPreviews, CreateClientConfig } from '@prismicio/next'
import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

export function createClient(config: CreateClientConfig = {}) {
  const client = prismic.createClient(endpoint, {})

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
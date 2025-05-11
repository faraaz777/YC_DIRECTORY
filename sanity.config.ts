'use client'

import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { markdownSchema } from 'sanity-plugin-markdown'

import { schema } from './sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './sanity/env'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  structure, // this is the correct way to inject custom structure in modern Sanity
  plugins: [
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema()
  ],
})

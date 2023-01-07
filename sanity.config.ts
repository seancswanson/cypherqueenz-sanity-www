import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Cypher Queenz WWW',

  projectId: 'k34rqpdo',
  dataset: 'production_www',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone',

  projectId: '7g5wswdi',
  dataset: 'deliveroo',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

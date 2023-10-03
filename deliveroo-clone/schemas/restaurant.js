import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
        }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

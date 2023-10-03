import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dishes',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [
        {
            type: 'reference',
            name: 'Restaurant',
            to: [{type: 'restaurant'}]
        }
      ]
    }),

    defineField({
        name: "image",
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true
        }
    })
  ],
})

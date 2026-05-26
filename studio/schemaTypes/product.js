export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naam',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'price',
      title: 'Prijs',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Beschrijving',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: ['Stoel', 'Tafel', 'Kast', 'Bank', 'Bed', 'Overig'],
      },
    },
  ],
}
export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'title',
        slugify: (input: any) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author (e.g, CypherQueenz, Bgirl X)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'galleryImages',
      type: 'reference',
      title: 'Header Picture (square photos work best)',
      to: [{type: 'galleryImages'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Excerpt for Blog Post Preview',
      name: 'excerpt',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'visibleBoolean',
      type: 'boolean',
      title: 'Visible on Blog page',
    },
  ],
}

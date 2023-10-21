export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
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
        validation: (Rule: any) => Rule.required(),
      },
    },
    {
      name: 'dateStart',
      type: 'datetime',
      title: 'Date of Event Start',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dateEnd',
      type: 'datetime',
      title: 'Date of Event End',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'breakdownOfEvents',
      type: 'string',
      title: 'Time of Events (e.g. 4pm: 7-to-Smoke, 5pm: 1v1 Footwork Battle)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'entryFee',
      type: 'string',
      title: 'Event Entry Fee (e.g $25, Free)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'blogAndEventImages',
      type: 'reference',
      title: 'Header Picture',
      to: [{type: 'blogAndEventImages'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'visibleBoolean',
      type: 'boolean',
      title: 'Visible on Events page',
    },
  ],
}

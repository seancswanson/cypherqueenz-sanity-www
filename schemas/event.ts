export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input: any) =>
                    input
                        .toLowerCase()
                        //Remove spaces
                        .replace(/\s+/g, "-")
                        //Remove special characters
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
                validation: (Rule: any) => Rule.required(),
            }
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date of Event (e.g. Sunday January 22, 2023)',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'time',
            type: 'string',
            title: 'Time of Event (e.g. 4-7pm)',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'entryFee',
            type: 'string',
            title: 'Event Entry Fee (e.g $25, Free)',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'blogAndEventImages',
            type: 'reference',
            title: 'Header Picture',
            to: [{ type: 'blogAndEventImages' }],
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'visibleBoolean',
            type: 'boolean',
            title: 'Visible on Events page'
        }
    ]
}
export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'galleryImages',
            type: 'reference',
            title: 'Header Picture',
            to: [{ type: 'galleryImages' }]
        },
        {
            name: 'location',
            type: 'string',
            title: 'Location',
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'visibleBoolean',
            type: 'boolean',
            title: 'Visible on Events page'
        }
    ]
}
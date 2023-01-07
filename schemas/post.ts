export default {
    name: 'post',
    type: 'document',
    title: 'Blog Post',
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
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'visibleBoolean',
            type: 'boolean',
            title: 'Visible on Blog page'
        }
    ]
}
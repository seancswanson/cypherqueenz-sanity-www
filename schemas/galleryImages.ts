export default {
    name: 'galleryImages',
    type: 'document',
    title: 'Gallery Images',
    fields: [
        {
            name: 'imageFile',
            type: 'image',
            title: 'image File'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'altTitle',
            type: 'string',
            title: 'Alt Title for Accessibility'
        },
        {
            name: 'galleryBoolean',
            type: 'boolean',
            title: 'Publish to Gallery'
        }
    ]
}
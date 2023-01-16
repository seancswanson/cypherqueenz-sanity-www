export default {
    name: 'blogAndEventImages',
    type: 'document',
    title: 'Blog and Event Images',
    fields: [
        {
            name: 'imageFile',
            type: 'image',
            title: 'image File',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption (i.e. description or photo credits)',
        },
        {
            name: 'altTitle',
            type: 'string',
            title: 'Alt Title for Accessibility (learn more here: shorturl.at/dhR04)',
            validation: (Rule: any) => Rule.required()
        }
    ]
}
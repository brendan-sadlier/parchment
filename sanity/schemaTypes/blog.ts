export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    
    {
      name: 'title',
      type: 'string',
      title: 'Title of Blog Article',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of Blog Article',
      options: {
        source: 'title',
        maxLength: 96
      }
    },

    {
      name: 'categories',
      type: 'array',
      title: "Categories",
      of: [
        {
          type: 'string'
        }
      ]
    },

    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image of Blog Article',
    },

    {
      name: 'smallDescription',
      type: "text",
      title: 'Small Description of Blog Article',
    },

    {
      name: 'content',
      type: 'array',
      title: 'Content of Blog Article',
      of: [
        {
          type: 'block'
        },
      ]
    }
    
  ]
}
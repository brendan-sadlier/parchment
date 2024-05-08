export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    
    {
      name: 'title',
      type: 'string',
      title: 'Title of Project',
    },

    {
      name: 'repository',
      type: 'url',
      title: 'Repository of Project',
    },

    {
      name: 'languages',
      type: 'array',
      title: "Languages",
      of: [
        {
          type: 'string'
        }
      ]
    },

    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image of Project',
    },

    {
      name: 'smallDescription',
      type: "text",
      title: 'Small Description of Project',
    }
  ]
}
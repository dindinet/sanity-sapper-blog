export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6121df7fb19253297451f6',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-61r6aac5',
                  apiId: '8d100843-f39b-4b05-bcad-508a11a9def9'
                },
                {
                  buildHookId: '5d6121df64c0b82bf7de3571',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-mqo77p9t',
                  apiId: 'c20fb1ed-1169-4714-ae5d-6d5e6b6701db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dindinet/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-mqo77p9t.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

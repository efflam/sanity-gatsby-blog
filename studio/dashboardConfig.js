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
                  buildHookId: '5d7b7cd4deb22d5776ecc4e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-of5s7m8r',
                  apiId: '88f85c66-d84f-4d63-b21a-0b0f625f9704'
                },
                {
                  buildHookId: '5d7b7cd4f54fdb7a96748bfa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-65z6ru7z',
                  apiId: '28d96271-72c7-457a-a975-41c5deda2d7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/efflam/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-65z6ru7z.netlify.com', category: 'apps'}
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

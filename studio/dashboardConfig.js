export default {
  widgets: [
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
                  buildHookId: '602412cb2ce09200f86cced6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-22y5ot4w',
                  apiId: '90533835-7475-40fe-bc1b-82629ace1b35'
                },
                {
                  buildHookId: '602412cc39dd2301496bae92',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-c9h9gt2v',
                  apiId: 'e9e19aa6-3b83-43cc-bc58-4713184e511b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/git-col/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-c9h9gt2v.netlify.app', category: 'apps'}
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

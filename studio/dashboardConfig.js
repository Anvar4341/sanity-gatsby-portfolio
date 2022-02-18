export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620f952ecf78e421dd964ebb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1u31gpm9',
                  apiId: '436c3e02-bf92-41c9-8694-f6d551ee85a2'
                },
                {
                  buildHookId: '620f952eda30621f650a39e3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vpsn4ers',
                  apiId: 'a01de1eb-89d4-4f46-9621-67b493804b57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AnvarAbdurashidov7/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vpsn4ers.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

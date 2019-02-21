const routes = [
  {
    name: 'Geographic',
    children: [
      {
        name: 'Countries',
        path: '/get-countries'
      },
      {
        name: 'States',
        path: '/get-states'
      },
      {
        name: 'Cities',
        path: '/get-cities'
      }
    ]
  }
]

export default routes

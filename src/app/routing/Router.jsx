import { matchPath, useRoute } from '../../shared/hooks/useRoute'

const Router = (props) => {
  const { routes } = props
  const path = useRoute()

  for (const route in routes) {
    const params = matchPath(path, route)
    if (params) {
      const Page = routes[route]
      return <Page params={params} />
    }
  }
  const NotFound = routes['*']
  return <NotFound />
}
export default Router
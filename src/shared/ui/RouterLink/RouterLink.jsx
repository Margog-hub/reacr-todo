import { BASE_URL } from '@/shared/constants'
const RouterLink = (props) => {
  const { to, children, ...rest } = props
  const path = to.startsWith('/') ? to.slice(1) : to
  const handleClick = (e) => {
    e.preventDefault()
    window.history.pushState({}, '', `${BASE_URL}${path}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return (
    <div>
      <a href={`${BASE_URL}${path}`} onClick={handleClick} {...rest}>
        {children}
      </a>
    </div>
  )
}

export default RouterLink
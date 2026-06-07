import { BASE_URL } from "@/shared/constants"

const RouterLink = (props) => {
  const { to, children, ...rest } = props
  const handleClick = (e) => {
    e.preventDefault()
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
  return (
    <div>
      <a href={`${BASE_URL}${to}`} onClick={handleClick} {...rest}>
        {children}
      </a>
    </div>
  )
}

export default RouterLink
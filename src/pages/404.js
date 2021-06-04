import { navigate } from '@reach/router'
import { useEffect } from 'react'

const NotFoundPage = () => {
  useEffect(() => {
    navigate('/')
  }, [])

  return null
}

export default NotFoundPage

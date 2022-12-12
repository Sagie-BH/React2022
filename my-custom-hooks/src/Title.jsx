import React from 'react'
import { useEffect } from 'react'
import useCounter from './useCounter'
import useDocumentTitle from './useDocumentTitle'

const Title = () => {

    useDocumentTitle(' Welcome')

    useEffect(() => {

    },[])

  return (
    <div>Title</div>
  )
}

export default Title
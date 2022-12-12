import { useEffect } from 'react'

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = 'Title: ' + title
    },[title])
}

export default useDocumentTitle
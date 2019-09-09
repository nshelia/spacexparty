import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { StyledPopupBox, StyledBoxOverlay } from 'shared/styled/Box'

export default function Popup({ url, close }) {
  const id = url.replace('https://youtu.be/', "")

  const handleEspace = (e) => {
    if (e.keyCode === 27) {
      close()
    }

    return
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEspace)

    return () => window.removeEventListener('keydown', handleEspace)

  }, [])

  return (
    createPortal(
      <>
        <StyledPopupBox>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          />
        </StyledPopupBox>
        <StyledBoxOverlay onClick={close} />
      </>

      , document.body
    )
  )
}
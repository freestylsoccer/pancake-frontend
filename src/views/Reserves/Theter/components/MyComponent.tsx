import React from 'react'
import { Button } from '@pancakeswap/uikit'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import elements from './elements'

export default function MyComponent() {
  const { openLightbox } = useLightbox()
  return (
    <div className="col-lg-5 px-0">
      <Button onClick={() => openLightbox()}>Lorem ipsum</Button>
      <SRLWrapper elements={elements} />
    </div>
  )
}
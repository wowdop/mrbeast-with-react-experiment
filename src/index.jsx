import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './component'

const here = document.querySelector('#here')

const root = createRoot(here)

root.render(<App />)

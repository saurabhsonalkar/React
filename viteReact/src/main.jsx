import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'


function MyApp()
{
  return(
    <>
    <h1>Custom App | chai</h1>
    </>
  )
}

/*
const ReactElement={
  type:'a',
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  children:"Click me to visit google"
}
*/

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement= React.createElement(
  'a',
  {href: "https://google.com", target: "blank"},
  "click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
    // anotherElement
    reactElement
    // <App/>
)

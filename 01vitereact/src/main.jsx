import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}


const anotherElement = (
  <a href= "https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
//createElement(
  'a',
  {
    href: 'https://google.com',
    target:'_blank'
  },
  'Click me to visit Google'

)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <MyApp />
    reactElement
    // anotherElement
  // </StrictMode>,
)
 
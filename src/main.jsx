import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ace from './Ace'

// Check URL keyword
const route = window.location.hash.replace("#/", "");

let PageToRender;
if (route === "web2") {
  PageToRender = Ace;
} else {
  PageToRender = App; // default web1
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageToRender />
  </StrictMode>,
)

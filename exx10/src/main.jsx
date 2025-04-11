import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Counter from './Counter.jsx'
import BookList from './BookList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    {/* <BookList /> */}
  </StrictMode>,
)

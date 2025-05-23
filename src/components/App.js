import React, { useEffect, useState } from 'react'
import MarkdownEditor from './MarkdownEditor'
import "../styles/App.css"

const App = () => {
  return (
    <div className='app'>
      <MarkdownEditor />
    </div>
  )
}

export default App
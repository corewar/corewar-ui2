import React from 'react'
import Header from './header'
import Body from './body'
import Tab from './tab'
import TabRow from './tabrow'
import FileManager from './file-manager'
import './global/tailwind.css'

import 'typeface-inter'

function App() {
  return (
    <div className="App bg-gray-900 w-full min-h-screen flex flex-col p-2">
      <Header></Header>
      <TabRow>
        <Tab active>Editor</Tab>
        <Tab>Player</Tab>
      </TabRow>
      <Body>
        <FileManager></FileManager>
      </Body>
    </div>
  )
}

export default App

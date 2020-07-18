import React from 'react'
import Header from './app-chrome/header'
import Body from './app-chrome/body'
import Tab from './app-chrome/tab'
import TabRow from './app-chrome/tabrow'
import FileManager from './features/files/file-manager'
import Wrapper from './features/simulator/wrapper'
import './global/tailwind.css'

import 'typeface-inter'
import 'typeface-anonymous-pro'

function App() {
  return (
    <div className="App bg-gray-900 w-full min-h-screen flex flex-col p-2 font-body text-gray-100">
      <Header></Header>
      <TabRow>
        <Tab active>Editor</Tab>
        <Tab>Player</Tab>
      </TabRow>
      <Body>
        <FileManager></FileManager>
        <Wrapper></Wrapper>
      </Body>
    </div>
  )
}

export default App

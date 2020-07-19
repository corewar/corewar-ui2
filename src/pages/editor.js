import React from 'react'
import FileManager from '../features/files/file-manager'
import CoreInspector from '../features/simulator/core-inspector'
import Simulator from '../features/simulator/simulator'

const Editor = () => (
  <>
    <FileManager></FileManager>
    <section className="w-3/5 flex flex-row">
      <CoreInspector></CoreInspector>
      <Simulator></Simulator>
    </section>
  </>
)

export default Editor

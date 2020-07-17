import React from 'react'
import FileButton from './file-button'

const FileManager = () => (
  <section className="w-1/3 h-full flex flex-row">
    <FileButton>New</FileButton>
    <FileButton>Load</FileButton>
  </section>
)

export default FileManager

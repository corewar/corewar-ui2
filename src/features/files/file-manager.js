import React from 'react'
import FileButton from './file-button'
import FileSelector from './file-selector'
import CodeEditor from './code-editor'

const FileManager = () => (
  <section className="w-2/5 m-2">
    <div className="w-full">
      <FileButton>New</FileButton>
      <FileButton>Load</FileButton>
    </div>
    <section className="flex flex-row mt-4">
      <FileSelector></FileSelector>
      <CodeEditor></CodeEditor>
    </section>
  </section>
)

export default FileManager

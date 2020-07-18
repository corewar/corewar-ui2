import React from 'react'

const files = [
  { name: 'Warrior 1', icon: 'ico', active: true },
  { name: 'Warrior 2', icon: 'ico', active: false }
]

const File = ({ file }) => (
  <li
    className={`h-12 flex flex-row items-center text-gray-100 rounded-l-full text-xs px-2 ${
      file.active && 'bg-gray-700 '
    }`}
  >
    <div className="w-8 h-8">{file.icon}</div>
    <span className="flex-1">{file.name}</span>
    <input type="checkbox"></input>
  </li>
)

const FileSelector = () => (
  <ul className="w-64">
    {files.map((f) => (
      <File file={f}></File>
    ))}
  </ul>
)

export default FileSelector

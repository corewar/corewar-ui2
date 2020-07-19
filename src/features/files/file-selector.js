import React from 'react'

const files = [
  {
    name: 'Warrior 1',
    icon: <img src="https://placekitten.com/32/32" alt="kitty" className="rounded-full" />,
    active: true
  },
  {
    name: 'Warrior 2',
    icon: <img src="https://placekitten.com/32/32" alt="kitty" className="rounded-full" />,
    active: false
  }
]

const File = ({ file }) => (
  <li
    className={`h-12 flex flex-row items-center text-gray-100 rounded-l-full text-sm px-2 ${
      file.active && 'bg-gray-700 '
    }`}
  >
    <div className="w-8 h-8 mr-2">{file.icon}</div>
    <span className="flex-1">{file.name}</span>
    <input type="checkbox" className="h-4 w-4 border border-gray-700"></input>
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

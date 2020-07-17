import React from 'react'

const Tab = ({ children, active }) => {
  const activeClasses = 'bg-gray-800'
  return (
    <button
      className={`w-32 h-10 border border-b-0 border-gray-700 rounded-lg rounded-b-none text-xs font-semibold text-gray-100 ${
        active && activeClasses
      }`}
    >
      {children}
    </button>
  )
}

export default Tab

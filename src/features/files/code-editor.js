import React from 'react'

const CodeEditor = () => (
  <section className="flex w-full p-2 rounded-lg rounded-tl-none bg-gray-700 text-gray-100">
    <textarea
      className="w-full h-full bg-transparent font-code resize-none overflow-auto whitespace-pre-wrap mx-4"
      auto-complete="off"
      auto-correct="off"
      auto-capitalize="off"
      spellCheck="false"
      defaultValue={`;name Transposition Stone 
step equ 1185; 
mod 5 inc spl #-step, 
<step stone mov >step,
1-step sub inc, 
stone djn.f stone, 
<5555`}
    ></textarea>
  </section>
)

export default CodeEditor

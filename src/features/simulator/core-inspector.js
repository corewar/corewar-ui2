import React from 'react'

const data = [
  {
    address: 386,
    instruction: 'MOV.I',
    aOperand: '>1185',
    bOperand: '$-1184'
  },
  {
    address: 387,
    instruction: 'MOV.I',
    aOperand: '>1186',
    bOperand: '$-1185'
  }
]

const MemoryAddress = ({ command }) => (
  <tr className="font-code h-8">
    <td>{command.address}</td>
    <td>{command.instruction}</td>
    <td>{command.aOperand}</td>
    <td>{command.bOperand}</td>
  </tr>
)

const CoreInspector = () => (
  <section className="mt-40 flex-1 p-8">
    <table className="text-sm w-full text-right">
      <thead className="font-semibold h-12">
        <tr>
          <td>Address</td>
          <td>Instruction</td>
          <td>A Operand</td>
          <td>B Operand</td>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <MemoryAddress command={d} />
        ))}
      </tbody>
    </table>
  </section>
)

export default CoreInspector

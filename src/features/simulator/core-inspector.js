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
  <div className="h-core flex">
    <table className="w-full text-sm text-right table-fixed">
      <thead className="font-semibold h-12">
        <tr>
          <td className="w-16">Address</td>
          <td className="w-20">Instruction</td>
          <td className="w-24">A Operand</td>
          <td className="w-24">B Operand</td>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => (
          <MemoryAddress command={d} key={d.address} />
        ))}
      </tbody>
    </table>
  </div>
)

export default CoreInspector

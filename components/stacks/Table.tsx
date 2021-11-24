import React from "react"
import { Table } from "reactstrap"
import { Stack } from "../../models/Stack"

type Props = {
  stacks: Stack[]
}

const StackTable: React.FC<Props> = (props) => {
  const {stacks} = props
  return(
    <Table>
      <thead>
       <tr>
         <th>name</th>
         <th>url</th>
       </tr>
      </thead>
      <tbody>
        {stacks.map((stack: Stack) => {
          return(
            <tr>
              <td>{stack.name}</td>
              <td>{`${process.env.domainName}/questack/stacks/${stack.id}`}</td>
            </tr>

          )
        })}
      </tbody>
    </Table>
  )
}

export default StackTable
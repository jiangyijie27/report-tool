import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import Table from "./mp/Table"
import Column from "./mp/Column"

// 这里引入你的数据
import data from "./data"

const Document = ({ dataSource }) => (
  <Artboard
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 1136,
      padding: 100
    }}
  >
    <Table 
        dataSource={dataSource}
    >
        {data.columns().map((column, i) => {
          return <Column
            key={i}
            title={column.title}
            dataIndex={column.dataIndex}
            width={column.width ? column.width : null}
            type={column.type ? column.type : null}
            align={column.align ? column.align : null}
        />
        })}
    </Table>
  </Artboard>
)

Document.propTypes = {
  dataSource: PropTypes.array
}

export default (context) => {
  render(<Document dataSource={data.rows()} />, context.document.currentPage())
}

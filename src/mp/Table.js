import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
const dataInfo = []
const widths = []
var totalWidth = 0

const Table = ({ dataSource, children }) => {
  children.map((child, i) => {
    if(child.props.width) {
      widths.push(child.props.width)
    }
  })
  widths.forEach((o) => {
    totalWidth += o
  })
  return (
    <View
      name="Table"
      style={{
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: "#e4e6eb",
        minWidth: 925
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f4f6f9',
          borderBottomWidth: 1,
          borderBottomColor: "#e4e6eb"
        }}
      >

        {children.map((child, i) => {
            const columnInfo = {
                index: child.props.dataIndex,
                align: child.props.align,
                type: child.props.type,
                width: child.props.width,
            }
            dataInfo.push(columnInfo)
            return <Text 
              style={{
                padding: 12, 
                paddingLeft: i === 0 ? 20 : 12,
                paddingRight: i === children.length - 1 ? 20 : 12,
                lineHeight: 20, 
                width: child.props.width ? child.props.width : (927 - totalWidth)/(children.length - widths.length) ,
                textAlign: child.props.align
              }} 
              key={i}
            >{child.props.title}</Text>
          })
        }
      </View>
      <View
        style={{
          backgroundColor: '#fff'
        }}
      >
        {dataSource.map((row, i) => {
          return <View 
            key={i}
            style={{
              flexDirection: 'row',
              minWidth: 927,
              borderBottomWidth: 1,
              borderBottomColor: "#e4e6eb",
          }}
          >
            {dataInfo.map((info, index) => {
              return <Text 
              key={index}
              style={{
                padding: 12,
                paddingLeft: info.index === dataInfo[0].index ? 20 : 12, 
                paddingRight: info.index === dataInfo[dataInfo.length -1].index ? 20 : 12, 
                lineHeight: 20, 
                width: info.width ? info.width: (927 - totalWidth)/(children.length - widths.length),
                textAlign: info.align,
                color: info.type === "number" ? "#65676e": "#24262e"
              }} 
            >{row[info.index]}</Text>
            })}
          </View>
        })}
      </View>
    </View>
  )
}

Table.propTypes = {
  dataSource: PropTypes.array
}

module.exports = Table
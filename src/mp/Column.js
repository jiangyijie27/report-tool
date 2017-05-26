import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'

const Column = ({ title, dataIndex }) => (
  <View
    name="Column"
  >
  </View>
)

Column.propTypes = {
  title: PropTypes.string,
  dataIndex: PropTypes.string,
  align: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number
}

module.exports = Column
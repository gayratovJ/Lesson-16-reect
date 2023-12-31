import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React from 'react'
import PropTypes from "prop-types"
const reducer = {

};

export const Store = configureStore( { reducer } )

const StoreProvider = ( { children } ) => {
  return (
    <Provider store={Store}>{children}</Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export default StoreProvider
import React from 'react'
import styles from './styles.css'

const Tree = props => (
  <React.Fragment>
    <style>{styles}</style>
    <div className="lds-Tree">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </React.Fragment>
)

export default Tree

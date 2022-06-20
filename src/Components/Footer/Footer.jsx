import React from 'react'
import {BiCopyright} from 'react-icons/bi'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div>Movie App</div>
      <div><BiCopyright/>2022,Movie,Inc. or it's affiliates</div>
    </div>
  )
}

export default Footer
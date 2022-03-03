import React from 'react'
import Nav from '../components/Nav/Nav';
import { NavActive } from '../types/props';

const IndexPage = () => {
  return (
    <>
        <Nav active={NavActive.index}/>
        <div>IndexPage</div>
    </>
  )
}

export default IndexPage
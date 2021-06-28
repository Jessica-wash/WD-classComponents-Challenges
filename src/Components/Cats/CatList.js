import React, { Component } from 'react';
import CatIndex from './CatIndex'

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cat) => {return < Cat passingCat = {cat} />
      })}
      </div >
    )
  }
}

const Cat = (props) => {
  return(
    <div>
      <h3 key={CatIndex.id}> {props.passingCat} </h3>
    </div>
  )
}



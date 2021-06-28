// import React, { Component } from 'react';
// import { Input } from 'reactstrap';

// export default class SearchIndex extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
//       searchedThings: "",
//     };
//     // this.addThings = this.addThings.bind(this);
//   }

//   findThings(event) {
//     event.preventDefault();
//     this.setState({
//       things: [...this.state.things, this.state.searchedThings],
//     })
//   }

//   changeHandler(event) {
//     this.setState({ searchedThings: event.target });
//   }

//   render() {
//     return (
//       <div className='main'>
//         <div className='mainDiv'>
//           <form onSubmit={this.searchedThings}>
//             <Input placeholder='Search Here' type='text' /* value={this.state.searchedThings} onChange={(event) => this.changeHandler(event)}*/ />
//             <br />
//             <button type='submit'>Find Things</button>
//           </form>
//         </div>
//         <br />
//         <div className='results'>
//           <h3>Results:</h3>

//           <SearchFunction/>
//         </div>
//       </div>
//     );


//   }

// }


// class SearchFunction extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }

// }

import React, { Component } from 'react';
import { Input } from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }

  render() {
    return (
      <div>
        <Input placeholder='Search Here' />
        <h3>Results:</h3>
      </div>
    )
  }

}

// function searchFunction() {
// }




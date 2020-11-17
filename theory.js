import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WhoAmI extends Component {
    constructor(props) {
      super(props);
      this.state = {
        years: 26
      }
      // this.nextYear = () => {
      //   this.setState(state => ({
      //     years: ++state.years,
      //   }))
      // }
  
      // жестко привязываем метод nextYear к объекту каждого события.
      // this.nextYear=this.nextYear.bind(this) 
    }
    nextYear = () => {
      this.setState(state => ({
        years: ++state.years,
      }))
    }
    // nextYear() {
    //   this.setState((state) => ({
    //     years: ++state.years
    //   }))
    // }
    render() {
      const { name, surname, link } = this.props;
      const { years } = this.state;
      return (
        <>
          <button onClick={this.nextYear}>++</button>
          <h1>My name is {name} , surname - {surname}, years: {years}</h1>
          <a href={link}>My profile</a>
        </>
      )
    }
  }
  
  


// function WhoAmI({ name, surname, link }) {
//   return (
//     <>
//       <h1>My name is {name} , surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }
  
  const All = () => {
    return (
      <>
        <WhoAmI name="krilo" surname="furs" link="https://vk.com/kirill_frs" />
        <WhoAmI name="Ivan" surname="petrichenko" link="https://vk.com/kirill_frs" />
        <WhoAmI name="igor" surname="link" link="https://vk.com/kirill_frs" />
      </>
    )
  }

  ReactDOM.render(<All />, document.getElementById('root'));


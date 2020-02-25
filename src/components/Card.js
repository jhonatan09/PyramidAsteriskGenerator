import React from 'react'
import ValueAsterisk from './inputValue'


class Card extends React.Component{
  constructor(){
    super()
    this.state= {
      valorInput: 0,
      btnState: false,
      valorReal: 0,
      img: require("../logo.png")
    }
  }

  handleChange = (event) => {
    this.setState({
        valorInput: event.target.value
      })        
  }

  handleClick = (event)=> {
    
    this.setState({
        btnState: event,
        valorReal: this.state.valorInput
    })
  }

  

  render(){
    return (
      <div className="container">
          <div className="logo">
                <img src={this.state.img} />
          </div>
        <div className="card">
            <h1 className="asterisk-h1">Asterisk Pyramid</h1>
            <div className="division-input">
                <input 
                    onChange={(event) => this.handleChange(event)}
                    placeholder={'Asterisk Amount'}
                    type="number"
                /> 
                <label>
                    Asterisk Amount
                </label>
            </div>
            <div className="division-btn">
                <button 
                    className="btn"
                    type="submit"
                    onClick={() => this.handleClick(true)} 
                >
                    Generate
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
                </button>
            </div>
        </div>
        
        
        <div className="card-result">
            <span className="result-title">Result</span>
            {this.state.btnState ? 
            <ValueAsterisk valorInput={this.state.valorReal}/> 
            : ''}
        </div>
        
      </div>
    )
  }
}

export default Card
import React from 'react'

class Escada extends React.Component {

    render () {
        var degrausEscada = [];
    for (let i = 1; i <= this.props.valorInput; i++) {
      var degraus = "*".repeat(i);
      degrausEscada.push(degraus);
    }
        return (
            <ul className="list-asterisk">
                {degrausEscada.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        );
    }
  }

  export default Escada;
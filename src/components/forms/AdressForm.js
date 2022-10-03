//Formulär för att spara adresser.
import React from 'react';

class AdressForm extends React.Component {
    state = {
        firstName: '',
        lastName:'',
        adress:''

    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Skall spara: '+this.state.adress + ' ' + this.state.firstName + ' ' + this.state.lastName)
        //Hantera persistent lagring av data i staten... Gärna ett API anrop som hanterar det mot DB..
      };

    render() {
      return (
        <div>
            <h2>Hi, please add your name and adress to be added! (enbart logg till consoll nu)</h2>
            <form onSubmit={this.handleSubmit}>
            <span className="formtext"></span>
            <input 
                type="text" 
                value={this.state.firstName}
                onChange={event => this.setState({ firstName: event.target.value })}
                placeholder="Enter firstName" 
                required 
            />
            <input 
                type="text" 
                value={this.state.lastName}
                onChange={event => this.setState({ lastName: event.target.value })}
                placeholder="Enter lastName" 
                required 
            />
            <input 
                type="text" 
                value={this.state.adress}
                onChange={event => this.setState({ adress: event.target.value })}
                placeholder="Enter adress" 
                required 
            />
            <button>Save!</button>
            </form>
        </div>
      );
    }
  }

  export default AdressForm;
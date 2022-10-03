//Formulär för att spara adresser.
import React from 'react';

class AdressForm extends React.Component {
    state = {
        adressNames: [
            {
            firstName: 'Adam',
            lastName:'Efternamnet',
            adress:'gatan 1'
            },
            {
            firstName: 'Pelle',
            lastName:'Efternamnet2',
            adress:'Gatan 2'
            }
        ],
        searchInput: ''

    }


    render() {
        let  listFiltered;
        if(this.state.searchInput != ''){
            listFiltered = this.state.adressNames.filter(adress => adress.firstName.includes(this.state.searchInput))
        }else{
            listFiltered = this.state.adressNames;
        }
        console.log(listFiltered)

      return (
        <div>
            <p>Personer i detta register (inte persistent ännu). Filtrer är under konstruktion men fungerar någorlunda!</p>
            <input 
                type="text" 
                value={this.state.searchInput}
                onChange={event => this.setState({ searchInput: event.target.value })}
                placeholder="Filtrera adressboken (förnamn)" 
                 
            />

                {listFiltered.map(adress =>{
                    return  <p>{adress.firstName + ' ' +adress.lastName + ' ' +adress.adress }  </p>
                })}
        </div>
      );
    }
  }

  export default AdressForm;
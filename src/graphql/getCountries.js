import gql from 'graphql-tag';

const GET_COUNTRIES = gql `

query continents {
  countries {
    code 
    name
    continent {name}
    languages {code name native}
     phone
    capital
    currency
    emoji
    
  }
}
`




export default GET_COUNTRIES
import React, {Component} from 'react';
import './App.css';

class  App extends Component {


    constructor(props)
    {
        super(props);
        this.state = {
            //an array of data that we will fetch from the API
            items: [],
            isLoaded: false,//boolean
        }
    }
    componentDidMount() {//runs off the render method and also lets us update the lender method
        //we are going to add our actual API
        //Fetch method
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        //we are getting the results from the api
        // takes the first argument of the API
        //We are gonna use a dummy data for testing
            .then(json => {
                //we need to setstate
                this.setState({
                    isLoaded: true,//because we have already loaded the data from the api
                    items: json,
                })

            });
    }

    render() {
      var{ isLoaded, items} = this.state;


      if(!isLoaded){
          return  <div> is Loading</div>
      }
      else {

          return (
              <div className="App" >
                  <ul>
                      {items.map(item => (
                          <li key={item.id}>
                             Name: {item.name} | Email: {item.email}

                          </li>

                      ))};
                  </ul>


              </div>
          );
      }
  }

}

export default App;

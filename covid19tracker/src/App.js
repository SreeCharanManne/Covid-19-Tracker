import React from 'react';
import NavbarComponent from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import image from './images/images.jfif';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
        <BrowserRouter>
        <div>
        <NavbarComponent />
        </div>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
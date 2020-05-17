import React, { Fragment } from 'react';

import Card from '../components/Card/Card';

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=1d03257e';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: '',
    };
  }

  async componentDidMount() {
    // const res = await fetch('../../assets/data.json');
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();
    this.setState({
      data: resJSON.Search,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('enviando...');
  }

  render() {
    return (
      <Fragment>
        <div className='row'>
          <div className='col-md-4 offset-md-4 p-4'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' className='form-control' placeholder='Search' onChange={(e) => console.log(e.target.value)} autoFocus />
            </form>
          </div>
        </div>
        <div className='row'>
          {this.state.data.map((movie) => {
            return <Card movie={movie} />;
          })}
        </div>
      </Fragment>
    );
  }
}
export default List;

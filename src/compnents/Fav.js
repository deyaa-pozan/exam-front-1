import React, { Component } from 'react';
import Crudcard from './Crudcard';
import axios from 'axios';
import Formm from './Form';
export class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cruddata: [],
      showcrud: false,
      Form: false,
      item: '',
    };
  }

  componentDidMount = async () => {
    let crudreq = await axios.get(`${process.env.REACT_APP_SEVER_URL}/crud`);
    console.log(crudreq.data);
    this.setState({
      cruddata: crudreq.data,
      showcrud: true,
    });
  };

  deletecrud = async (x) => {
    console.log(x);
    let id = x;
    let crudDlete = await axios.delete(
      `${process.env.REACT_APP_SEVER_URL}/crud/${id}`
    );
    let filt = this.state.cruddata.filter((e) => e.idDrink !== x);
    this.setState({
      cruddata: filt,
    });
  };

  handleupdate = async (event, y) => {
    event.preventDefault();
    console.log('this ahndeling submit');
    console.log(event.target.ssd.value);
    let idDrink = y.idDrink;
    let x = { strDrink: event.target.ssd.value };
    console.log(x);
    let requpdate = await axios.put(
      `${process.env.REACT_APP_SEVER_URL}/crud/${idDrink}`,
      x
    );
    console.log(requpdate);
    this.setState({
      Form: false,
    });
  };

  showform = async (x) => {
    console.log('this is working');

    this.setState({ Form: true, item: x });
  };
  render() {
    return (
      <>
        <div>
          {this.state.Form && (
            <>
              <Formm item={this.state.item} handleupdate={this.handleupdate} />
            </>
          )}
        </div>

        <div>
          {this.state.showcrud && (
            <>
              <Crudcard
                cruddata={this.state.cruddata}
                deletecrud={this.deletecrud}
                showform={this.showform}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

export default Fav;

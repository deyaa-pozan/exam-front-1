import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datacard from './Datacard';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from '../User';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: [],
      showapi: false,
    };
  }

  componentDidMount = async () => {
    let apireq = await axios.get(`${process.env.REACT_APP_SEVER_URL}/data`);
    console.log(apireq.data);
    this.setState({
      apidata: apireq.data,
      showapi: true,
    });
  };

  handleshowapi = async (e) => {
    console.log(e);
    let savefav = await axios.post(
      `${process.env.REACT_APP_SEVER_URL}/crud`,
      e
    );
    console.log(savefav.data);
  };
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>
        {isAuthenticated && (
          <div>
            <Profile />
          </div>
        )}

        <div>
          {this.state.showapi && (
            <>
              <Datacard
                apidata={this.state.apidata}
                handleshowapi={this.handleshowapi}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

export default withAuth0(Home);

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Datacard extends Component {
  render() {
    return this.props.apidata.map((e) => {
      return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={e.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{e.strDrink}</Card.Title>
              <Card.Text>{e.idDrink}</Card.Text>
              <Button
                variant='primary'
                onClick={(x) => this.props.handleshowapi(e)}
              >
                Add to Fav
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default Datacard;

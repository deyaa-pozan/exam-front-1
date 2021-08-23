import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Crudcard extends Component {
  render() {
    return this.props.cruddata.map((e) => {
      return (
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={e.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{e.strDrink}</Card.Title>
              <Card.Text>{e.idDrink}</Card.Text>
              <Button
                variant='primary'
                onClick={(x) => this.props.deletecrud(e.idDrink)}
              >
                Delete
              </Button>
              <Button variant='primary' onClick={(y) => this.props.showform(e)}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }
}

export default Crudcard;

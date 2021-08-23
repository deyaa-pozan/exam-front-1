import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
export class Formm extends Component {
  render() {
    console.log('this is wrong');
    return (
      <div>
        <Form onSubmit={(e) => this.props.handleupdate(e, this.props.item)}>
          <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
            <Form.Label column sm='2'>
              {this.props.item.strDrink}
            </Form.Label>
            <Col sm='10'>
              <Form.Control
                plaintext
                readOnly
                defaultValue={this.props.item.strDrinkThumb}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formPlaintextPassword'
          >
            <Form.Label column sm='2'>
              {this.props.item.idDrink}
            </Form.Label>
            <Col sm='10'>
              <Form.Control name='ssd' placeholder='edit name' />
            </Col>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update the name
          </Button>
        </Form>
      </div>
    );
  }
}

export default Formm;

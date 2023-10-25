import React, {useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap";
import Button from 'react-bootstrap/Button';

const Header = () =>{
    return (
        <h1>テストです。</h1>
    )
}

function Greet() {
    return (
        <>
          <Header />
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </>
      );
  }

ReactDOM.render(
<Greet />,
document.getElementById("app")
)
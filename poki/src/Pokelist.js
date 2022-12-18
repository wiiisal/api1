import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Pokelist({pokemon}) {
  return (
      pokemon.map(p=> (
        <div key={p}> 
        <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body >
          <Card.Title>{p}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      ))
  )
}

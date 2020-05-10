import React from 'react'

interface Greeting {
  name: string
}

const Hello = (props: Greeting) => {
  const { name } = props;
  return (
  <div>Hello {name}!</div>
  )
}
export default Hello;
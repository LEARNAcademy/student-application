import React from 'react'
import { Accordion } from 'flowbite-react'

const AccordionComponent = (props) => {
    const {title, text} = props
  return (
  <Accordion alwaysOpen={true}>
    <Accordion.Panel>
      <Accordion.Title>
       {title}
      </Accordion.Title>
      <Accordion.Content>
        {text.map((paragraph, index) => {
            return(
                <p key={index}>{paragraph}</p>

            )
        })}
      </Accordion.Content>
    </Accordion.Panel>
    
    
  </Accordion>
  )
}

export { AccordionComponent }
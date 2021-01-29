import React from 'react';
import Accordion from '../../MUI/Accordions/CustomizedAccordion'

const CustomizedAccordion = (props) => (
    <Accordion heading={props.heading} panel={props.panel} description={props.description} />
)

export default CustomizedAccordion
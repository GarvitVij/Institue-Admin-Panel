import React from 'react';
import List from '@material-ui/core/List';
import MUIList from './List/List'
import PropTypes from 'prop-types';

const MUILists = (props) => {
    return(
        <div>
        {props.children}
            <List>
                {props.list.map(list => {
                    return (<MUIList key={list.label} name={list.label} icon={list.icon}/>)
                })}
            </List>
        </div>
    )
}

MUILists.propTypes = {
    children: PropTypes.element.isRequired,
    list: PropTypes.array
}


export default MUILists
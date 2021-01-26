import React from 'react';
import List from '@material-ui/core/List';
import MUIList from './List/List'

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

export default MUILists
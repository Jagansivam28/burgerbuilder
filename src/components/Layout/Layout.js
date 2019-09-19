import React from 'react';
import  Aux from '../../hoc/aux'
import  classes from '../Layout/layout.css'

const Layout = (props) => {
    // eslint-disable-next-line no-unused-expressions
    return(
    <Aux>
        <div>
            Toobar, SideDrawer , Backdrop,{props.name}
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    );
}

export default Layout;
import React from 'react'
import Aux from '../../HigherOrderComponent/Auxilary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import './Layout.css'

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout

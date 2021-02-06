import React from 'react'
import Aux from '../../HigherOrderComponent/auxilary'

const Layout = (props) => {
    return (
        <Aux>
            <div>
             Tool bar
            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout

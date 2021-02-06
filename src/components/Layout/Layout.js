import React from 'react'
import Aux from '../../HigherOrderComponent/Auxilary'

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

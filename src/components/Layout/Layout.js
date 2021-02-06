import React from 'react'
import Aux from '../../HigherOrderComponent/Auxilary'

const Layout = (props) => {
    return (
        <Aux>
            <div>

            </div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout

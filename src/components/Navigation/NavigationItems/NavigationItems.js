import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const NavigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" active>
                Burger Builder
            </NavigationItem>
            <NavigationItem link="/orders" active>
                Orders
            </NavigationItem>

        </ul>
    )
}

export default NavigationItems

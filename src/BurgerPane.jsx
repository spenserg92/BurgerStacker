import React, {Component} from 'react'

export default class BurgerPane extends Component {
    render(){
        console.log('the props in Burger Pane', this.props)
        return(
            <section className='pane'>
                <h3>Burger Stack</h3>
            </section>
        )
    }
}
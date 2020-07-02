import React from 'react'

class Toggler extends React.Component {
    state = {
        on: false
    }

toggle = () => {
    this.setState(prevState => {
        return {
            on: !prevState.on
        }
    })
}

render() {
    const {on} = this.state
    return (
        this.props.render(on, this.toggle)
    )
  }
}

export default Toggler
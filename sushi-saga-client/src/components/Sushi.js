import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  handleClick = () => {
    if (!this.state.eaten){
      const { spendMoney, sushi, eatSushi } = this.props
      this.setState({ eaten: true })
      spendMoney(sushi.price)
    }
  }

  render () {
    const { sushi } = this.props
    return (
      <div className='sushi'>
        <div className='plate'
          onClick={this.handleClick}>
          {
          this.state.eaten
              ? null
              : <img src={sushi.img_url} width='100%' />
          }
        </div>
        <h4 className='sushi-details'>
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi

import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi:[],
    page: 0,
    money: 500
  }

  componentDidMount () {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({sushis}))
  }

  getSushiToRender = () => {
    const getSushiToRender = this.state.sushis.slice(this.state.page*4, this.state.page*4 + 4)
    return getSushiToRender
  }

  getMoreSushi = () => {
    const newPage = this.state.page + 1
    this.setState({page: newPage})
  }

  spendMoney = (sushiPrice) => {
    const newMoney = this.state.money - sushiPrice
    if (newMoney >= 0) {
      this.setState({ money: newMoney })
      this.eatSushi()
    }
  }

  eatSushi = (sushi) => {
    this.setState({eatenSushi: [...this.state.eatenSushi, sushi]})
  }

  render() {
    const { sushis, eatenSushi, money } = this.state
    const { spendMoney, eatSushi } = this
    const sushiToRender = this.getSushiToRender();
    return (
      <div className="app">
        <SushiContainer sushis={sushiToRender} spendMoney={spendMoney} eatSushi={eatSushi} getMoreSushi={this.getMoreSushi} />
        <Table eatenSushi={eatenSushi} money={money} />
      </div>
    );
  }
}

export default App;
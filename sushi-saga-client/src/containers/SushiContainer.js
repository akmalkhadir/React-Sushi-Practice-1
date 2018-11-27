import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ sushis, spendMoney, eatSushi, getMoreSushi }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi key={sushi.id} spendMoney={spendMoney} eatSushi={eatSushi} sushi={sushi} />)
        }
        <MoreButton getMoreSushi={getMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
import React, { useState } from 'react'
import { Button } from '@pancakeswap/uikit'
import styled from 'styled-components/macro'

const Container = styled.div.attrs((props) => ({
  className: 'container',
}))`
  color: ${({ theme }) => theme.colors.text1};
`
type Props = {  
  setShowDepostit: (val: boolean) => void
  setShowInvestOverview : (val: boolean) => void
  showDeposit: boolean
  showInvestOverview: boolean
  balance: number
};

const Invest : React.FC<Props> = ({
  setShowDepostit,
  setShowInvestOverview,
  showDeposit,
  showInvestOverview,
  balance,
}) => {
  const [amount, setAmount] = useState<any>("")
  const handleChange = event => {
    const min = 0
    let { value } = event.target;
    value = Math.max(Number(min), Math.min(Number(balance), Number(value)));
    if (value === 0) {
      value = ""
    }
    setAmount(value);
  };
  return (
    <Container>
      <div className="row">
        <div className="col">
          <Button onClick={() => setShowDepostit(!showDeposit)}>
            back
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form className="basic-form">
            <div className="caption">
              <h6>How much would you like to deposit?</h6>
              <p>
                Please enter an amount you would like to deposit. The maximum amount you can deposit is shown below.
              </p>
            </div>
            <div className="basic-form-inner mb-3">
              <div className="amount-field-inner">
                <div className="row-amount-field">
                  <div className="row-title-inner">
                    <div className="row-title">Available to deposit</div>
                  </div>
                  <div className="row-content">
                    <div className="content-value">
                      <div className="content-value-line">
                        <p className="value">
                          {balance}
                          <span className="symbol">USDT</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amount-field">
                  <div className="token-icon">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzI2QTE3QiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy45MjIgMTcuMzgzdi0uMDAyYy0uMTEuMDA4LS42NzcuMDQyLTEuOTQyLjA0Mi0xLjAxIDAtMS43MjEtLjAzLTEuOTcxLS4wNDJ2LjAwM2MtMy44ODgtLjE3MS02Ljc5LS44NDgtNi43OS0xLjY1OCAwLS44MDkgMi45MDItMS40ODYgNi43OS0xLjY2djIuNjQ0Yy4yNTQuMDE4Ljk4Mi4wNjEgMS45ODguMDYxIDEuMjA3IDAgMS44MTItLjA1IDEuOTI1LS4wNnYtMi42NDNjMy44OC4xNzMgNi43NzUuODUgNi43NzUgMS42NTggMCAuODEtMi44OTUgMS40ODUtNi43NzUgMS42NTdtMC0zLjU5di0yLjM2Nmg1LjQxNFY3LjgxOUg4LjU5NXYzLjYwOGg1LjQxNHYyLjM2NWMtNC40LjIwMi03LjcwOSAxLjA3NC03LjcwOSAyLjExOCAwIDEuMDQ0IDMuMzA5IDEuOTE1IDcuNzA5IDIuMTE4djcuNTgyaDMuOTEzdi03LjU4NGM0LjM5My0uMjAyIDcuNjk0LTEuMDczIDcuNjk0LTIuMTE2IDAtMS4wNDMtMy4zMDEtMS45MTQtNy42OTQtMi4xMTciLz48L2c+PC9zdmc+"
                      width="30"
                      height="30"
                      alt=""
                    />
                  </div>
                  <div className="basic-field amount-field-input">
                    <input
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    value={amount}
                    onChange={handleChange}
                    className="amount-input"
                    min="0"
                    step="any"
                    required
                  />
                  </div>
                  <div className="amount-field-right-inner">
                    <button type="button" className="max-button" onClick={() => setAmount(balance)}>
                      Max
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-3">
              {amount !== undefined && amount > 0 ? (
                <Button
                  type="submit"
                  onClick={() => setShowInvestOverview(!showInvestOverview)}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => setShowInvestOverview(!showInvestOverview)}
                  disabled
                >
                  Continue
                </Button>
              )}              
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Invest
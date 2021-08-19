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
};

const Invest : React.FC<Props> = ({
  setShowDepostit,
  setShowInvestOverview,
  showDeposit,
  showInvestOverview
}) => {
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
                          $500
                          <span className="symbol">DAY</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amount-field">
                  <div className="token-icon">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjEuMTQyIiB5Mj0iLS4xMDUiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmOWE2MDYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYmNjNWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0idXJsKCNhKSIgZGF0YS1uYW1lPSJFbGxpcHNlIDEyNzEiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzkuODI1IDIwLjg3NWgtMi45NjdjLTEuNjMzLTQuNTMzLTYuMDI1LTcuNjQyLTExLjgxNy03LjY0MmgtOS41MjV2Ny42NDJoLTMuMzA4djIuNzQyaDMuMzA4djIuODc1aC0zLjMwOHYyLjc0MWgzLjMwOHY3LjU1aDkuNTI1YzUuNzI1IDAgMTAuMDgzLTMuMDgzIDExLjc1OC03LjU1aDMuMDI1di0yLjc0MmgtMi4zNThhMTIuNDMzIDEyLjQzMyAwIDAwLjA5Mi0xLjQ4M3YtLjA2N2MwLS40NS0uMDI1LS44OTItLjA2Ny0xLjMyNWgyLjM0MnYtMi43NDJ6bS0yMS42NDItNS4yaDYuODU4YzQuMjUgMCA3LjQwOCAyLjA5MiA4Ljg2NyA1LjE5MkgxOC4xODN6bTYuODU4IDE4LjY0MmgtNi44NTh2LTUuMDkyaDE1LjcwOGMtMS40NjYgMy4wNS00LjYxNiA1LjA5MS04Ljg1IDUuMDkxem05Ljc1OC05LjI1YTkuODU5IDkuODU5IDAgMDEtLjEgMS40MTdIMTguMTgzdi0yLjg3NWgxNi41MjVhMTAuODQgMTAuODQgMCAwMS4wOTIgMS4zOTJ6IiBkYXRhLW5hbWU9IlBhdGggNzUzNiIvPjwvc3ZnPg=="
                      width="30"
                      height="30"
                      alt=""
                    />
                  </div>
                  <div className="basic-field amount-field-input">
                    <input type="number" placeholder="Amount" />
                  </div>
                  <div className="amount-field-right-inner">
                    <button type="button" className="max-button">
                      Max
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-3">
              <Button
                type="submit"
                onClick={() => setShowInvestOverview(!showInvestOverview)}
              >
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Invest
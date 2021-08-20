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

const InvestOverview : React.FC<Props> = ({
  setShowDepostit,
  setShowInvestOverview,
  showDeposit,
  showInvestOverview
}) => {
  return (
    <Container>
        <div className="row">
          <div className="col">
            <Button onClick={() => setShowInvestOverview(!showInvestOverview)}>
              back
            </Button>
          </div>
        </div>
        <div className="confirmation-view">
          <div className="caption">
            <h6>Deposit overview</h6>
            <p>These are your transaction details. Make sure to check if this is correct before submitting.</p>
          </div>
          <div className="confirmation-view-content-inner">
            <div className="conformation-view-content">
              <div className="row-amount-field">
                <div className="row-title-inner">
                  <div className="row-title">Amount</div>
                </div>
                <div className="row-content">
                  <div className="content-value">
                    <div className="content-value-line">
                      <div className="token-icon">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjEuMTQyIiB5Mj0iLS4xMDUiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmOWE2MDYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYmNjNWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIgZmlsbD0idXJsKCNhKSIgZGF0YS1uYW1lPSJFbGxpcHNlIDEyNzEiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzkuODI1IDIwLjg3NWgtMi45NjdjLTEuNjMzLTQuNTMzLTYuMDI1LTcuNjQyLTExLjgxNy03LjY0MmgtOS41MjV2Ny42NDJoLTMuMzA4djIuNzQyaDMuMzA4djIuODc1aC0zLjMwOHYyLjc0MWgzLjMwOHY3LjU1aDkuNTI1YzUuNzI1IDAgMTAuMDgzLTMuMDgzIDExLjc1OC03LjU1aDMuMDI1di0yLjc0MmgtMi4zNThhMTIuNDMzIDEyLjQzMyAwIDAwLjA5Mi0xLjQ4M3YtLjA2N2MwLS40NS0uMDI1LS44OTItLjA2Ny0xLjMyNWgyLjM0MnYtMi43NDJ6bS0yMS42NDItNS4yaDYuODU4YzQuMjUgMCA3LjQwOCAyLjA5MiA4Ljg2NyA1LjE5MkgxOC4xODN6bTYuODU4IDE4LjY0MmgtNi44NTh2LTUuMDkyaDE1LjcwOGMtMS40NjYgMy4wNS00LjYxNiA1LjA5MS04Ljg1IDUuMDkxem05Ljc1OC05LjI1YTkuODU5IDkuODU5IDAgMDEtLjEgMS40MTdIMTguMTgzdi0yLjg3NWgxNi41MjVhMTAuODQgMTAuODQgMCAwMS4wOTIgMS4zOTJ6IiBkYXRhLW5hbWU9IlBhdGggNzUzNiIvPjwvc3ZnPg=="
                          width="16"
                          height="16"
                          alt=""
                        />
                      </div>
                      <p className="value">
                        $500
                        <span className="symbol">DAY</span>
                      </p>
                    </div>
                    <div className="content-value-subline">
                      <p className="content-subvalue">
                        <span className="usd-symbol">$</span>
                        200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="conformation-view-actions-inner">
            <div className="actions-wrapper">
              <div className="action-wrapper-buttons">
                <button type="button" className="actions-wrapper-button actions-wrapper-button-active" disabled>
                  <span>1</span>
                  <p>Deposit</p>
                </button>
                <button type="button" className="actions-wrapper-button" disabled>
                  <span>2</span>
                  <p>Finished</p>
                </button>
              </div>
            </div>
          </div>
          <form className="actions-execute mb-3">
            <div className="txtop-info">
              <div className="txtop-info-inner">
                <div className="txtop-info-left-inner">
                  <div className="txtop-info-title">1/2 Desposit</div>
                  <span>Please submit to deposit</span>
                </div>
                <div className="txtop-info-right-inner">
                  <div className="txtop-info-button-inner">
                    <button typeof="button" className="btn btn-primary" type="submit">
                      Depostit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
  )
}

export default InvestOverview
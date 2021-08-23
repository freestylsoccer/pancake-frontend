import React, { useState } from 'react'
import { Currency, currencyEquals, ETHER, TokenAmount, WETH } from '@pancakeswap/sdk'
import { Button } from '@pancakeswap/uikit'
import styled from 'styled-components/macro'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import { useGasPrice } from 'state/user/hooks'
import { useCurrency } from 'hooks/Tokens'
import { useMintState, useDerivedMintInfo, useMintActionHandlers } from 'state/mint/hooks'
import { getUSDT2Addres } from 'utils/addressHelpers'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { Field } from 'state/mint/actions'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { useTransactionAdder } from 'state/transactions/hooks'
import { LENDING_POOL_ADDRESS } from 'config/constants'
import CurrencyInputPanel from 'components/CurrencyInputPanel'

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
  amount: any
  setAmount: (val: any) => void
};

const Invest : React.FC<Props> = ({
  setShowDepostit,
  setShowInvestOverview,
  showDeposit,
  showInvestOverview,
  balance,
  amount,
  setAmount,
}) => {
  const handleChange = event => {
    const min = 0
    let { value } = event.target;
    value = Math.max(Number(min), Math.min(Number(balance), Number(value)));
    if (value === 0) {
      value = ""
    }
    setAmount(value)
  }

  const { account, chainId, library } = useActiveWeb3React()
  const { t } = useTranslation()
  const gasPrice = useGasPrice()
  console.log(account)
  console.log(library)
  console.log(gasPrice)
  const currencyB = useCurrency(getUSDT2Addres())
  console.log(currencyB)
  // mint state
  const { independentField, typedValue, otherTypedValue } = useMintState()
  const {
    dependentField,
    currencies,
    pair,
    pairState,
    currencyBalances,
    parsedAmounts,
    price,
    noLiquidity,
    liquidityMinted,
    poolTokenPercentage,
    error,
  } = useDerivedMintInfo(undefined, currencyB ?? undefined)
  console.log(independentField)
  console.log(typedValue)
  console.log(dependentField)
  const { onFieldAInput, onFieldBInput } = useMintActionHandlers(noLiquidity)

  const isValid = !error

  // modal and loading
  const [attemptingTxn, setAttemptingTxn] = useState<boolean>(false) // clicked confirm
  // get formatted amounts
  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }
  
  console.log(parsedAmounts)
  formattedAmounts[Field.CURRENCY_B] = amount.toString()
  console.log(formattedAmounts)
  // get the max amounts user can add
  const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmountSpend(currencyBalances[field]),
      }
    },
    {},
  )
  console.log(Field.CURRENCY_B)
  const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
    (accumulator, field) => {
      return {
        ...accumulator,
        [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0'),
      }
    },
    {},
  )
  console.log(maxAmounts)
  console.log(atMaxAmounts)

  // check whether the user has approved the router on the tokens
  const [approvalA, approveACallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_A], LENDING_POOL_ADDRESS)
  console.log(approvalA)
  console.log(parsedAmounts[Field.CURRENCY_A])
  const addTransaction = useTransactionAdder()
  console.log(ApprovalState.NOT_APPROVED)
  console.log(ApprovalState.PENDING)
  console.log(ApprovalState.APPROVED)
  
  return (
    <>
    { balance && balance > 0 ? (
      <>
      <Container>
        <div className="row">
          <div className="col">
            <Button onClick={() => {setShowDepostit(!showDeposit); setAmount("")}}>
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
                  <Button disabled>
                    Continue
                  </Button>
                )}              
              </div>
            </form>
          </div>
        </div>
      </Container>
      </>
      ) : balance <= 0 ? (
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
                  <h6>Your balance is zero</h6>
                  <p>
                    Your balance of USDT is 0. Transfer USDT to your wallet to be able to deposit
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
    ) : (
      <></>
    )}
    </>
  )
}

export default Invest
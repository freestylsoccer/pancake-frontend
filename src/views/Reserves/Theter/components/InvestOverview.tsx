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
  amount: any
  setAmount: (val: any) => void
};

const InvestOverview : React.FC<Props> = ({
  setShowDepostit,
  setShowInvestOverview,
  showDeposit,
  showInvestOverview,
  amount,
  setAmount,
}) => {
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
    <Container>
        <div className="row">
          <div className="col">
            <Button onClick={() => {setShowInvestOverview(!showInvestOverview); setAmount("")}}>
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
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzI2QTE3QiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy45MjIgMTcuMzgzdi0uMDAyYy0uMTEuMDA4LS42NzcuMDQyLTEuOTQyLjA0Mi0xLjAxIDAtMS43MjEtLjAzLTEuOTcxLS4wNDJ2LjAwM2MtMy44ODgtLjE3MS02Ljc5LS44NDgtNi43OS0xLjY1OCAwLS44MDkgMi45MDItMS40ODYgNi43OS0xLjY2djIuNjQ0Yy4yNTQuMDE4Ljk4Mi4wNjEgMS45ODguMDYxIDEuMjA3IDAgMS44MTItLjA1IDEuOTI1LS4wNnYtMi42NDNjMy44OC4xNzMgNi43NzUuODUgNi43NzUgMS42NTggMCAuODEtMi44OTUgMS40ODUtNi43NzUgMS42NTdtMC0zLjU5di0yLjM2Nmg1LjQxNFY3LjgxOUg4LjU5NXYzLjYwOGg1LjQxNHYyLjM2NWMtNC40LjIwMi03LjcwOSAxLjA3NC03LjcwOSAyLjExOCAwIDEuMDQ0IDMuMzA5IDEuOTE1IDcuNzA5IDIuMTE4djcuNTgyaDMuOTEzdi03LjU4NGM0LjM5My0uMjAyIDcuNjk0LTEuMDczIDcuNjk0LTIuMTE2IDAtMS4wNDMtMy4zMDEtMS45MTQtNy42OTQtMi4xMTciLz48L2c+PC9zdmc+"
                          width="16"
                          height="16"
                          alt=""
                        />
                      </div>
                      <p className="value">
                        {amount}
                        <span className="symbol">USDT</span>
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
                    <Button>
                      Depostit
                    </Button>
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
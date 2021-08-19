import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components/macro'
import SimpleReactLightbox, { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import { Button } from '@pancakeswap/uikit'

const Container = styled.div.attrs((props) => ({
  className: 'container',
}))`
  color: ${({ theme }) => theme.colors.text1};
`
const InfoTextPrimary = styled.span`
  color: ${({ theme }) => theme.colors.text1};
`
const InfoTextSecondary = styled.p`
  color: ${({ theme }) => theme.colors.text2};
`
const PackageTitle = styled.p`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text1};
`
const Price = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue5};
`
const TextLeft = styled.div`
  display: flex !important;
  padding-left: 13px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  margin: 0px;
  text-align: left !important;
  color: ${({ theme }) => theme.colors.text2};
`
const TextRight = styled.div`
  text-align: right !important;
  padding-right: 1rem !important;
  color: ${({ theme }) => theme.colors.text1};
`
const Pricing = styled.div.attrs((props) => ({
  className: 'single-pricing active mt-30',
}))`
  background: ${({ theme }) => theme.colors.bg0};
  border: solid 0.25px ${({ theme }) => theme.colors.text4};
`
const CardH3 = styled.h5`
  color: ${({ theme }) => theme.colors.text2};
`
const CardSpan = styled.span`
  color: ${({ theme }) => theme.colors.text3};
`

const AchievementsCard = styled.div.attrs((props) => ({
  className: 'col-lg-6 card',
}))`
  background: ${({ theme }) => theme.colors.bg0};
  color: ${({ theme }) => theme.colors.blue5};
  :hover {
    transform: scale(1.02);
    transition: 0.5s;
    background-color: #fff;
    box-shadow: 0px 5px 50px -8px #ddd;
  }
`

export default function Theter({ history }: RouteComponentProps) {
  const { account } = useWeb3React()
  const elements = [
    {
      src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      caption: 'Lorem ipsum dolor sit amet',
      height: 'auto',
    },
    {
      src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      caption: 'Lorem ipsum dolor sit amet',
      height: 'auto',
    },
    {
      src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
      caption: 'Lorem ipsum dolor sit amet',
      height: 'auto',
    },
    {
      src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      caption: 'Lorem ipsum dolor sit amet',
      height: 'auto',
    },
  ]
  function MyComponent() {
    const { openLightbox } = useLightbox()
    return (
      <div className="col-lg-5 px-0">
        <Button onClick={() => openLightbox()}>Lorem ipsum</Button>
        <SRLWrapper elements={elements} />
      </div>
    )
  }
  const [showDeposit, setShowDepostit] = useState(false)
  const [showInvestOverview, setShowInvestOverview] = useState(false)
  function Invest() {
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
  function InvestOverview() {
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
  return(
    <>
      {!showDeposit && !showInvestOverview ? (
        <>
          <section className="reserve">
            <div className="cover">
              <div className="bg-reserve">
                <div className="container content-end">
                  <div className="col-xl-5 col-lg-6">
                    <div className="pb-3">
                      <h4 className="sub-title">Lorem ipsum..</h4>
                      <h3 className="title">Lorem ipsum dolor sit..</h3>
                      <p>Lorem ipsum dolor sit amet..</p>
                      <SimpleReactLightbox>
                        <MyComponent />
                      </SimpleReactLightbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="proy-desc" className="proy-desc-area pt-125 pb-130">
            <Container>
              <div className="row">
                <div className="col-lg-8">
                  <Container>
                    <div className="row">
                      <div className="col-12">
                        <div className="proy-desc-content mt-50">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                      <div className="col-12 mt-5">
                        <div className="row">
                          <div className="col-lg-6 proy-desc-content mt-50">
                            <ul className="clearfix">
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-calendar">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-phone-handset">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-phone-handset">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-map-marker">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6 proy-desc-content mt-50">
                            <ul className="clearfix">
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-calendar">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-phone-handset">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-phone-handset">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-icon">
                                    <i className="lni-map-marker">*</i>
                                  </div>
                                  <div className="info-text">
                                    <p>
                                      <InfoTextPrimary>lorem ipsum dolor:</InfoTextPrimary>
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="single-info d-flex align-items-center">
                                  <div className="info-text">
                                    <InfoTextSecondary>sit amet, consectetur</InfoTextSecondary>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
                <div className="col-lg-4">
                  <div className="col-lg-12">
                    <Pricing>
                      <div className="pricing-package text-center">
                        <PackageTitle>
                          Quedan
                          <h6>$2,747,847 MXN</h6>
                          disponibles para invertir
                        </PackageTitle>
                      </div>
                      <div className="pricing-body">
                        <div className="advance px-3 pb-3">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "30%" }}
                            >
                              <span> </span>
                            </div>
                          </div>
                        </div>
                        <div className="pricing-text text-center pt-3">
                          <h5>Monto Conseguido</h5>
                          <Price>$8,738,731</Price>
                        </div>
                        <div className="pricing-desc-content">
                          <ul className="clearfix">
                            <li>
                              <div className="single-info d-flex align-items-center">
                                <div className="pricing-text">
                                  <p className="text-center">
                                    <Price>15.86%</Price>
                                    APY
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="single-info d-flex align-items-center">
                                <div className="pricing-text">
                                  <p className="text-center">
                                    <Price>A</Price>
                                  </p>
                                  <p className="pl-5">Risk Type</p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <TextLeft>
                                <p>
                                  <span>Lorem ipsum dolor:</span>
                                </p>
                              </TextLeft>
                            </li>
                            <li>
                              <TextRight>
                                <p>$14,500,000</p>
                              </TextRight>
                            </li>
                            <li>
                              <TextLeft>
                                <p>
                                  <span>Minimum Required:</span>
                                </p>
                              </TextLeft>
                            </li>
                            <li>
                              <TextRight>
                                <p>$7,500,000</p>
                              </TextRight>
                            </li>
                            <li>
                              <TextLeft>
                                <p>
                                  <span>Objective:</span>
                                </p>
                              </TextLeft>
                            </li>
                            <li>
                              <TextRight>
                                <p>Income</p>
                              </TextRight>
                            </li>
                            <li>
                              <TextLeft>
                                <p>
                                  <span>Asset Type:</span>
                                </p>
                              </TextLeft>
                            </li>
                            <li>
                              <TextRight>
                                <p>Residence</p>
                              </TextRight>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="pricing-btn">
                            <Button onClick={() => setShowDepostit(!showDeposit)}>
                              invest
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Pricing>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="skills-section pt-5">
            <Container>
              <div className="row">
                <div className="col">
                  <h2 className="section-title">Lorem ipsum</h2>
                  <div className="list-card">
                    <span className="exp">Excepteur sint</span>
                    <div>
                      <CardH3>amet, consectetur adipisicing elit</CardH3>
                      <CardSpan>Ut enim ad minim veniam, …</CardSpan>
                    </div>
                  </div>
                  <div className="list-card">
                    <span className="exp">occaecat cupidatat</span>
                    <div>
                      <CardH3>quis nostrud exercitation</CardH3>
                      <CardSpan>aliquip ex ea commodo consequat.</CardSpan>
                    </div>
                  </div>
                  <div className="list-card">
                    <span className="exp">non proident</span>
                    <div>
                      <CardH3>uries, but also the leap into</CardH3>
                      <CardSpan>It was popularised in the 1960s with the release of Letraset</CardSpan>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h2 className="section-title">Lorem ipsum</h2>
                  <div className="list-card">
                    <div>
                      <CardH3>Lorem ipsum dolor sit</CardH3>
                      <CardSpan>laboris nisi ut aliquip ex ea commodo consequat.</CardSpan>
                    </div>
                  </div>
                  <div className="list-card">
                    <div>
                      <CardH3>Sed ut perspiciatis</CardH3>
                      <CardSpan>
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                      </CardSpan>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="achievements p-5">
            <div className="container cards">
              <div className="row">
                <AchievementsCard>
                  <div className="skill-level">
                    <span>+</span>
                    <h2>60</h2>
                  </div>
                  <div className="skill-meta">
                    <h3>illo inventore veritatis</h3>
                    <span>
                      et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    </span>
                  </div>
                </AchievementsCard>
                <AchievementsCard>
                  <div className="skill-level">
                    <h2>50</h2>
                    <span>%</span>
                  </div>
                  <div className="skill-meta">
                    <h3>dolor sit amet</h3>
                    <span>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
                  </div>
                </AchievementsCard>
                <AchievementsCard>
                  <div className="skill-level">
                    <h2>30</h2>
                    <span>%</span>
                  </div>
                  <div className="skill-meta">
                    <h3>Quis autem</h3>
                    <span>
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur
                    </span>
                  </div>
                </AchievementsCard>
                <AchievementsCard>
                  <div className="skill-level">
                    <h2>20</h2>
                    <span>%</span>
                  </div>
                  <div className="skill-meta">
                    <h3>At vero eos </h3>
                    <span>
                      vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                      illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </span>
                  </div>
                </AchievementsCard>
              </div>
            </div>
          </section>
        </>
      ) : showDeposit && !showInvestOverview ? (
        <Invest />
      ) : (
        <InvestOverview />
      )}
    </>
  )
}

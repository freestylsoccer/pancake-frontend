import React from 'react'
import { MapPin, DollarSign, TrendingUp } from 'react-feather'
import { Flex, Heading, Link, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import Usdt from '../../assets/svg/usdt-icon.svg'
import Dai from '../../assets/svg/dai-icon.svg'
import Busd from '../../assets/svg/busd-icon.svg'
import Tusd from '../../assets/svg/tusd-icon.svg'

const Main = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
const Cards = styled.div`
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  display: contents;
`
const CardsItems = styled.div`
  padding: 1rem;
  width: 25%;
  min-width: 21rem;
  max-width: 24rem;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
  }
`
const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: solid 0.25px ${({ theme }) => theme.colors.text4};
`
const CardImage = styled.div`
  padding-top: 4rem;
  padding-bottom: 8rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover !important;
  height: 195px;
`
const CardContent = styled.div`
  background: ${({ theme }) => theme.colors.bg1};
  color: ${({ theme }) => theme.colors.text1};
  padding: 1rem;
`
const CardDetails = styled.div`
  justify-content: space-between;
  display: flex;
`
const CardSubContent = styled.div`
  margin-right: 1rem;
`
const CardAmount = styled.div`
  margin-bottom: 0.25rem;
  align-items: center;
  display: flex;
`
const CardAmountIcon = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  width: 1rem;
`
const CardAmountText = styled.div`
  line-height: 1;
  font-weight: 500;
`
const CardAmountDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`
const CardChart = styled.div`
  margin-bottom: 0.25rem;
  align-items: center;
  display: flex;
`
const CardChartIcon = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
`
const CardChartText = styled.div`
  line-height: 1;
  font-weight: 500;
`
const CardChartDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 400;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`
const CardHeader = styled.div`
  padding: 1rem;
  display: flex;
  background: ${({ theme }) => theme.colors.bg0};
`
const CardIcon = styled.div`
  margin-right: 1rem;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  align-items: center;
  display: flex;
  box-shadow: 0 0 4px 2px rgb(0 0 0 / 20%);
  border-radius: 100%;
`
const CardTitleSection = styled.div`
  width: 80%;
`
const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text1};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  margin: 0;
`
const CardSubtitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.text1};
`
const CardLocation = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text2};
`
const CardDivisor = styled.div`
  height: 24px;
  margin-right: auto;
  margin-left: auto;
  font-size: 0.75rem;
  padding: 0.5rem;
  width: 100%;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${({ theme }) => theme.colors.text1};
  background-color: ${({ theme }) => theme.colors.bg2};
`

export default function Markets() {
  const { account } = useWeb3React()
  return (
    <>
      <Main>
        <Cards>
          <CardsItems>
            <Card>
              <CardHeader>
                <CardIcon>
                  <img width="100%" src={Usdt} alt="usdt" />
                </CardIcon>
                <CardTitleSection>
                  <CardTitle>
                    Title
                  </CardTitle>
                  <CardSubtitle>
                    Lorem, ipsum dolor.
                  </CardSubtitle>
                  <CardLocation>
                    <MapPin width="0.5rem" height="0.5rem" />
                    Lorem, ipsum dolor.
                  </CardLocation>
                </CardTitleSection>
              </CardHeader>
              <CardDivisor>
                Lorem, ipsum dolor.
              </CardDivisor>
              <CardImage
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80)',
                }}
              />
              <CardContent>
                <CardDetails>
                  <CardSubContent>
                    <CardAmount>
                      <CardAmountIcon>
                        <DollarSign />
                      </CardAmountIcon>
                      <CardAmountText>10.00</CardAmountText>
                    </CardAmount>
                    <CardAmountDetails>Minimum</CardAmountDetails>
                  </CardSubContent>
                  <CardSubContent>
                    <CardChart>
                      <CardChartIcon>
                        <TrendingUp />
                      </CardChartIcon>
                      <CardChartText>15.6%</CardChartText>
                    </CardChart>
                    <CardChartDetails>APY</CardChartDetails>
                  </CardSubContent>
                </CardDetails>
                {!account ? (
                  <Button>
                    Connect Wallet
                  </Button>
                ) : (                  
                  <Button
                  >
                    Details
                  </Button>
                )}
              </CardContent>
            </Card>
          </CardsItems>
          <CardsItems>
            <Card>
              <CardHeader>
                <CardIcon>
                  <img width="100%" src={Dai} alt="usdt" />
                </CardIcon>
                <CardTitleSection>
                  <CardTitle>
                    Title
                  </CardTitle>
                  <CardSubtitle>
                    Lorem, ipsum dolor.
                  </CardSubtitle>
                  <CardLocation>
                    <MapPin width="0.5rem" height="0.5rem" />
                    Lorem, ipsum dolor.
                  </CardLocation>
                </CardTitleSection>
              </CardHeader>
              <CardDivisor>
                Lorem, ipsum dolor.
              </CardDivisor>
              <CardImage
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                }}
              />
              <CardContent>
                <CardDetails>
                  <CardSubContent>
                    <CardAmount>
                      <CardAmountIcon>
                        <DollarSign />
                      </CardAmountIcon>
                      <CardAmountText>10.00</CardAmountText>
                    </CardAmount>
                    <CardAmountDetails>Minimum</CardAmountDetails>
                  </CardSubContent>
                  <CardSubContent>
                    <CardChart>
                      <CardChartIcon>
                        <TrendingUp />
                      </CardChartIcon>
                      <CardChartText>15.6%</CardChartText>
                    </CardChart>
                    <CardChartDetails>APY</CardChartDetails>
                  </CardSubContent>
                </CardDetails>
                {!account ? (
                  <Button>
                    Connect Wallet
                  </Button>
                ) : (
                  <Button>
                    Details
                  </Button>
                )}
              </CardContent>
            </Card>
          </CardsItems>
          <CardsItems>
            <Card>
              <CardHeader>
                <CardIcon>
                  <img width="100%" src={Tusd} alt="usdt" />
                </CardIcon>
                <CardTitleSection>
                  <CardTitle>
                    Title
                  </CardTitle>
                  <CardSubtitle>
                    Lorem, ipsum dolor.
                  </CardSubtitle>
                  <CardLocation>
                    <MapPin width="0.5rem" height="0.5rem" />
                    Lorem, ipsum dolor.
                  </CardLocation>
                </CardTitleSection>
              </CardHeader>
              <CardDivisor>
                Lorem, ipsum dolor.
              </CardDivisor>
              <CardImage
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                }}
              />
              <CardContent>
                <CardDetails>
                  <CardSubContent>
                    <CardAmount>
                      <CardAmountIcon>
                        <DollarSign />
                      </CardAmountIcon>
                      <CardAmountText>10.00</CardAmountText>
                    </CardAmount>
                    <CardAmountDetails>Minimum</CardAmountDetails>
                  </CardSubContent>
                  <CardSubContent>
                    <CardChart>
                      <CardChartIcon>
                        <TrendingUp />
                      </CardChartIcon>
                      <CardChartText>15.6%</CardChartText>
                    </CardChart>
                    <CardChartDetails>APY</CardChartDetails>
                  </CardSubContent>
                </CardDetails>
                {!account ? (
                  <Button>
                    Connect Wallet
                  </Button>
                ) : (
                  <Button>
                    Details
                  </Button>
                )}
              </CardContent>
            </Card>
          </CardsItems>
          <CardsItems>
            <Card>
              <CardHeader>
                <CardIcon>
                  <img width="100%" src={Busd} alt="usdt" />
                </CardIcon>
                <CardTitleSection>
                  <CardTitle>
                    Title
                  </CardTitle>
                  <CardSubtitle>
                    Lorem, ipsum dolor.
                  </CardSubtitle>
                  <CardLocation>
                    <MapPin width="0.5rem" height="0.5rem" />
                    Lorem, ipsum dolor.
                  </CardLocation>
                </CardTitleSection>
              </CardHeader>
              <CardDivisor>
                Lorem, ipsum dolor.
              </CardDivisor>
              <CardImage
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                }}
              />
              <CardContent>
                <CardDetails>
                  <CardSubContent>
                    <CardAmount>
                      <CardAmountIcon>
                        <DollarSign />
                      </CardAmountIcon>
                      <CardAmountText>10.00</CardAmountText>
                    </CardAmount>
                    <CardAmountDetails>Minimum</CardAmountDetails>
                  </CardSubContent>
                  <CardSubContent>
                    <CardChart>
                      <CardChartIcon>
                        <TrendingUp />
                      </CardChartIcon>
                      <CardChartText>15.6%</CardChartText>
                    </CardChart>
                    <CardChartDetails>APY</CardChartDetails>
                  </CardSubContent>
                </CardDetails>
                {!account ? (
                  <Button>
                    Connect Wallet
                  </Button>
                ) : (
                  <Button>
                    Details
                  </Button>
                )}
              </CardContent>
            </Card>
          </CardsItems>
        </Cards>
      </Main>
    </>
  )
}

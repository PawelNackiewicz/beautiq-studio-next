import styled from 'styled-components'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

type LogoProps = {
    setNavigationOpen: Dispatch<SetStateAction<boolean>>
}

const Logo = ({setNavigationOpen}: LogoProps) => {
  return (
    <LogoWrap onClick={() => setNavigationOpen(false)}>
        <Link href="/">
            <img alt="logo"/>
        </Link>
    </LogoWrap>
  )
}

export default Logo
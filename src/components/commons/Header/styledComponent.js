import styled from 'styled-components'
import config from '@assets/css/config'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 44px;
    background: ${config.headerBackgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    .left,.right,.middle{
        color: #323232;
        font-size: 20px;
    }
    .left,.right{
        height: 22px;
        width: 22px;
        img{
            width: 100%;
        }
    }
`
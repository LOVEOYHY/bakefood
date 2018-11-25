import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 46px;
    box-sizing: border-box;
    padding: 0 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5;
    background: rgba(255,255,255,0.95);
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.15), inset 0 0 0 0 rgba(178,178,178,0.50);
`

export const footerItem = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 22px;
        height: 22px;
        img{
            width: 100%;
        }
    }
`
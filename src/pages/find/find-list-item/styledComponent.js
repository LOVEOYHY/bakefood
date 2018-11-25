import styled from 'styled-components'

export const FindListItemStyle = styled.li`
    width: 100%;
    height: 214px;
    margin-bottom: 2px;
    background: #ccc;
    box-shadow: 0 -60px 30px rgba(0,0,0,0.3) inset;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column-reverse;
`
// ${props=>`url(${props.url}) no-repeat`}

export const FindListItemTitle = styled.p`
    padding: 0 0 3px 15px;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`
// 种类
export const FindListItemCategory = styled.div`
    padding: 0 10px 10px 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #fff;
    div{
        display: inline-block;
        width: auto;
    }

`
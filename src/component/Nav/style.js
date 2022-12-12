import styled from 'styled-components'



export const Navbar = styled.div`
    padding: 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
    `

export const Navbarlogo = styled.div `
    width: 50%;
    float: left;
`

export const Logotext = styled.h2`
    font-size: 30px;
    font-weight: bold
`

// .navbar input , .navbar label `
//     position: absolute;
//     top: 13px;
//     right: 25px;
// `

export const Ullist = styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
`

export const Listitem = styled.li `
    display: inline-block;
`

export const Itema = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &: hover {
        color: #eb5424
    }
`


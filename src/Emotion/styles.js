import { css } from "@emotion/react"

export const box1 = css`
        width:100px;
        height:100px;
        background-color:green;
        `


export const box2 = (color) => css`
        width:100px;
        height:100px;
        background-color:${color}
        `

export const box3 = (isWide) => css `
        width:${isWide ? "300px" : "100px"};
        height:${isWide ? "300px" : "100px"};
        background-color:blue;
        transition: all 0.2s ease; 
        
        `

        
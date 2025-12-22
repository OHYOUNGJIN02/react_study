import { css } from "@emotion/react";


export const container = css`


`

export const todoListContainer = css`
    width: 100%;
    height: 430px;
    background-color: transparent;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > ul {
        list-style : none;
        margin : 0;
        padding : 0; 
        height : 100%;
        background-color:gray;
        
        & > li {
            align-items: center;
            display: flex;
            padding : 10px 15px;
            border-bottom: 1px solid #dbdbdb;
            box-sizing: border-box;
        

        & > input[type="checkbox"] {
            display: none;

            & + label {
                display : flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                width: 17px;
                height: 17px;
                border: 1px solid #dbdbdb;
                box-sizing: border-box;
            }

            &:checked + label::after {
                content : "";
                display: block;
                width: 11px;
                height: 10px;
                border-radius: 20px;
                background-color: cornflowerblue;
            
            }
            
        }

        }
    
    
    }

`


export const addTodoContainer = css`
    width: 100%;
    height: 38px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    
    
        
`

export const addInput = css`
    width: 100%;
    background-color: transparent;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 10px;
    width: 100%;
    flex-grow: 1;
    outline: none;
    padding : 10px 15px;
     &:hover {
        background-color: #f2f2f2;
        

    }


`
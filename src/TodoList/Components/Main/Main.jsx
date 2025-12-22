/** @jsxImportSource @emotion/react */

import { IoTrash } from "react-icons/io5"
import * as s from "./styles"

import React from 'react'

function Main() {
  return (
    <>
    <div css={s.container}>
      <div css={s.todoListContainer}>
          <ul>
            <li>
              <input type="checkbox" id="1"/>
              <label htmlFor="1"></label>
              <label htmlFor="1">할 일 내용</label>
              <div>
                <div><IoTrash /></div>
              </div>
            </li>
            <li>
              <input type="checkbox" id="1"/>
              <label htmlFor="1"></label>
              <label htmlFor="1">할 일 내용</label>
              <div>
                <div><IoTrash /></div>
              </div>
            </li>
            <li>
              <input type="checkbox" id="1"/>
              <label htmlFor="1"></label>
              <label htmlFor="1">할 일 내용</label>
              <div>
                <div><IoTrash /></div>
              </div>
            </li>
            <li>
              <input type="checkbox" id="1"/>
              <label htmlFor="1"></label>
              <label htmlFor="1">할 일 내용</label>
              <div>
                <div><IoTrash /></div>
              </div>
            </li>
          </ul>
      </div>
    </div>
      <div css={s.addTodoContainer}>
      <input css={s.addInput} type="text" placeholder="할 일을 입력해주세요"/>
    </div>
  </>
  )
}

export default Main
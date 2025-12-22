/** @jsxImportSource @emotion/react */

import * as s from "./styles"
import { TfiSearch } from "react-icons/tfi";

function Header() {
  return (
    <><div>
      <div css={s.container}>
            <input css={s.searchInput} type="text" placeholder="검색어를 입력해주세요"/>
            <button css={s.searchButton}>
              <TfiSearch />
            </button>
          </div>
          
          <div css={s.filterContainer}>
            <input type="radio" id="all" name="filter"/>
            <label htmlFor="ll">전체</label>
            <input type="radio" id="complete" name="filter" />
            <label htmlFor="complete">완료</label>
            <input type="radio" id="incomplete" name="filter" />
            <label htmlFor="incomplete">미완료</label>
          </div>
    </div>
    </>
  )
}

export default Header
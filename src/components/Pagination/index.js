import {useState} from 'react'
import './index.css'

const Pagination = ({totalPage, selectedPage, updatePageNum}) => {
  const start = 1
  const end = totalPage > 500 ? 500 : totalPage
  const select = selectedPage
  const pagination = []
  for (let i = 1; i <= end; i += 1) {
    pagination.push(i)
  }
  let startingPages = []
  let endingPages = []
  if (select === start || select >= end / 2) {
    startingPages = pagination.slice(0, 3)
  } else {
    startingPages = pagination.slice(select - 2, select + 1)
  }
  if (select === end || select < end / 2) {
    endingPages = pagination.slice(pagination.length - 3, pagination.length + 1)
  } else {
    endingPages = pagination.slice(select - 2, select + 1)
  }

  const [isPageNum, setIsPageNum] = useState(false)

  return (
    <div
      className="pagination-main-container"
      onMouseLeave={() => setIsPageNum(false)}
    >
      <ul className="pagination-container">
        <li
          className="page-numbers"
          onClick={() => updatePageNum({action: 'decrease'})}
        >
          &#8593;
        </li>
        {startingPages.map(num => (
          <li
            key={num}
            className={
              num === selectedPage
                ? 'page-numbers page-numbers-active'
                : 'page-numbers'
            }
            onClick={() => updatePageNum({num})}
          >
            {num}
          </li>
        ))}
        <li className="page-numbers" onMouseEnter={() => setIsPageNum(true)}>
          ...
        </li>
        {endingPages.map(num => (
          <li
            key={num}
            className={
              num === selectedPage
                ? 'page-numbers page-numbers-active'
                : 'page-numbers'
            }
            onClick={() => updatePageNum({num})}
          >
            {num}
          </li>
        ))}
        <li
          className="page-numbers"
          onClick={() => updatePageNum({action: 'increase'})}
        >
          &#8595;
        </li>
      </ul>
      {isPageNum && (
        <ul className="pagination-all-container">
          {pagination.map(num => (
            <li
              key={num}
              className={
                num === selectedPage
                  ? 'page-numbers page-numbers-active'
                  : 'page-numbers'
              }
              onClick={() => updatePageNum({num})}
            >
              {num}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Pagination

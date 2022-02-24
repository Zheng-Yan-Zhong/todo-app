import React, { useEffect, useState } from 'react'
import {
  ListContainer,
  Input,
  ListStore
} from './style'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { AiOutlineDelete } from 'react-icons/ai'
function List() {
  const created = new Date().toLocaleString()
  const theme = useSelector((state) => state.theme.value)
  const [text, setText] = useState('') 
  const [lists, setLists] = useState('')

  function addItem(e) {
    e.preventDefault()
    if(text.length !== 0) {
      setLists([...lists, {
        id: lists.length,
        content: text.toString().trim(),
        time: created
      }])
    }      
    setText('')
  }

  function remove(targetIndex) {
    setLists(lists.filter((item, index) => index !== targetIndex))
  }

  useEffect(() => {
    setLists(JSON.parse(localStorage.getItem('todo')))
  },[]) //localStorage取得的資料都是字串,需轉換成JSON格式
  //只有第一次載入才需要抓取localStorage資料
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(lists))
    //新增至localStorage需轉成字串存取 {"key", "value" }
    console.log(JSON.parse(localStorage.getItem('todo')));
  }, [lists])


  return (
    <ListContainer theme={theme}>
      <h2>Todo APP</h2>
      <Input>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='add item' />
        <button  onClick={addItem}>add item</button>
      </Input>
      <ListStore>
        {lists.length !== 0 && lists.map((item, index) => {
          return (
          <li key={index.toString()}>
            <p>{index + 1}. {item.content}</p>
            <p>{item.time}</p>
            <button onClick={() => remove(index)}><AiOutlineDelete /></button>
          </li>)
        })}
      </ListStore>
      {lists.length !== 0 ? <p style={{backgroundColor: "white"}}>您目前還有{lists.length} 個排程未完成呦！！！</p> 
      : <p><BiMessageSquareAdd />add something</p>}
    </ListContainer>
  )
}

export default List
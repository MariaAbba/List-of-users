import React, { useEffect } from 'react'
import './index.scss'
import { useState } from 'react'
import { Success } from './components/Success'
import { Users } from './components/Users'
import Axios from 'axios'

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    Axios.get('https://reqres.in/api/users')
      .then((res) => {
        setUsers(res.data.data)
      })
      .catch((err) => {
        console.warn(err)
        alert('Failed to get the username ')
      })
      .finally(() => setLoading(false))
  }, [])

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
if (invites.includes(id) {
  setInvites(prev => prev.filter())
})
  }
  return (
    <div className="App">
      <Users
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users}
        isLoading={isLoading}
      />
      {/* <Success /> */}
    </div>
  )
}

export default App

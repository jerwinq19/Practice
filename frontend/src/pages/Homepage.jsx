import React from 'react'
import LogoutButton from '../components/logoutButton'
import { useState, useEffect } from 'react'
import axiosInstance from '../utils/axios'
import axios from 'axios'

/*
  Todos: gawan mo UI for better looking nigga!

*/

const Homepage = () => {
  const [threads, setThreads] = useState([])
  const [user, setUser] = useState([])

  // fetcher
  const FetchAllThread = async () => {
      const access_token = localStorage.getItem('access_token')
      try {
        const response = await axiosInstance.get('thread/', {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
        setThreads(response.data)
        console.log(response.data)
        console.log('it work!')
      } catch (error) {
        console.log(error)
      }  
    }
  
  const FetchCurrentUser = async () => {
    const access_token = localStorage.getItem('access_token')
    try {
      const response = await axiosInstance.get('user/current_user/', {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchAllThread()
    FetchCurrentUser()
  }, [])

  return (
    <div>
      <h1>Hello {user.username}</h1>
      <h1>first name {user.first_name}</h1>
      <h1>last name {user.last_name}</h1>
      <h1>email{user.email}</h1>

      <LogoutButton />
      <h1>All Threads</h1>
      {threads.map((thread, key) => (
        <div key={key}>
          <h1>Title: {thread.title}</h1>
          <h2>Author: {thread.author_name}</h2>
          <h2>Flair: {thread.category}</h2>
          <p>{thread.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Homepage

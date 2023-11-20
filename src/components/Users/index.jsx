import React from 'react'
import { Skeleton } from './Skeleton'
import { User } from './User'

export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites
}) => {
  return (
    <>
      <div className="search">{/* ... */}</div>{' '}
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find user..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((user) => {
              const fullName = (user.first_name + user.last_name).toLowerCase()
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                user.email.toLowerCase().includes(searchValue.toLowerCase())
              )
            })
            .map((user) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(user.id)}
                key={user.id}
                {...user}
              />
            ))}
        </ul>
      )}
      {invites.length > 0 && (
        <button 
        onClick={onClickSendInvites} className="send-invite-btn">
          Send invite
        </button>
      )}
    </>
  )
}

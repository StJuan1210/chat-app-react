import React from 'react'
import styles from './styles.module.css'

function ChatItem({item}) {
  let message = item.message
  return (
    <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
    <div dangerouslySetInnerHTML={{__html: message}}></div>
    </div>
  )
}

export default ChatItem
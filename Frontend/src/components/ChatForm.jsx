import React from 'react'
import { useState,  useEffect } from 'react'
import {sendMessage} from "../socketApi"
import {useChat}  from "../context/ChatContext"
import {IoSendSharp} from 'react-icons/io5'
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";


const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['image','video']
  ],
};

const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'code',
  'image',
  'video'
];
const placeholder = 'Enter Message';
const theme = 'snow';

function ChatForm() {
  const [message, setMessage] =useState("")
  const {setMessages} = useChat()
  const { quill, quillRef } = useQuill({theme, modules, formats, placeholder});

  const handleSubmit=(e)=> {
    e.preventDefault()
    setMessage(quill.root.innerHTML)
    console.log(quill.root.innerHTML.type)
    console.log(message)
    setMessages((prevState)=>[...prevState, {message, fromMe:true}])
    sendMessage(message)
    setMessage("")
    quill.setContents([{ insert: '\n' }]);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        setMessage(quill.root.innerHTML)
      });
    }
  }, [quill]);

  return (
    <div className='chatlist1'>
      <form onSubmit={handleSubmit}>
      <div 
      className='qclass' 
      style={{ width: 1000, height: 50 }}>
        <div className='qclass' ref={quillRef} />
      </div>
        <button 
          type = "submit" 
          className='btn btn-primary'
          style={{ marginLeft:"1100px",marginBottom:"50px" }}>
          Send&nbsp;&nbsp;
          <IoSendSharp/>
          </button>
        
      </form>
    </div>
  )
}

export default ChatForm
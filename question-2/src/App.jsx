import { useState } from 'react'
import './App.css'
import PostCard from './components/PostCard';

function App() {
  const POSTS_DATA = [
    {
      id: 1,
      username: "dev_traveler",
      content: "Just finished my first React project!",
      likes: 24,
      comments: ["Great job!", "Keep it up!", "React is awesome."]
    },
    {
      id: 2,
      username: "chef_logic",
      content: "The secret to a perfect steak is the sear.",
      likes: 85,
      comments: ["Recipe please?", "Cast iron or grill?"]
    }
  ];
  return (
    <>
    <h1>Activity Feed</h1>
    <div>
      {
        POSTS_DATA.map((post)=>((
            <PostCard post={post}></PostCard>
        )))
      }
    </div>
    </>
  )
}

export default App

import React from 'react'
import Storyviewer from '../../Components/Story/Storyviewer'

const stories=[
  {
    image:"http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721552125/zs5qnhlcrsmj3lpullkq.jpg"
  },
  {
    image:"http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721551952/io5jyigzrwoojjdck5e7.webp"
  },
  {
    image:"http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721551933/swbpfimyfzkdns2qjze4.jpg"
  },
  {
    image:"http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721551852/yzftgsxrvibzix9iefxy.jpg"
  },
  {
    image:"http://res.cloudinary.com/dj2wdfbxm/image/upload/v1721551826/owbqn9or0g5rzarvcaih.jpg"
  }
]

const Story = () => {
  return (
    <div>
      <Storyviewer stories={stories}/>
    </div>
  )
}

export default Story

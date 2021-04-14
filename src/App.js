import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import Post from './components/Post'
import './Post.css'
import './style.css'

const johnny = 'https://pbs.twimg.com/profile_images/1341020145934880769/JavJk8Y4.jpg'
const nightcity = 'https://cdn.shazoo.ru/462949_Lb9j5ILOsR_cp_77_night.jpg'
const v = 'https://i0.wp.com/xboxera.com/wp-content/uploads/2019/08/img_3716.png?fit=400%2C400&ssl=1'
const tattoo = 'https://preview.redd.it/b4vj0zd9n0661.png?auto=webp&s=5254d4fed51e9bd4c8aa2b667563c844a96f1238'


const authors = [
  {
      name: "Johnny Silverhand",
      nickname: "@samurai",
      pic: johnny,
      text: "Helloooo, Night City",
      photo: nightcity
      

  },
  {
    name: "V",
    nickname: "@v",
    text:`At this night this motherfucker  stuffed tatto on my body `,
    pic: v,
    photo: tattoo
  }
]

function App() {
    return ( 
    <div className="container">
  
  {authors.map(author=> <Post {...author}/>)}
    </div>

    );
}

export default App;
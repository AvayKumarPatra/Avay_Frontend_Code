import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import MediaUpload from './Components/MediaUpload'
import MusicPlayer from './Components/MusicPlayer'
import SlideAnimation from './Components/SlideAnimation'
import ThemeSelector from './Components/ThemesSelector'
import img1 from "./assets/images/Avay Ku. Patra.jpg";
import img2 from "./assets/images/Avay Ku. Patra.png";
import img3 from "./assets/images/Frontend.jpeg";
import img4 from "./assets/images/Screenshot from 2024-07-10 17-35-24.png";



function App() {
  const [theme, setTheme] = useState('light');
  const [uploadedMedia, setUploadedMedia] = useState([]);
  const romanticMusic = '/path-to-romantic-music.mp3';

  const handleUpload = (file) => {
    setUploadedMedia([...uploadedMedia, file]);
  };

  const styles = {
    light: { backgroundColor: '#ffedf0', color: '#000' },
    dark: { backgroundColor: '#2c2c2c', color: '#fff' },
  };
  const localImages = [img1, img2, img3, img4];
  return (
    <>
   <h1>hii loves</h1>
   <div style={{ ...styles[theme], minHeight: '100vh', padding: '10px' }}>
      <Header />
      <ThemeSelector setTheme={setTheme} />
      <SlideAnimation images={localImages} />
      <MediaUpload onUpload={handleUpload} />
      <MusicPlayer src={romanticMusic} />
    </div>
    </>
  )
}

export default App

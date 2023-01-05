import './app.css'
import { Routes, Route } from "react-router-dom";
import MainLayout from './components/layouts/MainLayout'
import Home from './components/pages/Home'
import BrowseMovie from './components/pages/BrowseMovie'



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path="BrowseMovie" element={<BrowseMovie />} />
        <Route path="Home" element={<Home />} />
      </Route>
    </Routes>
  )
}
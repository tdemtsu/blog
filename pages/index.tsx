import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from '../components/App';

// Components
import Main from '../components/breaking'
import Secondary from '../components/second'


const Home: NextPage = () => {
  return (
    <Format>
      <Main />
      <Secondary />
      <App />
    </Format>
  )
}
export default Home

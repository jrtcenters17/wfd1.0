import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link to="./about.js">about</Link>
  </Layout>
)

export default IndexPage

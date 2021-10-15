import Layout from '@components/Layout'
import Head from 'next/head'
import PostList from '@components/PostList'
import BackgroundHOC from '../components/BackgroundHOC'
import BlogList from '../components/BlogList'
import DevNme from '../components/DevNme'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
      <div className="flex flex-col items-center justify-center min-h-screen relative">
      <Head>
        <title>Wordwarrior | Dev</title>
        <link rel="icon" href="/logo.png" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

        <Intro/>
        <Work/>
        <DevNme/>
        <BlogList posts={posts}/>

      <footer className="flex items-center justify-center w-full h-24 bg-lilac">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.png" alt="Wordwarrior Logo" className="h-12 ml-2" />
        </a>
      </footer>
    </div>
      </Layout>
      
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../blog', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

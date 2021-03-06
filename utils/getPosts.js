import matter from 'gray-matter'

const getPosts = (context) => {
  const keys = context.keys()
  const values = keys.map(context)
  const data = keys.map((key, index) => {
    const value = values[index]
    const document = matter(value.default)
    return {
      frontmatter: document.data,
      markdownBody: document.content,
    }
  })
  return data
}

export default getPosts

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { PostsList } from './components/PostsList.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostsFilter } from './components/PostsFilter.jsx'
import { PostsSorting } from './components/PostsSorting.jsx'
import { getPosts } from './api/posts.js'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })
  const posts = postsQuery.data ?? []

  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter By:
      <PostsFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <br />
      <PostsSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostsList posts={posts} />
    </div>
  )
}

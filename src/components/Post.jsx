import PropTypes from 'prop-types'

export function Post({ title, contents, author }) {
  return (
    <article>
      <h1>{title}</h1>
      <div>{contents}</div>
      {author && (
        <em>
          <br />
          Written by <strong>{author}</strong>
        </em>
      )}
    </article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}

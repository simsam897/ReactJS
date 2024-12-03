export const PostCard = (props) => {
  return (
    <div className="card">
      <h1>{props.id}</h1>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </div>
  )
}
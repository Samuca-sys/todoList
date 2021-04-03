export default function Footer(props) {
  const {count} = props
  return (
    <footer>
      <strong>
        <span>{count} </span>
      </strong>
      {'items left'}
    </footer>
  )
}
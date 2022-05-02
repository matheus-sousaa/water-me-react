export default function CupsList({id, quantity, imageSrc}) {
  return <ul id={id}>
        {(new Array(quantity).fill(quantity)).map(item => <img src={imageSrc} />)}
      </ul>
}
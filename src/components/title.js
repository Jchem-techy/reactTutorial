export default function Title({ title, subtitle }) {
  // console.log(props);
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <br />
      <h1 className='subtitle'>{subtitle}</h1>
    </div>
  );
}
// the whole point of this is to write component that are reusable

type Props = {
  text: string
}

export default function Home({ text = 'My title' }: Props) {
  return (
    <main>
      <p>{text}</p>
    </main>
  )
}

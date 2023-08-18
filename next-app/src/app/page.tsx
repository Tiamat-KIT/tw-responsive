import Image from 'next/image'
import { Text,GradientHeading } from '@/components/responsive/ResponsiveComponent'
import "./globals.css"

export default function Home() {
  return (
    <main>
      <Text tag="h1">TestH1</Text>
      <Text tag='h2'>TestH2</Text>
      <Text tag='h3'>TestH3</Text>
      <Text>Testparagraph</Text>
      <GradientHeading 
        to="r"
        beginColor="from-indigo-500"
        endColor="to-blue-500"
      >aaa</GradientHeading>
    </main>
  )
}

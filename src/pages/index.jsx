import Image from 'next/image'
import Head from 'next/head'
import clsx from 'clsx'
import portraitImage from '@/images/avatar.jpg'
import { Container } from '@/components/Container'
import image1 from '@/images/photos/humble.jpg'
import image2 from '@/images/photos/history.jpg'
import image3 from '@/images/photos/insta.jpg'
import image4 from '@/images/photos/ladder.jpg'
import image5 from '@/images/photos/upstream.jpg'
import cover from '@/images/photos/cover.png'
import Download from '@/components/Download'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Peter Conridge
        </title>
        <meta
          name="description"
          content="I am not sure if the Poet, Philip Larkin was keen on outdoor swimming but he recognised the potential of 'a furious devout drench' when he wrote: 'If I were called in to construct a religion, I would make use of water'."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Peter Conridge
            </h1>
            <h1 className="text-3xl font-bold tracking-tight text-sky-900 dark:text-zinc-100 sm:text-4xl">
              The Meeting of the Waters
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am not sure if the Poet, Philip Larkin was keen on outdoor swimming but he recognised the potential of <i>“a furious devout drench”</i> when he wrote:
              </p>
              <p className="font-bold italic text-zinc-600 dark:text-zinc-100">
                "If I were called in to construct a religion, I would make use of water”.
              </p>
              <p>There are no shortages of beaches that lie within cycling reach of Hull, the city where he lived, worked and wrote 'Here', an account of a cycle ride to Spurn Head.
                No less, an inspiration for the spirit of adventure and in this case, appreciation for the pleasures of outdoor swimming are contained within Roger Deakin's book: “Waterlog”.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>Both writers have been part of my desire to discover more fully the nature of rivers, lakes and pools and beaches on the many travels afforded me by the gift of retirement.
            This blessing has created the space to undertake many expeditions far and wide, but none more important than the shared odyssey travelling down
            The River Exe in my native county, Devonshire with my friend, Dr Charles Dixon. This river and my attempt at a book has become the cornerstone to similar enterprises undertaken over the years following on from this venture in 2017.
          </p>
          <p>My book is a humble offering towards this end but met with a familiar conclusion that others through spoken or written words have often expressed things to greater effect and none better than Matthew Arnold's words: </p>
          <p className="font-bold italic text-zinc-600 dark:text-zinc-100">“It is no small thing to have enjoyed the sun. To have lived light in the spring, to have loved, to have thought. To have done”. </p>
        </div>
      </Container>
      <Photos />
      <Container className="rounded-2xl">
        <Download text="Explore Chapter One" src={cover.src} href="/the-meeting-of-the-waters" />
      </Container>
    </>
  )
}

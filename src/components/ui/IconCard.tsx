import Image from 'next/image'

export default function IconCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Image src={src} alt={alt + ' Icon'} width={75} height={75} />
      <p className="mt-2">{alt}</p>
    </div>
  )
}

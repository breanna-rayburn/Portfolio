import Image from 'next/image'

export default function ProjectCard({
  href,
  src,
  name,
}: {
  href: string
  src: any
  name: string
}) {
  return (
    <a href={href} target="_blank">
      <Image src={src} alt={name} />
      <p className="mt-2">{name}</p>
    </a>
  )
}

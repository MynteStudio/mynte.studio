interface TextSectionProps {
  title: string
  text: string
}

export const TextSection = ({ title, text }: TextSectionProps) => {
  return (
    <>
      <div className=" flex flex-col gap-5 lg:gap-10 items-center w-full">
        <h3 className="glass px-7 py-2 rounded-2xl text-lg font-semibold">{title}</h3>
        <p className="glass w-full p-6 rounded-2xl text-justify h-full text-lg">{text}</p>
      </div>
    </>
  )
}

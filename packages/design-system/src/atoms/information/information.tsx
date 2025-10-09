interface InformationProps {
  type?: string
  message: string
}

export const Information = ({ type = 'Information', message }: InformationProps) => {
  return (
    <>
      <div className="mx-5 py-4 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center border-y border-white border-opacity-[15%]">
        <span className="glass rounded-full px-3 py-[0.1rem] text-white/50">{type}</span>
        <span className="text-white/50 text-center sm:text-left">{message}</span>
      </div>
    </>
  )
}

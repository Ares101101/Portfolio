
export const ExperiencieItem = ({ title, date, actual, description, link, company }) => {
  return (
    <>
      <h3 class='font-title text-3xl font-bol pixel-corners px-4 border-4 border-l-black/25 border-t-black/25 border-r-white/25 border-b-white/25 mb-4 bg-black/15'>
        {title.toUpperCase()}

      </h3>
      <div class='mb-4'>
        <span class='text-lg p-2 border-4 border-l-black/25 border-t-black/25 border-r-white/25 border-b-white/25 mb-4 bg-[#4c525f] font-title '>
          {company.toUpperCase()}
        </span>
        <span class=' text-lg font-title italic border-4 p-2 border-l-black/25 border-t-black/25 border-r-white/25 border-b-white/25'>
          {date}

        </span>
        {
          actual && (
            <span class='text-lg p-2 border-4 border-l-black/25 border-t-black/25 border-r-white/25 border-b-white/25 bg-[#3c6485] font-title '>
              {actual}
            </span>
          )
        }

      </div>
      <p
        class=' text-lg font-light font-mono  not-italic border-4 border-l-black/25 border-t-black/25 border-r-white/25 border-b-white/25 mb-4 bg-[#4c525f] p-4'
      >
        {description}
      </p>
      {
        link && (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            class=' text-lg border-4 border-t-white/25 border-l-white/25 border-b-black/25  border-r-black/25 hover:border-t-black/25 hover:border-l-black/25 hover:border-r-white/25 hover:border-b-white/25 hover:bg-[#2c4b64] fb px-1 bg-[#3c6485] font-title  p-2'
          >
            Saber más...
          </a>
        )
      }

    </>
  )
}

/*
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-square-rounded-arrow-right-filled"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm.613 5.21l.094 .083l4 4a.927 .927 0 0 1 .097 .112l.071 .11l.054 .114l.035 .105l.03 .148l.006 .118l-.003 .075l-.017 .126l-.03 .111l-.044 .111l-.052 .098l-.074 .104l-.073 .082l-4 4a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293h-5.585a1 1 0 0 1 -.117 -1.993l.117 -.007h5.585l-2.292 -2.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z"
        fill="currentColor"
        stroke-width="0"
      />
    </>
  </svg>
  */
export default function Logo({fill = "#1A1A1A"}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 26">
      <path fill={`${fill}`} fillRule="evenodd" d="M50 0H6.763L0 26h58V14.975h-8V0zm-2 14.975V2H30v22h26v-7H39V9h2v5.975h7zM14.976 2L9.563 24h4.647l5.723-22h-4.957zM8.15 2L2.737 24H7.34L13 2H8.15zm13.69 0l-5.413 22H28V2h-6.16z" clipRule="evenodd" />
    </svg>
  )
}
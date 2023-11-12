import { IconProps } from './_icon.type'

export default function FacebookIcon({
  pathFill = '#00A199',
  rectFill = 'none'
}: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="40" height="40" rx="20" fill={rectFill} />
      <path
        d="M17.1968 30H21.1968V21.99H24.8008L25.1968 18.01H21.1968V16C21.1968 15.7348 21.3021 15.4804 21.4897 15.2929C21.6772 15.1054 21.9316 15 22.1968 15H25.1968V11H22.1968C20.8707 11 19.5989 11.5268 18.6612 12.4645C17.7236 13.4021 17.1968 14.6739 17.1968 16V18.01H15.1968L14.8008 21.99H17.1968V30Z"
        fill={pathFill}
      />
    </svg>
  )
}

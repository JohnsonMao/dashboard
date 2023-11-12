import FacebookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/InstagramIcon'
import YoutubeIcon from './Icons/YoutubeIcon'

export default function Header() {
  const menu = [
    { text: '候選人主張' },
    { text: '最新活動' },
    { text: '政策議題' },
    { text: '小額捐款' },
    { text: '服務信箱' }
  ]

  const social = [
    {
      to: 'facebook',
      icon: <FacebookIcon />
    },
    {
      to: 'instagram',
      icon: <InstagramIcon />
    },
    {
      to: 'youtube',
      icon: <YoutubeIcon />
    }
  ]

  return (
    <header className="flex items-center justify-between bg-secondary-light px-16 rounded-full mx-5">
      <a href="#" className="gaegu gaegu-3 text-primary">
        Miao
      </a>
      <nav className="flex items-center gap-5">
        <ul className="flex gap-10">
          {menu.map(({ text }) => (
            <li key={text} className="text-primary font-bold">
              {text}
            </li>
          ))}
        </ul>
        <ul className="flex">
          {social.map(({ to, icon }) => (
            <li key={to}>{icon}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

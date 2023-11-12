import FacebookIcon from './Icons/FacebookIcon'
import InstagramIcon from './Icons/InstagramIcon'
import YoutubeIcon from './Icons/YoutubeIcon'

export default function Footer() {
  return (
    <footer className="flex justify-center gap-20 py-[60px] bg-primary text-basic-white">
      <nav>
        <div className="text-secondary font-bold">快速連結</div>
        <ul>
          <li>首頁</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
        </ul>
      </nav>
      <div>
        <div className="text-secondary font-bold">聯絡資訊</div>
        <div>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</div>
        <div>電話：(02) 888-5678</div>
        <div>電子郵件地址：meowoffice@linmeow.tw</div>
      </div>
      <div>
        <div className="text-secondary font-bold mb-8">關注喵喵最新動態</div>
        <ul className="flex gap-5 mb-8">
          <li>
            <YoutubeIcon rectFill="#F4CA80" pathFill="white" />
          </li>
          <li>
            <FacebookIcon rectFill="#F4CA80" pathFill="white" />
          </li>
          <li>
            <InstagramIcon rectFill="#F4CA80" pathFill="white" />
          </li>
        </ul>
        <div>版權聲明：© 2023 喵立翰 Miao Li-Han 版權所有。</div>
      </div>
    </footer>
  )
}

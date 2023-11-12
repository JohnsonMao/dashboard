import FootprintsIcon from './Icons/FootprintsIcon'
import cn from '../utils/cn'

export default function Activity() {
  const activeIndex = 0
  const activity = [
    {
      date: '12/26',
      title: '參與台北寵物論壇，爭取貓咪友善環境',
      description:
        '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，\n決定要全力宣傳「貓咪至上」的理念！\n我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。'
    },
    {
      date: '12/24',
      title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
      description:
        '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！\n這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。'
    },
    {
      date: '12/20',
      title: '收容所模特兒大比拼！',
      description:
        '今天的收容所不再是一片寂靜。\n為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！'
    }
  ]
  return (
    <section>
      <h2 className="title text-basic-white text-center">掌握喵喵最新活動！</h2>
      <div className="flex">
        <div className="flex-[0_0_50%] px-10">
          <div className="h-96 bg-red-300"></div>
        </div>
        <ul className="flex-[0_0_50%] px-10 border-l-2">
          {activity.map(({ date, title, description }, index) => (
            <li key={title} className="relative">
              <div className="absolute top-2 right-[calc(100%+16px)]">
                <FootprintsIcon />
              </div>
              <h3 className="text-secondary">
                <div
                  className={cn('title', activeIndex !== index && 'title-1')}
                >
                  {date}
                </div>
                <div
                  className={cn(
                    'title',
                    activeIndex === index ? 'subtitle' : 'fz-lg'
                  )}
                >
                  {title}
                </div>
              </h3>
              <p
                className={cn(
                  'whitespace-pre-wrap',
                  activeIndex === index && 'fz-lg'
                )}
              >
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

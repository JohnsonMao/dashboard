import cn from '../utils/cn'

export default function Policy() {
  const activeIndex = 0
  const policy = [
    {
      title: '為毛孩子謀福利！推動寵物醫療保障方案',
      items: [
        {
          title: '設立寵物醫療基金',
          description:
            '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用'
        },
        {
          title: '提供醫療補助',
          description:
            '每隻寵物每年可獲得高達新台幣 20,000\n元的醫療補助，減輕飼主的經濟壓力'
        },
        {
          title: '合作動物醫院',
          description: '目前已有和超過 200 家動物醫院進行初步的合作討論'
        }
      ]
    },
    {
      title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
      items: [
        {
          title: '建立寵物公園',
          description:
            '每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。\n根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10\n座寵物公園。'
        },
        {
          title: '推廣寵物友善商家',
          description:
            '鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。\n預計在政策實施後的首年，將有超過 500 家商家加入此計畫。'
        },
        {
          title: '舉辦寵物活動和工作坊',
          description:
            '與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，\n包括寵物才藝比賽、飼養知識工作坊等。'
        }
      ]
    },
    {
      title: '推廣寵物飼養教育，讓愛更加專業！',
      items: [
        {
          title: '建立寵物飼養教育中心',
          description:
            '每年撥款新台幣 3\n億元，用於在全國各地建立專業的寵物飼養教育中心。\n預計在第一年內，在全國至少 5 大城市設立教育中心。'
        },
        {
          title: '推廣寵物飼養課程',
          description:
            '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。\n預計每年將有超過 10,000 名市民受益。'
        },
        {
          title: '製作教育資料',
          description:
            '出版寵物飼養手冊、影片和線上課程，\n讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。'
        }
      ]
    }
  ]
  return (
    <section>
      <h2 className="hidden">政策議題</h2>
      <div className="flex">
        <ul className="flex-[0_0_50%] px-10">
          {policy.map(({ title, items }, index) => (
            <li key={title} className={cn(activeIndex !== index && 'hidden')}>
              <h3 className="text-secondary">
                <div className="title">政策 No.{index + 1}</div>
                <div className="title subtitle">{title}</div>
              </h3>
              <ul>
                {items.map(({ title, description }, itemIndex) => (
                  <li key={title}>
                    <h4 className="title subtitle">
                      0{itemIndex + 1} {title}
                    </h4>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex-[0_0_50%] px-10">
          <div className="h-96 bg-red-300"></div>
        </div>
      </div>
    </section>
  )
}

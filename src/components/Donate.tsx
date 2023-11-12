import { useId } from 'react'
import Button from './shared/Button'

export default function Donate() {
  const id = useId()
  const inputId = `donate-${id}`
  const donate = [
    {
      title: '喵星人之友',
      value: 600,
      sponsored: 9957
    },
    {
      title: '喵星大使',
      value: 6000,
      sponsored: 2000
    },
    {
      title: '喵星傳奇',
      value: 60000,
      sponsored: 999
    }
  ]
  return (
    <section>
      <h3 className="title text-primary text-center">
        您的小筆捐款，是每隻毛孩未來的大大動力！
      </h3>
      <p className="title title-1 text-primary-light text-center">
        目前贊助總金額：NT$ 987,655,873
      </p>
      <ul className="flex justify-center gap-10 text-primary">
        {donate.map(({ title, value, sponsored }) => (
          <li
            key={title}
            className="flex items-center flex-col px-4 py-8 min-w-[240px] bg-basic-white border border-primary rounded-[20px] shadow-[6px_8px_#FADCA8]"
          >
            <div className="title title-1 mb-4">「 {title} 」</div>
            <div className="fz-lg mb-10">
              捐款新台幣{value.toLocaleString('zh')}元
            </div>
            <Button>馬上支持 !</Button>
            <div className="mt-1">
              已有 {sponsored.toLocaleString('zh')} 人贊助
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center">
        <div className="title title-1 text-primary mb-4">
          「 自訂贊助金額 」
        </div>
        <div className="fz-lg text-primary-light mb-4">
          目前小額贊助總金額：NT$ 655,873
        </div>
        <div className="flex border-b-2 border-primary w-[416px]">
          <label htmlFor={inputId} className="fz-lg font-bold text-primary">
            NT$
          </label>
          <input
            id={inputId}
            className="bg-transparent flex-grow focus:outline-none"
          />
        </div>
        <Button className="mt-8">馬上支持 !</Button>
      </div>
    </section>
  )
}

import Button from './shared/Button'
import Input from './shared/Input'

export default function Service() {
  const description =
    '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。\n分享您的想法，一同為我們的未來打造更美好！'
  return (
    <section>
      <h3 className="title text-primary text-center">您的聲音，我們的行動！</h3>
      <p className="whitespace-pre-wrap fz-lg text-center">{description}</p>
      <form>
        <div className="flex p-5 gap-20">
          <div className="flex-grow">
            <Input type="text" label="您的姓名" name="name" />
            <Input type="email" label="您的Email" name="email" />
            <Input type="tel" label="您的手機" name="phone" />
          </div>
          <div className="flex-grow">
            <Input type="textarea" label="您的建言" name="note" rows={7} />
          </div>
        </div>
        <div className="text-center">
          <Button className="w-[400px]">送出</Button>
        </div>
        <p className="text-primary text-center">為了喵喵站出來！</p>
      </form>
    </section>
  )
}

export default function Banner() {
  const text = [
    '我堅信，藉由',
    '推動更完善的貓咪福利和相關政策',
    '，更是間接地投資於台灣的未來。\n畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。\n透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。\n因此，我期望能在立法院內推進這些政策，',
    '確保每一隻貓咪都能得到他們應有的照顧',
    '，\n同時也為台灣的經濟發展助一臂之力。'
  ]
  return (
    <section>
      <h1 className="headline text-primary flex justify-between">
        <span>喵的未來</span>
        <span>人的希望</span>
      </h1>
      <h2 className="gaegu text-center text-primary">
        <span className="headline headline-1">喵立翰</span> Miao Li-Han
      </h2>
      <p className="whitespace-pre-wrap fz-lg text-center">
        {text.map((item, index) =>
          index % 2 ? (
            <b key={item} className="text-primary">
              {item}
            </b>
          ) : (
            item
          )
        )}
      </p>
      <h3 className="title title-1 text-primary text-center">
        讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始！
      </h3>
    </section>
  )
}

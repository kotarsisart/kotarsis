import './_back-reveal.scss'

export default function BackReveal() {
  return (
    <section className="face back reveal">
      <h2 className="reveal__title">
        Ты действительно выбрал сторону?
      </h2>
      <h3 className="reveal__or">
        Или...
      </h3>
      <p className="reveal__conclusion">
        она выбрала тебя?
      </p>
    </section>
  )
}
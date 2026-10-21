import './_bottom-choice.scss'

export default function BottomChoice() {
  return (
    <section className="face bottom choice">
      <h2 className="choice__title">
        Как и всегда, человечество придумало простой способ.
      </h2>
      <h3 className="choice__subline">
        Достаточно разделить людей на две категории.
      </h3>
      <div className="choice__separation">
        <p className="choice__separation-text">
          ← Пессимисты
        </p>
        <p className="choice__separation-text">
          Оптимисты →
        </p>
      </div>
    </section>
  )
}
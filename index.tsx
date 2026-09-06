import { createFileRoute } from '@tanstack/react-router'
import { Archive } from '../components/Archive'
import { getArchive } from '../server/records'

export const Route = createFileRoute('/')({
  loader: () => getArchive(),
  component: Home,
})

const CYCLE_IMAGE = '/img/knowledge-cycle.png'

/** Netlify Image CDN keeps the infographic off the critical path and in WebP. */
function cycleSrc(width: number) {
  return `/.netlify/images?url=${encodeURIComponent(CYCLE_IMAGE)}&w=${width}&fm=webp&q=82`
}

const STEPS = [
  {
    number: '01',
    icon: '📚',
    titleFa: 'گام اول: تجمیع منابع',
    titleEn: 'Resource Aggregation',
    bodyFa:
      'شناسایی، جمع‌آوری و ایجاد دسترسی یکپارچه به تمامی کتاب‌ها، مقالات معتبر، و اسناد تاریخی مرتبط با تمدن غزنی در یک پایگاه دیجیتال.',
    bodyEn:
      'Identify, collect, and provide unified digital access to all credible open-source books, peer-reviewed articles, and historical documents related to Ghazni.',
  },
  {
    number: '02',
    icon: '🔄',
    titleFa: 'گام دوم: ترجمه و بومی‌سازی',
    titleEn: 'Translation & Localization',
    bodyFa:
      'ترجمه پژوهش‌ها و مقالات ارزشمند غربی و بین‌المللی به زبان فارسی/دری جهت استفاده پژوهشگران، دانشجویان و جوانان محلی.',
    bodyEn:
      'Translate vital Western and international academic research into Dari/Persian to empower local researchers, students, and youth.',
  },
  {
    number: '03',
    icon: '🎙️',
    titleFa: 'گام سوم: تولید محتوا و ترویج',
    titleEn: 'Multimedia Production',
    bodyFa:
      'شناسایی خلأهای پژوهشی و تبدیل منابع علمی به محتوای چندرسانه‌ای نظیر پادکست، ویدیوهای آموزشی و کتاب‌های داستان کودکان.',
    bodyEn:
      "Identify research gaps and transform academic materials into accessible multimedia formats like podcasts, educational videos, and children's literature.",
  },
  {
    number: '04',
    icon: '🔎',
    titleFa: 'گام چهارم: پژوهش و بازنشر',
    titleEn: 'Research & Redissemination',
    bodyFa:
      'شناسایی خلأهای علمی، همکاری با پژوهشگران برای تولید دانش جدید و نشر مجدد آن در پایگاه.',
    bodyEn:
      'Identify remaining scholarly gaps and collaborate with researchers to produce new knowledge and redistribute it back through the archive.',
  },
]

function Home() {
  const { records, unavailable } = Route.useLoaderData()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Shahryar Virtual Library',
    alternateName: 'کتابخانه و مرکز اسناد شهریار',
    description:
      'A bilingual bibliography of sources on the history, culture, archaeology, and literature of Ghazni.',
    inLanguage: ['fa-AF', 'en'],
    isPartOf: {
      '@type': 'Organization',
      name: 'Shahryar Foundation',
      alternateName: 'بنیاد شهریار',
    },
    about: { '@type': 'Place', name: 'Ghazni, Afghanistan' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero / Preface */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow-mark" aria-hidden="true" />
          <h1 className="dari-text">پیشگفتار</h1>
          <h1 className="en-text">Preface</h1>

          <div className="hero-content dari-text">
            <p>
              غزنی در طول سده‌های متمادی یکی از درخشان‌ترین کانون‌های تمدنی، هنر و دانش در منطقه
              بوده است. از عصر طلایی امپراتوری غزنویان تا نقش‌آفرینی پایدار آن به‌عنوان چهارراه
              فرهنگی، تاریخ این دیار با شکوفایی علم و زبان پارسی پیوندی ناگسستنی دارد. این
              کتاب‌شناسی جامع به همت بنیاد شهریار و در راستای ابتکار «غزنوی به غزنوی» تدوین گردیده
              است. هدف ما تنها مستندسازی نیست، بلکه ایجاد بستری برای تقویت بنیه‌های علمی، فرهنگی و
              اجتماعی جامعه غزنویان است.
            </p>
          </div>

          <div className="hero-content en-text">
            <p>
              For centuries, Ghazni has stood as one of the most vibrant centers of civilization,
              art, and Islamic scholarship. From its golden age under the Ghaznavid Empire to its
              enduring legacy as a cultural crossroad, the history of Ghazni is deeply intertwined
              with the development of science, literature, and the Persian language. This
              bibliography is published by the Shahryar Foundation under the G to G Initiative to
              bridge the gap between Ghaznavians inside Afghanistan and the global diaspora.
            </p>
          </div>

          <div className="hero-divider" aria-hidden="true">
            <span className="rule" />
            <span />
            <span className="rule" />
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="roadmap">
        <div className="section-head">
          <h2 className="dari-text">چرخه دانش و احیای فرهنگی</h2>
          <h2 className="en-text">The Knowledge &amp; Cultural Revival Cycle</h2>
          <div className="rule" />
        </div>

        {/* The diagram is labelled in Dari, so it is shown only in Dari. English
            readers get the same four stages as the cards below. */}
        <div className="cycle-image-wrap dari-text">
          <img
            src={cycleSrc(920)}
            srcSet={`${cycleSrc(640)} 640w, ${cycleSrc(920)} 920w, ${cycleSrc(1240)} 1240w`}
            sizes="(max-width: 1000px) 100vw, 920px"
            width={1024}
            height={559}
            loading="lazy"
            decoding="async"
            alt="چرخه دانش و احیای فرهنگی: گردآوری و انسجام، ترجمه و بومی‌سازی، تولید محتوا و رسانه، پژوهش و بازنشر"
          />
        </div>

        <div className="steps-container">
          {STEPS.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div className="step-icon" aria-hidden="true">
                {step.icon}
              </div>
              <h3 className="dari-text">{step.titleFa}</h3>
              <h3 className="en-text">{step.titleEn}</h3>
              <p className="dari-text">{step.bodyFa}</p>
              <p className="en-text">{step.bodyEn}</p>
            </div>
          ))}
        </div>
      </section>

      <Archive records={records} unavailable={unavailable} />
    </>
  )
}

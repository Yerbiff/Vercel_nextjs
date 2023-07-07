// import styles from '../styles
import wizja from "../public/images/posts/wizja.jpg"
import i2 from "../public/images/posts/02.jpg"
import i3 from "../public/images/posts/03.jpg"
import i4 from "../public/images/posts/04.jpg"
import i5 from "../public/images/posts/individual.jpg"
import Image from 'next/image';

const LandingPage = () => {
  return (
    <section className="section">
      <div className="container">
          <Image
            src={wizja}
            alt="Obrazek"
            className="mx-auto rounded-lg"
            width={1000}
            height={400}
          />
        <h2 className="title">Zamień swoją wizję w rzeczywistość!</h2>
        <p className="subtitle">
          Witaj w Twojej agencji reklamowej, która pomoże Ci dotrzeć do szerokiego audytorium i skutecznie promować Twoją
          markę. Działamy w oparciu o nasze wieloletnie doświadczenie i pasję, aby dostarczać kreatywne i innowacyjne
          rozwiązania reklamowe.
        </p>
        <div >
          <h3 >
            Dlaczego wybrać naszą agencję?
          </h3>
          <ul >
            <li>
              <Image
                className="mx-auto rounded-lg"
                src={i2}
                alt="Mniejszy obrazek 2"
                width={500}
                height={200}
              />
              Kreujemy unikalne kampanie reklamowe: Nasz zespół kreatywnych projektantów, copywriterów i specjalistów od
              marketingu doskonale rozumie, jak przyciągnąć uwagę Twojej grupy docelowej. Tworzymy spersonalizowane
              strategie, które wyróżniają Twoją markę spośród konkurencji.
            </li>
            <li >
              <Image
                className="mx-auto rounded-lg"
                src={i3}
                alt="Mniejszy obrazek 3"
                width={500}
                height={200}
              />
              Zajmujemy się różnorodnymi kanałami reklamowymi: Niezależnie od tego, czy potrzebujesz kampanii w mediach
              społecznościowych, projektowania graficznego, tworzenia treści na stronę internetową lub produkcji wideo,
              jesteśmy gotowi dostarczyć pełen zakres usług reklamowych.
            </li>
            <li >
              <Image
                className="mx-auto rounded-lg"
                src={i4}
                alt="Mniejszy obrazek 4"
                width={500}
                height={200}
              />
              Skuteczne rezultaty: Nasze działania reklamowe opierają się na badaniach i analizie rynku. Dążymy do
              osiągnięcia mierzalnych wyników, które przekładają się na wzrost Twojego biznesu. Celem naszej agencji jest
              zapewnienie Ci zwrotu z inwestycji.
            </li>
            <li>
              <Image
                className="mx-auto rounded-lg"
                src={i5}
                alt="Mniejszy obrazek 5"
                width={500}
                height={200}
              />
              Indywidualne podejście: Zrozumienie Twoich celów i oczekiwań jest dla nas kluczowe. Dlatego skupiamy się na
              budowaniu trwałych relacji z naszymi klientami i dostosowaniu naszych usług do Twoich potrzeb. Jesteśmy
              tutaj, aby Ci pomóc od startu do mety.
            </li>
          </ul>
        </div>
        <p>
          Skontaktuj się z nami już dziś, aby rozpocząć nową erę dla Twojej marki!
        </p>
        <button className="contactButton">Skontaktuj się</button>
      </div>
    </section>
  );
}

export default LandingPage;
import Link from "next/link"

const LandingPage = () => {
  return (
    <div>
    <Hero />
    <Services/>
    <Featured/>
    <Finisher/>
    <Contact/>
   
    </div>
  
  );
}

export default LandingPage;


/// Page Sections
const Hero = () => (<div className="relative pt-16 pb-32 flex content-center items-center justify-center"
  style={{
    minHeight: "75vh"
  }}>
  <div className="absolute top-0 w-full h-full bg-center bg-cover"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80')"
    }}>
    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
  </div>
  <div className="container relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
        <div className="pr-12">
        <h1 className="text-white font-semibold text-5xl">
            Twoja marka, nasza pasja.
              </h1>
          <p className="mt-4 text-lg text-gray-300">
            Wykorzystujemy najnowsze trendy i innowacyjne rozwiązania, aby pomóc Twojej marce osiągnąć sukces. Z nami Twoja historia reklamy nabierze życia i przyciągnie uwagę Twojej docelowej grupy odbiorców.
              </p>
        </div>
      </div>

    </div>
  </div>
  <div
    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
    style={{ height: "70px" }}
  >
    <svg
      className="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="text-gray-300 fill-current"
        points="2560 0 2560 100 0 100"
      ></polygon>
    </svg>
  </div>
</div>)

const Services = () => <section className="pb-20 bg-gray-300 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            ⭐
            </div>
            <h6 className="text-xl font-semibold">
              Nagradzana Agencja
              </h6>
            <p className="mt-2 mb-4 text-gray-600 justify">
              Jesteśmy doceniani za naszą doskonałą pracę. Nasza agencja zdobyła wiele prestiżowych nagród, które świadczą o naszym profesjonalizmie . Dzielimy się naszymi  umiejętnościami, aby zapewnić naszym klientom najwyższy poziom usług. Razem możemy osiągnąć większe sukcesy i zbudować silną markę.
              </p>
              </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
            ❤
            </div>
            <h6 className="text-xl font-semibold">
              Darmowe Poprawki
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Dbałość o zadowolenie naszych klientów jest dla nas priorytetem. Oferujemy możliwość darmowych poprawek, aby zapewnić Ci pełną satysfakcję z naszych usług. Nasz zespół zawsze stara się przekroczyć oczekiwania klientów i dostarczyć im najwyższą jakość. Dzięki temu możesz być pewien, że Twoje potrzeby zostaną odpowiednio uwzględnione i spełnione.
              </p>
          </div>
        </div>
      </div>

      <div className="pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
            👍
            </div>
            <h6 className="text-xl font-semibold">
              Zweryfikowana Firma
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Nasza firma przeszła proces weryfikacji, co świadczy o naszym profesjonalizmie i zaufaniu naszych klientów. Działamy zgodnie z najwyższymi standardami i dostarczamy usługi najwyższej jakości. Nasza wiarygodność i solidne doświadczenie sprawiają, że możesz nam zaufać w realizacji Twoich celów marketingowych.
              </p>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-wrap items-center mt-32">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <i className="fas fa-user-friends text-xl"></i>
        </div> */}
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Zamień swoją wizję w rzeczywistość!
          </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
        Witaj w Twojej agencji reklamowej, która pomoże Ci dotrzeć do szerokiego audytorium i skutecznie promować Twoją
          markę. Działamy w oparciu o nasze wieloletnie doświadczenie i pasję, aby dostarczać kreatywne i innowacyjne
          rozwiązania reklamowe.
          </p>

      </div>

      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-teal-500">
          <img
            alt="..."
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-teal-500 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Usługi Najwyższej Jakości
              </h4>
            <p className="text-md font-light mt-2 text-white">
              Twoja marka zasługuje na wyjątkową promocję i profesjonalne podejście. Pozwól nam pomóc Ci osiągnąć sukces i wyróżnić się spośród konkurencji.
              </p>
          </blockquote>
        </div>
      </div>

    </div>
  </div>
</section>

const Featured = () =>  <section className="relative py-20">
<div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style={{ height: "80px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-white fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4">
  <div className="items-center flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
      <div className="md:pr-12">
        {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
          <i className="fas fa-rocket text-xl"></i>
        </div> */}
        <h3 className="text-3xl font-semibold">
        Dlaczego wybrać naszą agencję?
            </h3>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
        Nasz zespół kreatywnych projektantów, copywriterów i specjalistów od
        marketingu doskonale rozumie, jak przyciągnąć uwagę Twojej grupy docelowej. Tworzymy spersonalizowane
        strategie, które wyróżniają Twoją markę spośród konkurencji.
            </p>
        <ul className="list-none mt-6">
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                  <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">
                  Zajmujemy się różnorodnymi kanałami reklamowymi
                </h5>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">Skuteczne rezultaty</h5>
              </div>
            </div>
          </li>
          <li className="py-2">
            <div className="flex items-center">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 mr-3">
                <i className="fas fa-fingerprint">-</i>
                </span>
              </div>
              <div>
                <h5 className="text-gray-600">Indywidualne podejście</h5>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>


const Finisher = ()=><section className="pb-20 relative block bg-gray-900">
<div
  className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
  style={{ height: "80px" }}
>
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon
      className="text-gray-900 fill-current"
      points="2560 0 2560 100 0 100"
    ></polygon>
  </svg>
</div>

<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
  <div className="flex flex-wrap text-center justify-center">
  <div className="w-full lg:w-6/12 px-4">
      <h2 className="text-4xl font-semibold text-white">
        Stwórz coś wyjątkowego
          </h2>
      <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
        Wykorzystajmy potencjał innowacyjnych rozwiązań, aby osiągnąć efektywność w budowaniu Twojej marki.
          </p>
    </div>
  </div>
  <div className="flex flex-wrap mt-12 justify-center">
    <div className="w-full lg:w-3/12 px-4 text-center">
      {/* <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-medal text-xl"></i>
      </div> */}
      <h6 className="text-xl mt-5 font-semibold text-white">
        Kreatywne rozwiązania
      </h6>
      <p className="mt-2 mb-4 text-gray-500">
        Wykorzystujemy nasze doświadczenie i wiedzę, aby dostarczać kreatywne i efektywne rozwiązania reklamowe dla naszych klientów.
      </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      {/* <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-poll text-xl"></i>
      </div> */}
      <h5 className="text-xl mt-5 font-semibold text-white">
        Zwiększ swoją widoczność
      </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Pomagamy naszym klientom w budowaniu silnej obecności w mediach społecznościowych i zwiększaniu ich widoczności na rynku.
      </p>
    </div>
    <div className="w-full lg:w-3/12 px-4 text-center">
      {/* <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
        <i className="fas fa-lightbulb text-xl"></i>
      </div> */}
      <h5 className="text-xl mt-5 font-semibold text-white">
        Kreuj innowacyjne kampanie
      </h5>
      <p className="mt-2 mb-4 text-gray-500">
        Nasza agencja reklamowa pomaga w tworzeniu innowacyjnych i efektywnych kampanii marketingowych, które przyciągają uwagę i generują wyniki.
      </p>
    </div>
</div>
</div>
</section>

const Contact = ()=>  <section className="relative block py-24 lg:pt-0 bg-gray-900">
<div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
    <div className="w-full lg:w-6/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
        <div className="flex-auto p-5 lg:p-10">
          <h4 className="text-2xl font-semibold">
              Chcesz z nami pracować? 
              </h4>
          <p className="leading-relaxed mt-1 mb-4 text-gray-600">
            Wybierz plan który najbardziej ci odpowiada i zacznijmy współprace wciągu 24 godzin.
              </p>
          
          <div className="text-center mt-6">
            <Link href="cennik">
            <button
              className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              Wybierz plan
                </button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

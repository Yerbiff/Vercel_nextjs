import Link from "next/link";

const Oferta = () => {
  const cities = [
    { name: 'Wrocław', slug: 'wroclaw' },
    { name: 'Bydgoszcz', slug: 'bydgoszcz' },
    { name: 'Lublin', slug: 'lublin' },
    { name: 'Zielona Góra', slug: 'zielona-gora' },
    { name: 'Łódź', slug: 'lodz' },
    { name: 'Kraków', slug: 'krakow' },
    { name: 'Warszawa', slug: 'warszawa' },
    { name: 'Opole', slug: 'opole' },
    { name: 'Rzeszów', slug: 'rzeszow' },
    { name: 'Białystok', slug: 'bialystok' },
    { name: 'Gdańsk', slug: 'gdansk' },
    { name: 'Katowice', slug: 'katowice' },
    { name: 'Kielce', slug: 'kielce' },
    { name: 'Olsztyn', slug: 'olsztyn' },
    { name: 'Poznań', slug: 'poznan' },
    { name: 'Szczecin', slug: 'szczecin' },
  ];
  return (
    
    <div class="container">
      <h3>Działamy w</h3>
        <div className="flex flex-wrap">
        {cities.map((city, index) => (
        <div className="w-full sm:w-1/2 md:w-1/4" key={index}>
            <h3 className="h6 mb-1">
            <Link className="block hover:text-primary" href={`${city.slug}`}>{city.name}</Link>
            </h3>
        </div>
        ))}
    </div>
  </div>
  );
}

export default Oferta;
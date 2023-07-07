import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Pakiety = ({ pakiety }) => {
  return (
    <div className="row justify-center">
      {pakiety.map((pakiet, i) => (
        <div className="col-12 mb-8 sm:col-6 md:col-4" key={`key-${i}`}>
          {pakiet.frontmatter.image && (
            <div className="mb-4">
              <Image
                src={pakiet.frontmatter.image}
                alt={pakiet.frontmatter.title}
                height="300"
                width="300"
                className="rounded-lg"
              />
            </div>
          )}
          <h3 className="h4 mb-2">
            <Link
              href={`/pakiety/${pakiet.slug}`}
              className="block hover:text-primary"
            >
              {pakiet.frontmatter.title}
            </Link>
          </h3>
          {markdownify(pakiet.content.slice(0, 120), "p")}
        </div>
      ))}
    </div>
  );
};

export default Pakiety;

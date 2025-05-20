import Image from 'next/image';
import { CircleArrowDown } from 'lucide-react';

export default function HeroComponent() {
  return (
    <div>
      <div>
        <Image
          src="/apple-icon.png"
          height={200}
          width={200}
          alt="green waste trucks hero image"
        />
        <h1>
          Sustainable Waste Solutions for a <span>Greener Future</span>
        </h1>
        <Image
          src="/apple-icon.png"
          height={200}
          width={200}
          alt="multiple hands planting a tree"
        />
        <p>
          SoilAid Technologies, founded in 2023 in Kirinyaga County, integrates
          waste and farm management technologies to improve soil health, reduce
          waste, and foster environmental sustainability in Kenya.
        </p>
      </div>
      <div>
        <CircleArrowDown />
      </div>
    </div>
  );
}

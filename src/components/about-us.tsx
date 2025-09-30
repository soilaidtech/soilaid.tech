import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function AboutUsComponent() {
  return (
    <div>
      <div>
        <Image
          src="/apple-icon.png"
          height={100}
          width={100}
          alt="one hand planting tree"
        />
        <div>
            <p>Recycled waste</p>
            <p>Total Tonnes Recycled</p>
            <p>2,453</p>
            <ArrowUp /> 80%
            <div>GRAPH</div>
        </div>
      </div>
      <div>
        <h2>About Us</h2>
        <p>Transforming Waste into Thriving Farms</p>
        <p>
          SoilAid Technologies is a sustainability company based in Kirinyaga
          County, established in 2023.
        </p>
        <ul>
          <li>Leveraging Technology to Reduce Waste</li>
          <li>Boost Soil Health</li>
          <li>Promote livestock health</li>
        </ul>
        <button type="button">More About Us</button>
      </div>
    </div>
  );
}

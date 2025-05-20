import Image from 'next/image';

export default function OurProcessComponent() {
  return (
    <div>
      <h2>Our Process</h2>
      <p>Our Process </p>
      <p>We Promote Sustainable Waste Recycling in Kenya</p>
      <div>
        <div>
          <Image
            src="/garbage-truck-trash-svgrepo-com 1.png"
            height={100}
            width={100}
            alt="garbage-truck-trash-svg"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

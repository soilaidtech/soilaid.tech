import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image src="/apple-icon.png" width={100} height={40} alt="SOILAID LOGO" />
      <h1>SOILAID Technologies</h1>
    </div>
  );
}

import Image from "next/image";

export default function Banner() {
  return (
    <header className="py-2 bg-light border-bottom mb-4">
      <div className="container">
        <Image
          src="/images/our-team.jpg"
          alt="Logo"
          width={1500}
          height={500}
        />

        <p className="lead mb-0">
          Where Bitcoin NFTs come to life with unique personalities and stories.
          Its a quirky and imaginative space that explores the potential of
          Ordinals NFTs
        </p>
      </div>
    </header>
  );
}

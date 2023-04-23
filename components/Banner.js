import Image from "next/image";

export default function Banner() {
  return (
    <header className="py-2 bg-light border-bottom mb-4">
      <div className="container">
        <div className="text-center my-5">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={100}
            height={100}          
          />
          <h1 className="fw-bolder">The Digital Character Cafe</h1>
          <p className="lead mb-0">Where Bitcoin NFTs come to life with unique personalities and stories. Its a quirky and imaginative space that explores the potential of Ordinals NFTs</p>
        </div>
      </div>
    </header>
  );
}

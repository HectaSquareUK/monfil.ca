import Image from 'next/image';

export default function Home() {
  return (
    <main className="main-content">
      <div className="hero-section">
        <div className="hero-text">
          <p className="breadcrumb">Fil à coudre / SuperSew / Sewing Thread</p>
          <h1>3.99$ for 3000 meter cones</h1>
        </div>
        <div className="hero-discount">
          <p>-25% on all colors (excluding white and black)</p>
        </div>
      </div>
      <div className="trending-grid">
        <div className="trending-item">
          <Image src="/trending1.png/12.png" alt="Trending item 1" width={200} height={200} />
          <p>Trending item 1</p>
        </div>
        <div className="trending-item">
          <Image src="/trending2.png/13.png" alt="Trending item 2" width={200} height={200} />
          <p>Trending item 2</p>
        </div>
        <div className="trending-item">
          <Image src="/trending3.png" alt="Trending item 3" width={200} height={200} />
          <p>Trending item 3</p>
        </div>
        <div className="trending-item">
          <Image src="/trending4.png" alt="Trending item 4" width={200} height={200} />
          <p>Trending item 4</p>
        </div>
        <div className="trending-item">
          <Image src="/trending5.png" alt="Trending item 5" width={200} height={200} />
          <p>Trending item 5</p>
        </div>
      </div>
    </main>
  );
}

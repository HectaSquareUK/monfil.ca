import Image from 'next/image';

export default function Home() {
  return (
    <main className="main-content">
      <div className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
          <Image src="/trending3.png/3.jpeg" alt="Trending item 3" width={200} height={200} />
          <p>Trending item 3</p>
        </div>
        <div className="trending-item">
          <Image src="/trending4.png/4.jpeg" alt="Trending item 4" width={200} height={200} />
          <p>Trending item 4</p>
        </div>
        <div className="trending-item">
          <Image src="/trending5.png/5.jpeg" alt="Trending item 5" width={200} height={200} />
          <p>Trending item 5</p>
        </div>
      </div>
    </main>
  );
}

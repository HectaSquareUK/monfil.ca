import Image from 'next/image';

export default function LatestTrends() {
  return (
    <div className="main-content">
      <div className="main-heading">
          THE LATEST TRENDS.
          <div className="styled-text">STYLED.</div>
      </div>
      <div className="trends-grid">
          <div className="trend-item">
              <Image src="https://via.placeholder.com/280x400/D3D3D3/000000?text=Faux+Leather+Looks" alt="Faux Leather Looks" width={280} height={400} />
              <p>FAUX LEATHER LOOKS</p>
          </div>
          <div className="trend-item">
              <Image src="https://via.placeholder.com/280x400/D3D3D3/000000?text=Checks+%26+Tartan" alt="Checks & Tartan" width={280} height={400} />
              <p>CHECKS & TARTAN</p>
          </div>
          <div className="trend-item">
              <Image src="https://via.placeholder.com/280x400/D3D3D3/000000?text=Faux+Fur" alt="Faux Fur" width={280} height={400} />
              <p>FAUX FUR</p>
          </div>
          <div className="trend-item">
              <Image src="https://via.placeholder.com/280x400/D3D3D3/000000?text=Taitha+Simmons+Edit" alt="Taitha Simmons Edit" width={280} height={400} />
              <p>TAITHA SIMMONS EDIT</p>
          </div>
      </div>
    </div>
  );
}

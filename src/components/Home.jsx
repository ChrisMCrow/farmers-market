import React from 'react';

function Home() {
  return(
    <div>
      <style jsx>{`
        .image {
          text-align: center;
          color: white;
        }
        .image img {
          border: 5px solid black;
        }
        .image h5 {
          margin: -50px;
        }
      `}</style>
      <div className="image">
        <img src="https://www.clickandgo.com/promos/blog/uzbeki-farmers.jpg" />
        <h5>"Yer gunna love my yams"</h5>
      </div>
    </div>
  );
}

export default Home;
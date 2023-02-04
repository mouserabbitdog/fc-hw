const prototypes = [
  {
    id: "pp-01",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
  },
  {
    id: "pp-02",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital product",
    thumbnail:
      "https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
  },
];

export default function Prototypes() {
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } =
            prototype;
          return (
            <div className="prototypes" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div style={{ padding: "25px 0 35px 0" }}>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                  <p className="prototype__price">$ {price}</p>
                  <p className="prototype__desc">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

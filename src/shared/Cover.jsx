
const Cover = ({ bgImg, title, subTitle }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="w-10/12 mx-auto p-24 text-center text-white bg-[#0000006e]">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="text-lg text-gray-300">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
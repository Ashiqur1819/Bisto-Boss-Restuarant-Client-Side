

const SectionTitle = ({heading, subHeading}) => {
    return (
      <div className="mx-auto md:w-96 text-center mt-20 mb-12">
        <p className="text-lg font-medium text-[#D99904] mb-3">---{subHeading}---</p>
        <h2 className="text-4xl font-semibold uppercase border-y-4 py-3">{heading}</h2>
      </div>
    );
};

export default SectionTitle;
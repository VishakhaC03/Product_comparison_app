function About() {

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-purple-300
      p-6
    ">

      <div className="
        bg-white
        shadow-xl
        rounded-2xl
        p-10
        max-w-3xl
      ">

        <h1 className="
          text-4xl
          font-bold
          mb-6
          text-purple-900
        ">
          About This App
        </h1>

        <p className="
          text-lg
          text-purple-700
          leading-8
        ">
          This Product Comparison App
          helps users compare multiple
          products side-by-side,
          analyze specifications,
          and choose the best product
          based on their needs.
        </p>

      </div>

    </div>

  );
}

export default About;
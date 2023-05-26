import Feed from "../components/Feed";
import Image from "next/image";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col black-gradient-bg">
      <h1 className="head_text text-center pink_gradient">
        TuneForge
        <br className="max-md:hidden" />
        <span className="pink_gradient text-center">AI-Powered Melodies</span>
      </h1>
      <p className="desc text-center">
        TuneForge is an innovative application that harnesses the cutting-edge
        technology developed by OpenAI to revolutionize the process of creating
        melodies. With TuneForge, music enthusiasts and creators can embark on a
        journey of limitless possibilities, crafting captivating melodies that
        resonate with their artistic vision. By leveraging the immense
        capabilities of artificial intelligence, TuneForge empowers users to
        input their desired parameters and preferences, allowing the AI-powered
        engine to generate unique and inspiring melodies tailored to their
        specific needs. Whether you're a composer seeking fresh musical ideas or
        an aspiring artist searching for the perfect melody to accompany your
        lyrics, TuneForge serves as your creative companion, delivering
        harmonies that transcend imagination. Once the melodies take shape,
        seamlessly integrate them into your favorite digital audio workstation
        (DAW) of choice to unleash the full potential of your musical vision.
        Step into the realm of endless musical innovation with TuneForge and
        unlock a new era of melody creation like never before.
      </p>
      <br />

      <Feed />
    </section>
  );
};

export default Home;

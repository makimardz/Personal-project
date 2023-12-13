import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Share and Find
      <br className='' />
      <span className='orange_gradient text-center'> Best Portfolio For Your Profile</span>
    </h1>
    <p className='desc text-center'>
      Motivate yourself and others.
    </p>

    <Feed />
  </section>
);

export default Home;

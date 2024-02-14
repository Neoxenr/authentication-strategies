import { useAuthGuard } from '../../hooks/useAuthGuard';

const Home = () => {
  useAuthGuard({ email: 'test' });

  return <div>home</div>;
};

export default Home;

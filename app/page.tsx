import BottomNavbar from '@/components/layout/bottom-nav';
import HomeMain from '@/components/pages/home/Home';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <HomeMain />
      <BottomNavbar />
    </div>
  );
}

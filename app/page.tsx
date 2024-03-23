import lock from '../public/lock.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({ subsets: ['latin'], weight: '600' });

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400 to-sky-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          <span className="relative inline-block mb-[-1rem]">
            <Image src={lock} alt="lock" width={75} height={75} />
          </span>{' '}
          Auth
        </h1>
        <p className="text-lg text-white text-center">
          Simple Authentication Service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg" className="mx-auto">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

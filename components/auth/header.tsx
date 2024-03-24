import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import lock from '@/public/images/lock.png';
import Image from 'next/image';

const font = Poppins({ subsets: ['latin'], weight: '600' });

interface HeaderProps {
  label: string;
  className?: string;
}

export const Header = ({ label, className }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn('text-3xl font-semibold', font.className)}>
        <span className="relative inline-block mb-[-0.7rem]">
          <Image src={lock} alt="lock" width={50} height={50} />
        </span>
        Auth
      </h1>
      <p className={`${className} "text-muted-foreground text-sm"`}>{label}</p>
    </div>
  );
};

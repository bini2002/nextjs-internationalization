import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');

  const locale  = ['en']

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-200">
      <div className='flex gap-x-4'>
        <Link href={`/${locale}`}>
          <span>{t('home')}</span>
        </Link>
        <Link href={`/${locale}/about`}>
          <span>{t('about')}</span>
        </Link>
        <Link href={`/${locale}/services`}>
          <span>{t('services')}</span>
        </Link>
        <Link href={`/${locale}/contact`}>
          <span>{t('contact')}</span>
        </Link>
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-x-2 mb-8">
        <Link href="/en" locale="en">
          <span className="text-blue-600 hover:underline">English</span>
        </Link>
        <Link href="/es" locale="es">
          <span className="text-blue-600 hover:underline">Español</span>
        </Link>
        <Link href="/zh" locale="zh">
          <span className="text-blue-600 hover:underline">中文</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

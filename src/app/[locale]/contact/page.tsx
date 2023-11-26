import Navbar from '@/app/[locale]/Components/Navbar';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <>
    <Navbar />
    <section className='m-8 lg:m-16 '>
    <div className="h-[75vh] flex flex-col items-center justify-center p-8 lg:p-20 bg-blue-100">
      <h1 className="text-2xl lg:text-6xl text-center font-bold mb-4">{t('title')}</h1>
      <p className="text-lg text-center mb-6">{t('content')}</p>
    </div>
    </section>
    </>
  );
};

export default Contact;
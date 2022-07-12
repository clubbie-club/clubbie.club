import splitbee from "@splitbee/web";
import { m } from "framer-motion";
import Head from "next/head";
import { FormEvent, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const handleLinkClick = (destination: string) => {
  splitbee.track("Link click", {
    destination,
  });
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    event.preventDefault();
    const value = emailInputRef.current?.value;

    const _submitData = async () => {
      if (value) {
        await splitbee.track("Form submit", {
          email: value,
        });
        await splitbee.user.set({
          userId: value,
        });
        emailInputRef.current.value = "";
        setIsSubmitting(false);
      }
    };

    toast.promise(
      _submitData(),
      {
        loading: "Отправка...",
        success: "Мы скоро свяжемся",
        error: "Упс, что-то пошло не так",
      },
      {
        style: {
          backgroundColor: "white",
          color: "#18181b",
          fontWeight: 700,
          fontFamily: "Raleway, sans-serif",
          borderRadius: 16,
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        iconTheme: {
          primary: "#18181b",
          secondary: "#f4f4f5",
        },
      }
    );
  };

  return (
    <div>
      <Head>
        <meta name="title" content="Clubbie.club" />
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Цифровое агенство, предоставляющее услуги по созданию веб-сайтов и веб-приложений"
        />
        <meta
          name="keywords"
          content="агенство,разработка,веб-сайт,веб-приложения"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Clubbie.club" />
      </Head>
      <Toaster />
      <div className="flex min-h-screen flex-col px-4 py-6 sm:px-12">
        {/* Header */}
        <m.header
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
          }}
          className="hidden items-center justify-between sm:flex"
        >
          <span className="font-semibold">clubbie/club</span>
          <a
            href="#contact"
            onClick={() => handleLinkClick("Contact form")}
            className="rounded-2xl bg-white px-8 py-4 font-bold text-zinc-900 shadow-[0_0_0_0px_#FFFFFF] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_8px_#FFFFFF] focus:shadow-[0_0_0_8px_#FFFFFF] focus:outline-none"
          >
            Стать партнерами
          </a>
        </m.header>
        {/* /Header */}
        <main className="mt-12 flex flex-1 flex-col">
          {/* Hero */}
          <m.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-[32px] font-bold leading-tight sm:text-[42px]"
          >
            Разработка - это искусство, <br className="hidden sm:inline" /> а мы
            черепашки ниндзя
          </m.h1>
          <m.h2
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="mt-3 text-sm font-medium leading-snug sm:mt-6 sm:text-lg"
          >
            Clubbie.club - это цифровое агенство, предоставляющее услуги
            <br className="hidden sm:inline" />
            по созданию веб-сайтов и веб-приложений
          </m.h2>
          <m.a
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            href="#contact"
            onClick={() => handleLinkClick("Contact form")}
            className="mt-8 rounded-2xl bg-white px-8 py-4 text-center font-bold text-zinc-900 shadow-[0_0_0_0px_#FFFFFF] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_6px_#FFFFFF] focus:shadow-[0_0_0_6px_#FFFFFF] focus:outline-none sm:hidden"
          >
            Стать партнерами
          </m.a>
          {/* /Hero */}
          {/* Cards */}
          <div className="mt-12 flex flex-1">
            <div className="grid flex-1 grid-cols-1 lg:grid-cols-3">
              <m.div
                initial={{
                  x: "-66%",
                  opacity: 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="flex flex-col justify-between rounded-3xl bg-fuchsia-300 p-6 shadow-[0_0_0_0px_#f0abfc] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_2px_#f0abfc] sm:hover:shadow-[0_0_0_4px_#f0abfc] lg:col-span-2"
              >
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    01.
                  </span>
                  <svg
                    width="37"
                    height="36"
                    viewBox="0 0 36 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37 12C37 8.8174 35.7006 5.76516 33.3877 3.51472C31.0747 1.26428 27.9377 7.52911e-07 24.6667 5.12632e-07C21.3957 2.72352e-07 18.2586 1.26428 15.9457 3.51472C13.6327 5.76515 12.3333 8.8174 12.3333 12L37 12Z"
                      fill="#18181B"
                    />
                    <path
                      d="M24.6667 36C27.9377 36 31.0747 34.7357 33.3876 32.4853C35.7006 30.2348 37 27.1826 37 24C37 20.8174 35.7006 17.7652 33.3877 15.5147C31.0747 13.2643 27.9377 12 24.6667 12L24.6667 36Z"
                      fill="#18181B"
                    />
                    <path
                      d="M1.09045e-06 24C8.0449e-07 27.1826 1.2994 30.2348 3.61235 32.4853C5.9253 34.7357 9.06233 36 12.3333 36C15.6043 36 18.7414 34.7357 21.0543 32.4853C23.3673 30.2348 24.6667 27.1826 24.6667 24L1.09045e-06 24Z"
                      fill="#18181B"
                    />
                    <path
                      d="M12.3333 0C9.06233 1.39116e-07 5.9253 1.26428 3.61235 3.51472C1.2994 5.76516 1.03974e-07 8.8174 0 12C-1.03974e-07 15.1826 1.2994 18.2348 3.61235 20.4853C5.9253 22.7357 9.06233 24 12.3333 24L12.3333 0Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mt-3 text-left text-lg font-medium text-zinc-900 sm:mt-1 sm:text-xl lg:mt-0">
                    Веб-сайты и веб-приложения
                    <br className="hidden sm:inline" /> любой сложности
                  </h3>
                  <p className="mt-2 font-medium text-zinc-800">
                    Мы готовы выполнить любой ваш заказ,
                    <br className="hidden sm:inline" /> от одностраничных
                    лендингов до комплексных приложений
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{
                  y: "-50%",
                  opacity: 0,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8,
                }}
                className="mt-3 flex flex-col justify-between rounded-3xl bg-lime-300 p-6 shadow-[0_0_0_0px_#bef264] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_2px_#bef264] sm:hover:shadow-[0_0_0_4px_#bef264] lg:mt-0 lg:ml-4"
              >
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    02.
                  </span>
                  <svg
                    width="26"
                    height="36"
                    viewBox="0 0 26 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 22.9091C-3.01417e-07 26.381 1.36964 29.7107 3.80761 32.1658C6.24558 34.6208 9.55218 36 13 36C16.4478 36 19.7544 34.6208 22.1924 32.1658C24.6304 29.7107 26 26.381 26 22.9091L0 22.9091Z"
                      fill="#18181B"
                    />
                    <path
                      d="M0 8.18182C-3.01417e-07 11.6537 1.36964 14.9835 3.80761 17.4385C6.24558 19.8935 9.55218 21.2727 13 21.2727C16.4478 21.2727 19.7544 19.8935 22.1924 17.4385C24.6304 14.9835 26 11.6537 26 8.18182L0 8.18182Z"
                      fill="#18181B"
                    />
                    <path
                      d="M16.25 3.27273C16.25 5.0802 14.7949 6.54545 13 6.54545C11.2051 6.54545 9.75 5.0802 9.75 3.27273C9.75 1.46525 11.2051 0 13 0C14.7949 0 16.25 1.46525 16.25 3.27273Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mt-3 text-lg font-medium text-zinc-900 sm:mt-1 sm:text-xl lg:mt-0">
                    Прозрачные методы <br className="hidden sm:inline" />
                    разработки
                  </h3>
                  <p className="mt-2 font-medium text-zinc-800">
                    Мы сопровождаем вас на каждом этапе разработки
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{
                  y: "50%",
                  opacity: 0,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1,
                }}
                className="mt-3 flex flex-col justify-between rounded-3xl bg-amber-400 p-6 shadow-[0_0_0_0px_#fbbf24] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_2px_#fbbf24] sm:hover:shadow-[0_0_0_4px_#fbbf24] lg:mt-4"
              >
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    03.
                  </span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12.5C12 10.1266 12.7038 7.80655 14.0224 5.83316C15.3409 3.85977 17.2151 2.3217 19.4078 1.41345C21.6005 0.505199 24.0133 0.267559 26.3411 0.730582C28.6688 1.1936 30.807 2.33649 32.4853 4.01472C34.1635 5.69295 35.3064 7.83115 35.7694 10.1589C36.2324 12.4867 35.9948 14.8995 35.0865 17.0922C34.1783 19.2849 32.6402 21.1591 30.6668 22.4776C28.6935 23.7962 26.3734 24.5 24 24.5V12.5H12Z"
                      fill="#18181B"
                    />
                    <path
                      d="M24 24.5C24 26.8734 23.2962 29.1934 21.9776 31.1668C20.6591 33.1402 18.7849 34.6783 16.5922 35.5865C14.3995 36.4948 11.9867 36.7324 9.65892 36.2694C7.33115 35.8064 5.19295 34.6635 3.51472 32.9853C1.83649 31.3071 0.693605 29.1689 0.230582 26.8411C-0.232441 24.5133 0.00519933 22.1005 0.91345 19.9078C1.8217 17.7151 3.35977 15.8409 5.33316 14.5224C7.30655 13.2038 9.62663 12.5 12 12.5L12 24.5H24Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mt-3 text-lg font-medium text-zinc-900 sm:mt-1 sm:text-xl lg:mt-0">
                    Индивидуальный подход <br className="hidden sm:inline" /> к
                    проектам
                  </h3>
                  <p className="mt-2 font-medium text-zinc-800">
                    Мы предлагаем наилучшие варианты отталкиваясь
                    <br className="hidden sm:inline" /> от ваших ресурсов и
                    желаний
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{
                  x: "50%",
                  opacity: 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.2,
                }}
                className="mt-3 flex flex-col justify-between rounded-3xl bg-blue-300 p-6 shadow-[0_0_0_0px_#93c5fd] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_2px_#93c5fd] sm:hover:shadow-[0_0_0_4px_#93c5fd] lg:col-span-2 lg:mt-4  lg:ml-4"
              >
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    04.
                  </span>
                  <svg
                    width="29"
                    height="36"
                    viewBox="0 0 29 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1643 36.5C16.8947 36.5 18.6081 36.183 20.2068 35.5671C21.8054 34.9512 23.258 34.0485 24.4815 32.9105C25.7051 31.7725 26.6756 30.4215 27.3378 28.9346C28 27.4477 28.3408 25.8541 28.3408 24.2447C28.3408 22.6353 28 21.0417 27.3378 19.5548C26.6756 18.0679 25.7051 16.7169 24.4815 15.5789C23.258 14.4409 21.8054 13.5381 20.2068 12.9222C18.6081 12.3064 16.8947 11.9894 15.1643 11.9894V36.5Z"
                      fill="#18181B"
                    />
                    <path
                      d="M13.5173 25.0106C11.7869 25.0106 10.0735 24.6936 8.47487 24.0778C6.87623 23.4619 5.42367 22.5592 4.20012 21.4211C2.97657 20.2831 2.006 18.9321 1.34382 17.4452C0.68164 15.9583 0.34082 14.3647 0.34082 12.7553C0.34082 11.1459 0.68164 9.5523 1.34382 8.06541C2.006 6.57853 2.97657 5.22751 4.20012 4.0895C5.42367 2.95149 6.87623 2.04877 8.47487 1.43288C10.0735 0.816993 11.7869 0.5 13.5173 0.5L13.5173 25.0106Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mt-3 text-lg font-medium text-zinc-900 sm:mt-1 sm:text-xl lg:mt-0">
                    Передовые технологии <br className="hidden sm:inline" />
                    веб-разработки
                  </h3>
                  <p className="mt-2 font-medium text-zinc-800">
                    Мы всегда следим за трендами инструментов разработки,
                    <br className="hidden sm:inline" />
                    применяя проверенные и современные решения
                  </p>
                </div>
              </m.div>
            </div>
          </div>
          {/* /Cards */}
        </main>
      </div>
      {/* Form */}
      <m.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.15,
        }}
        className="my-16 max-w-2xl px-4 sm:mx-auto sm:my-36 md:px-0"
      >
        <h3 className="text-left text-[32px] font-bold sm:text-center">
          Мы всегда на связи
        </h3>
        <p className="mt-3 text-left text-lg font-medium text-zinc-100 sm:text-center">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row"
          id="contact"
          onSubmit={handleSubmit}
        >
          <input
            required
            disabled={isSubmitting}
            ref={emailInputRef}
            className="flex-1 rounded-2xl border-2 border-zinc-800 bg-zinc-900 px-8 py-4 font-sans font-medium text-zinc-100 transition-colors duration-150 ease-in-out placeholder:font-raleway placeholder:text-neutral-500 focus:border-zinc-700 focus:outline-none disabled:cursor-not-allowed"
            placeholder="Ваш e-mail адрес..."
            type="email"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-2xl bg-white px-8 py-4 font-bold text-zinc-900 shadow-[0_0_0_0px_#FFFFFF] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_4px_#FFFFFF] focus:shadow-[0_0_0_4px_#FFFFFF] focus:outline-none disabled:cursor-wait disabled:hover:shadow-none sm:mt-0 sm:ml-4 sm:hover:shadow-[0_0_0_6px_#FFFFFF] sm:focus:shadow-[0_0_0_6px_#FFFFFF]"
          >
            Отправить
          </button>
        </form>
      </m.div>
      {/* /Form */}
      {/* Footer */}
      <m.footer
        initial={{
          y: "100%",
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          delay: 0.3,
        }}
        className="mx-3 mb-6 flex items-center justify-between sm:mx-12"
      >
        <div className="flex">
          <a
            target="_blank"
            onClick={() => handleLinkClick("Clubbie.club Instagram")}
            href="https://www.instagram.com/clubbie.club"
            className="text-gray-100 transition-colors duration-75 ease-in-out hover:text-gray-200"
          >
            <span className="hidden sm:block">Instagram</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sm:hidden"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6542 20.6544C21.178 20.1306 21.5866 19.5032 21.8538 18.8124C22.1109 18.1508 22.2867 17.3948 22.3372 16.2879C22.3878 15.1786 22.3998 14.8244 22.3998 12C22.3998 9.17555 22.3878 8.82122 22.3372 7.71211C22.2867 6.60511 22.1109 5.84914 21.8538 5.18762C21.5926 4.49368 21.1833 3.86505 20.6542 3.34558C20.1347 2.81643 19.5061 2.40697 18.812 2.14578C18.1505 1.88887 17.3945 1.71309 16.2875 1.66277C15.1784 1.61195 14.8242 1.59998 11.9997 1.59998C9.17522 1.59998 8.82093 1.61195 7.71183 1.66256C6.60483 1.71309 5.84885 1.88887 5.18734 2.14598C4.4934 2.40712 3.86477 2.81649 3.3453 3.34554C2.81613 3.86498 2.40665 4.49361 2.14541 5.18758C1.88851 5.84914 1.71272 6.60511 1.6624 7.71211C1.61158 8.82122 1.59961 9.17551 1.59961 12C1.59961 14.8245 1.61158 15.1788 1.6624 16.2879C1.71293 17.3949 1.88871 18.1509 2.14582 18.8124C2.40696 19.5063 2.81633 20.1349 3.34538 20.6544C3.86485 21.1835 4.49348 21.5928 5.18742 21.854C5.84898 22.1111 6.60495 22.2869 7.71191 22.3374C8.82118 22.388 9.17534 22.4 11.9998 22.4C14.8242 22.4 15.1786 22.388 16.2877 22.3374C17.3947 22.2869 18.1507 22.1111 18.8122 21.854C19.503 21.5868 20.1304 21.1782 20.6542 20.6544ZM3.19879 10.7759C3.1992 11.1124 3.19969 11.5127 3.19969 12C3.19969 12.4874 3.1992 12.8877 3.19879 13.2241C3.1972 14.5375 3.19679 14.8777 3.23102 15.6248C3.2736 16.5615 3.32477 17.2498 3.48102 17.7685C3.63122 18.2672 3.79969 18.7748 4.34969 19.3873C4.89968 19.9998 5.43019 20.2772 6.10593 20.481C6.78168 20.6848 7.63097 20.7286 8.36843 20.7623C9.2049 20.8004 9.53642 20.8003 11.2909 20.7999L11.9997 20.7998C12.4685 20.7998 12.8567 20.8002 13.1851 20.8005C14.5307 20.802 14.8704 20.8024 15.6248 20.7678C16.5615 20.7252 17.2498 20.6741 17.7686 20.5178C18.2672 20.3676 18.7748 20.1992 19.3873 19.6492C19.9998 19.0992 20.2772 18.5687 20.4811 17.8929C20.6849 17.2172 20.7287 16.3679 20.7623 15.6304C20.8004 14.795 20.8003 14.4644 20.7998 12.7159V12.7158L20.7997 12.0006L20.7998 11.292C20.8003 9.53734 20.8004 9.20582 20.7622 8.36933C20.7286 7.63186 20.6848 6.78257 20.481 6.10683C20.2772 5.43109 19.9997 4.90058 19.3872 4.35058C18.7747 3.80058 18.2672 3.63211 17.7685 3.48192C17.2497 3.32567 16.5614 3.2745 15.6247 3.23192C14.8704 3.19735 14.5307 3.19772 13.1851 3.1992H13.1851C12.8567 3.19956 12.4685 3.19998 11.9997 3.19998L11.2909 3.19986H11.2909C9.53642 3.19939 9.2049 3.19931 8.36843 3.23747C7.63097 3.27111 6.78168 3.31491 6.10593 3.51872C5.43019 3.72252 4.89968 3.99997 4.34969 4.61247C3.79969 5.22497 3.63122 5.73256 3.48102 6.23122C3.32477 6.74997 3.2736 7.43827 3.23102 8.37497C3.19679 9.12207 3.1972 9.46239 3.19879 10.7759V10.7759ZM11.9995 8.40022C10.0115 8.40022 8.39981 10.0119 8.39981 12C8.39981 13.988 10.0115 15.5997 11.9995 15.5997C13.9876 15.5997 15.5993 13.988 15.5993 12C15.5993 10.0119 13.9876 8.40022 11.9995 8.40022ZM6.7998 12C6.7998 9.12822 9.12781 6.80022 11.9995 6.80022C14.8713 6.80022 17.1993 9.12822 17.1993 12C17.1993 14.8717 14.8713 17.1997 11.9995 17.1997C9.12781 17.1997 6.7998 14.8717 6.7998 12ZM17.5512 7.64846C18.2139 7.64846 18.7512 7.1112 18.7512 6.44846C18.7512 5.78572 18.2139 5.24846 17.5512 5.24846C16.8884 5.24846 16.3512 5.78572 16.3512 6.44846C16.3512 7.1112 16.8884 7.64846 17.5512 7.64846Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            target="_blank"
            onClick={() => handleLinkClick("Clubbie.club Email")}
            href="mailto:clubbie.club@gmail.com"
            className="ml-4 text-gray-100 transition-colors duration-75 ease-in-out hover:text-gray-200"
          >
            <span className="hidden sm:block">E-mail</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="sm:hidden"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.6 3.20001C0.716344 3.20001 0 3.91636 0 4.80001V19.2C0 20.0837 0.716344 20.8 1.6 20.8H22.4C23.2837 20.8 24 20.0837 24 19.2V4.80001C24 3.91636 23.2837 3.20001 22.4 3.20001H1.6ZM1.6 4.80001H22.4V6.27992C22.2678 6.27979 22.1341 6.31603 22.0142 6.39209L12 12.7473L1.98579 6.39209C1.86594 6.31603 1.73216 6.27979 1.6 6.27992V4.80001ZM1.6 7.85276V19.2H22.4V7.85276L12.3858 14.2079C12.1503 14.3574 11.8497 14.3574 11.6142 14.2079L1.6 7.85276Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <span className="text-sm text-gray-100 sm:text-base">2022</span>
      </m.footer>
      {/* /Footer */}
    </div>
  );
}

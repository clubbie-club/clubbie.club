{
  /* <div className="flex-[2] bg-fuchsia-300 p-6 rounded-3xl">
  <div className="flex justify-between">
    <h3 className="text-xl font-medium text-zinc-900">
      Веб-сайты и веб-приложения <br /> любой сложности
    </h3>
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37 12C37 8.8174 35.7006 5.76516 33.3876 3.51472C31.0747 1.26428 27.9377 7.52911e-07 24.6667 5.12632e-07C21.3957 2.72352e-07 18.2586 1.26428 15.9457 3.51472C13.6327 5.76515 12.3333 8.8174 12.3333 12L37 12Z"
        fill="#18181B"
      />
      <path
        d="M24.6667 36C27.9377 36 31.0747 34.7357 33.3876 32.4853C35.7006 30.2348 37 27.1826 37 24C37 20.8174 35.7006 17.7652 33.3876 15.5147C31.0747 13.2643 27.9377 12 24.6667 12L24.6667 36Z"
        fill="#18181B"
      />
      <path
        d="M1.09045e-06 24C8.0449e-07 27.1826 1.2994 30.2348 3.61235 32.4853C5.9253 34.7357 9.06233 36 12.3333 36C15.6043 36 18.7414 34.7357 21.0543 32.4853C23.3673 30.2348 24.6667 27.1826 24.6667 24L1.09045e-06 24Z"
        fill="#18181B"
      />
      <path
        d="M12.3333 0C9.06233 1.39116e-07 5.9253 1.26428 3.61235 3.51472C1.2994 5.76515 1.03974e-07 8.8174 0 12C-1.03974e-07 15.1826 1.2994 18.2348 3.61235 20.4853C5.9253 22.7357 9.06233 24 12.3333 24L12.3333 0Z"
        fill="#18181B"
      />
    </svg>
  </div>
  <p className="mt-3 font-medium text-zinc-800">
    Наша команда готова выполнить любой ваш заказ, <br /> от одностраничных
    лендингов до комплексных приложений
  </p>
</div>; */
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen px-12 py-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <span className="font-semibold">clubbie/club</span>
          <a
            href="#contact"
            className="px-8 py-4 font-bold bg-white text-zinc-900 rounded-2xl shadow-[0_0_0_0px_#FFFFFF] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_8px_#FFFFFF]"
          >
            Стать партнерами
          </a>
        </header>
        {/* /Header */}
        <main className="flex flex-col flex-1 mt-12">
          {/* Hero */}
          <h1 className="font-bold text-[42px]">
            Разработка - это исскуство, <br /> а мы черепашки ниндзя
          </h1>
          <h2 className="mt-6 text-lg font-medium">
            Clubbie.club - это цифровое агенство, предоставляющее услуги <br />
            по созданию веб-сайтов и веб-приложений
          </h2>
          {/* /Hero */}
          {/* Cards */}
          <div className="flex flex-1 mt-12">
            <div className="grid flex-1 grid-cols-3">
              <div className="flex flex-col justify-between col-span-2 p-6 rounded-3xl bg-fuchsia-300 shadow-[0_0_0_0px_#f0abfc] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_4px_#f0abfc]">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    01.
                  </span>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
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
                <h3 className="text-xl font-medium text-zinc-900">
                  Веб-сайты и веб-приложения <br /> любой сложности
                </h3>
              </div>
              <div className="flex flex-col justify-between p-6 ml-4 rounded-3xl bg-lime-300 shadow-[0_0_0_0px_#bef264] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_4px_#bef264]">
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
                <h3 className="text-xl font-medium text-zinc-900">
                  Прозрачные методы <br /> разработки
                </h3>
              </div>
              <div className="flex flex-col justify-between p-6 mt-4 rounded-3xl bg-amber-400 shadow-[0_0_0_0px_#fbbf24] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_4px_#fbbf24]">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    03.
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
                <h3 className="text-xl font-medium text-zinc-900">
                  Индивидуальный подход <br /> к проектам
                </h3>
              </div>
              <div className="flex flex-col justify-between col-span-2 p-6 mt-4 ml-4 bg-blue-300 rounded-3xl shadow-[0_0_0_0px_#93c5fd] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_4px_#93c5fd]">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold text-zinc-900">
                    04.
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
                <h3 className="text-xl font-medium text-zinc-900">
                  Передовые технологии <br /> веб-разработки
                </h3>
              </div>
            </div>
          </div>
          {/* /Cards */}
        </main>
      </div>
      <div className="max-w-2xl mx-auto my-36">
        <h3 className="text-[32px] font-bold text-center">
          Мы всегда на связи
        </h3>
        <p className="mt-3 text-lg font-medium text-center text-zinc-100">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </p>
        <form className="flex mt-8" id="contact">
          <input
            required
            className="flex-1 px-8 py-4 font-medium transition-colors duration-150 ease-in-out border rounded-2xl border-zinc-800 bg-zinc-900 placeholder:text-neutral-500 text-zinc-100 focus:outline-none focus:border-zinc-700"
            placeholder="Ваш e-mail адрес..."
            type="email"
          />
          <button className="px-8 py-4 ml-4 font-bold bg-white text-zinc-900 rounded-2xl shadow-[0_0_0_0px_#FFFFFF] transition-shadow duration-75 ease-in hover:shadow-[0_0_0_6px_#FFFFFF]">
            Отправить
          </button>
        </form>
      </div>
      <footer className="flex justify-between px-12 py-6">
        <a
          href="https://www.instagram.com/clubbie.club"
          className="text-gray-100 transition-colors duration-75 ease-in-out hover:text-gray-200"
        >
          Instagram
        </a>
        <span className="text-gray-100">2022</span>
      </footer>
    </div>
  );
}

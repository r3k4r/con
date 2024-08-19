'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  const { t, i18n }= useTranslation()

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push('/courses/addcourse');
    }
  };

  return (
    <div className=" py-44 flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className={`mt-10 text-center font-freesansbold text-3xl md:text-4xl font-bold leading-9 tracking-tight text-gray-900 ${i18n.language === 'en' || "font-kurdish"}`}>
         {t('login.head')}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className={`block text-sm font-medium leading-6 text-gray-900 font-freesans  ${i18n.language === 'en' || "font-kurdish"}`}>
              {t('login.username')}
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-900 font-freesans  ${i18n.language === 'en' || "font-kurdish"}`}>
              {t('login.password')}
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button type="submit" className={`w-full blue_btn font-freesans  ${i18n.language === 'en' || "font-kurdish"}`}>
              {t('login.login')}
            </button>
          </div>
        </form>

        {error && <p className="mt-10 text-center text-sm text-red-500">{error}</p>}

        <p className={`mt-10 text-center text-sm text-gray-500  ${i18n.language === 'en' || "font-kurdish" } `}>
          {t('login.warning')}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
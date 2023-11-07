import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  Layout,
  Header,
  Link,
  LangBtn,
  LangBtnWrap,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

export const SharedLayout = ({ turnUaLang, turnEnLang }) => {
  const { t } = useTranslation();
  const lang = t('lang');

  return (
    <Layout>
      <Header>
        <nav>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/movies">{t('nav.movies')}</Link>
        </nav>
        <LangBtnWrap>
          <LangBtn
            type="button"
            onClick={turnEnLang}
            disabled={lang === 'en-US' ? true : false}
          >
            EN
          </LangBtn>
          <LangBtn
            type="button"
            onClick={turnUaLang}
            disabled={lang === 'uk-UA' ? true : false}
          >
            UA
          </LangBtn>
        </LangBtnWrap>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};

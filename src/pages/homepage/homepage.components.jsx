import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./homepage.styles.scss";
import { LINK } from "../../constant/link-constant";
import { TAB_MENU } from "../../constant/tab-constant";
import TabMenu from "../../layouts/tab-menu/tab-menu.components";
import LanguageSelector from "../../components/common/language-selector/language-selector.components";

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="My Homepage" />
      <TabMenu menus={TAB_MENU} activeTab={TAB_MENU.HOMEPAGE} />
      <div className="homepage">
        <LanguageSelector />
        <div className="row flex-center">
          {LINK.map((link, index) => (
            <div key={index} className="col-lg-3 col-md-6  no-padding">
              <Link className="homepage__link flex-center" to={link.to}>
                <div>{t(`${link.linkname}`)} </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;

import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher({dark}) {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link legacyBehavior href={{ pathname, query }} as={asPath} locale={locale}>
              <a className={` ${dark ? "text-dark" : "" }  text-center  px-2` }>
                {locale === "en" ? "English" : locale === "ar" ? "عربى" : null} < i className="fa fa-globe" />
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
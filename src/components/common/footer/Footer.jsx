import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div  className="d-flex gap-4 flex-wrap justify-content-center" dir={router.locale === "en" ? "" : "rtl" }>
      <div className="col-sm-4">
        <div className="footer_about_widget">
          {router.locale === "en" ? (
            <h4>About us</h4>
          ) : (
            <h4 dir="rtl"> من نحن</h4>
          )}
          {router.locale === "en" ? (
            <p className="">
              House Point Company, The art of Property Management, The easiest
              way to your new house in Maadi, Katameya Heights, and New Cairo.
              We have +15 years of experience in Property Management. We help
              you to choose your new house whether you want to buy or rent a new
              house, Furnished, & Modern Furnished. If you are looking for an
              Apartment, Ground Floor, Villa, Studio, Penthouse, Duplex, Office
              Space, or even Commercial Stores and Shops, rent in Maadi,
              Katameya Heights, and New Cairo we are the right choice for you
              because we have what you are looking for.
            </p>
          ) : (
            <p dir="rtl" className="">
              شركه كورنر لاداره الممتلكات. اسهل طريق لعنوانك الجديد في اي مكان
              في مصر باسعار تناسب الجميع تعمل الشركه في مجال اداره الاملاك
              والعقارات منذ سنه 2000 حيث ساعدنا الكثير في اختيار بيته وعنوانه
              الجديد اون لاين وتخصصنا في مجالات البيع والشراء والايجارات
              والاراضي مع وجود الضماتات الكافيه للعملاء ونعمل في بيع وشراء الشقق
              والفيلات والعقارات في مصر وكذلك ايجار الشقق والفيلات السكنيه
              والعقارات والمحلات والمقرات الاداريه والتجاريه في كل انحاء مصر
              وسنظل نعمل جاهدين لتوفير الفرص المناسبه والرائعه لجميع عملائنا في
              مجال العقارات في مصر
            </p>
          )}
        </div>
      </div>
      {/* End .col */}

      <div className="">
        <div className="footer_qlink_widget">
          {router.locale === "en" ? (
            <h4>Link</h4>
          ) : (
            <h4 dir="rtl">روابط سريعة</h4>
          )}
          <ul
            className="list-unstyled"
            dir={router.locale === "en" ? "" : "rtl"}
          >
            <li>
              <Link legacyBehavior href="/rent/apartments">
                {router.locale === "en" ? (
                  <a className="d-block">Apartments For Rent</a>
                ) : (
                  <a> شقق للايجار</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sale/apartments">
                {router.locale === "en" ? (
                  <a className=" d-block">Apartments For Sale</a>
                ) : (
                  <a> شقق للبيع</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/rent/villas/Maadi">
                {router.locale === "en" ? (
                  <a className="  d-block">Villas For Rent</a>
                ) : (
                  <a> فيلات للايجار</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sale/villas/Maadi">
                {router.locale === "en" ? (
                  <a className="  d-block">Villas For Sale</a>
                ) : (
                  <a> فيلات للبيع</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/rent/ground-floors">
                {router.locale === "en" ? (
                  <a className=" d-block">Ground Floors For Rent</a>
                ) : (
                  <a> دور ارضي للايجار</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sale/ground-floors">
                {router.locale === "en" ? (
                  <a className=" d-block">Ground Floors For Sale</a>
                ) : (
                  <a> دور ارضي للبيع</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/rent/penthouses">
                {router.locale === "en" ? (
                  <a className=" d-block">Penthouses For Rent</a>
                ) : (
                  <a> رووف للايجار</a>
                )}
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/sale/penthouses">
                {router.locale === "en" ? (
                  <a className=" d-block">Penthouses For sale</a>
                ) : (
                  <a> رووف للبيع</a>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="">
        <div className="footer_contact_widget">
          {router.locale === "en" ? (
            <h4>Contact Us</h4>
          ) : (
            <h4 dir="rtl">تواصل معنا</h4>
          )}
          <ul
            className="list-unstyled"
            dir={router.locale === "en" ? "" : "rtl"}
          >
            <li>
              <a href="mailto: info@housepointegypt.com">
                {" "}
                info@housepointegypt.com
              </a>
            </li>
            <li>
              <a href="mailto:hazem@housepointegypt.com">
                hazem@housepointegypt.com
              </a>
            </li>

            <li>
              <a href="tel:01221409530">01221409530</a>
            </li>
            <li>
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.06024675745567!2d31.265611999999997!3d29.9517156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583807cabfbd7d%3A0x81e98f6ddff99809!2sHouse%20Point%20Egypt!5e0!3m2!1sen!2seg!4v1674645724966!5m2!1sen!2seg"
                    height="300"
                    style={{border:0}}
                    allowFullScreen={true}
                    loading="lazy"
                    title="map"
                    className="gmap_iframe"

                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="">
        <div className="footer_social_widget">
        {router.locale === "en" ? (
            <h4>follow Us</h4>
          ) : (
            <h4 dir="rtl">تابعنا</h4>
          )}          <ul className="mb30" dir={router.locale === "en" ? "" : "rtl"}>
            <Social />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Footer;

// Images
import homeImg from "../../assets/home-banner.jpg"
import aboutImg from "../../assets/about-banner.jpg"

// Style
import banner from "./Banner.module.scss"

const BasicBanner = ({ children }) => {
  return <section className={banner.banner}>{children}</section>
}

const BannerImg = props => {
  return (
    <>
      <div className={banner.div}>
        <img className={banner.img} src={props.image} alt={props.altText} />
      </div>
    </>
  )
}

const HomeBanner = props => {
  return (
    <BasicBanner>
      <BannerImg image={props.image} altText={props.altText} />
      <h1 className={banner.title}>
        Chez vous, <span className={banner.span}>partout et ailleurs</span>
      </h1>
    </BasicBanner>
  )
}

const AboutBanner = props => {
  return (
    <BasicBanner>
      <BannerImg image={props.image} altText={props.altText} />
    </BasicBanner>
  )
}

const Banner = () => {
  const pageURL = document.location

  if (/about/.test(pageURL))
    return <AboutBanner image={aboutImg} altText="Bannière Page À Propos" />

  return <HomeBanner image={homeImg} altText="Bannière Page d'Accueil" />
}

export default Banner

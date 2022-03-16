import CustomError from "../components/CustomError/index";
import Img404 from "../public/img/illustrations/404.svg";

export default function Custom404() {
  return <CustomError text={'Nie znaleziono strony'} illustration={Img404} />;
}

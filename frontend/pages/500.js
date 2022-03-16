import CustomError from '../components/CustomError/index';
import Img500 from "../public/img/illustrations/500.svg";

export default function Custom500() {
  return <CustomError text={'Błąd serwera, proszę spróbować później'} illustration={Img500} />;
}

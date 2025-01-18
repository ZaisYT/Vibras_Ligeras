import VLLOGO from '../images/vl-crop.png';
import '../css/Header.css';

type HeaderProps = {
  hidden: boolean;
};


export const Header = ({hidden}: HeaderProps) => {
  return (
    <header className={hidden ? 'hidden' : ''}>
      <img src={VLLOGO} alt="Vibras Ligeras Logo" />
    </header>
  )
}

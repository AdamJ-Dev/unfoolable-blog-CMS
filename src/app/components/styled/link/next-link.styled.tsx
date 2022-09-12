import Link from 'next/link';
import StyledLink from './link.styled';

type StyledNextLinkProps = {
  href: string;
  linker: React.ReactNode;
  color?: string;
  hoverColor?: string;
};

const StyledNextLink: React.FC<StyledNextLinkProps> = ({ href, linker, color, hoverColor }) => {
  return (
    <Link href={href} passHref>
      <StyledLink color={color} hoverColor={hoverColor}>
        {linker}
      </StyledLink>
    </Link>
  );
};

export default StyledNextLink;

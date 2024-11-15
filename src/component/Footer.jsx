import { styled } from "@mui/material/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  margin: '16px',
  backgroundColor: '#f9f9f9',
  gap: '8px',
  textAlign: 'center',
});

const LinkContainer = styled('div')({
  display: 'flex',
  gap: '16px',
  marginTop: '8px',
});

const StyledLink = styled('a')({
  color: '#007BFF',
  textDecoration: 'none',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Footer() {
  return (
    <Container>
      <p>© 2024 Vikash Kumar Upadhyay. All rights reserved.</p>
      <LinkContainer>
        <StyledLink href="#"><WhatsAppIcon/></StyledLink>
        <StyledLink href="#"><FacebookIcon /></StyledLink>
        <StyledLink href="#"><InstagramIcon /></StyledLink>
        <StyledLink href="#"><TelegramIcon /></StyledLink>
        <StyledLink href="#"><GitHubIcon /></StyledLink>
        <StyledLink href="#"><LinkedInIcon /></StyledLink>
      </LinkContainer>
    </Container>
  );
}

export default Footer;


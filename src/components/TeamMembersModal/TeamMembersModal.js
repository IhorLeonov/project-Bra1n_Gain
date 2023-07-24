import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  IconLink,
  Name,
  SlideCard,
  SliderWrapper,
  SocialLinks,
  Wrapper,
  Image,
  Title,
  SocialLinksItem,
  Description,
} from './TeamMembersModal.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const urlToPhotos = `${process.env.PUBLIC_URL + '/images/team_members/'}`;

const teamMembers = [
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  {
    name: 'Mykyta Hilis',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
  },
  // Добавьте остальных участников команды аналогично
];

export const TeamMembersModal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Development Team</Title>
      <SliderWrapper>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <SlideCard key={index}>
              <Image src={member.photo} alt={member.name} />
              <Description>
                <Name>{member.name}</Name>
                <SocialLinks>
                  <SocialLinksItem>
                    <IconLink href={`mailto:${member.email}`}>
                      <FaEnvelope />
                    </IconLink>
                  </SocialLinksItem>
                  <SocialLinksItem>
                    <IconLink href={member.github}>
                      <FaGithub />
                    </IconLink>
                  </SocialLinksItem>
                  <SocialLinksItem>
                    <IconLink href={member.linkedin}>
                      <FaLinkedin />
                    </IconLink>
                  </SocialLinksItem>
                  <SocialLinksItem>
                    <IconLink href={member.resume}>
                      <FaFileAlt />
                    </IconLink>
                  </SocialLinksItem>
                </SocialLinks>
              </Description>
            </SlideCard>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

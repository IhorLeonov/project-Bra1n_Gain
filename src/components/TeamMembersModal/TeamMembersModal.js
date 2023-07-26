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
  JobTitle,
  WorkList,
  WorkItem,
  ImageDescription,
  EyeIcon,
} from './TeamMembersModal.styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Modal } from 'components/Modal/Modal';

const urlToPhotos = `${process.env.PUBLIC_URL + '/images/team_members/'}`;

const teamMembers = [
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  {
    name: 'Mykyta Hilis',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Feature A - Implemented authentication',
      'Feature B - Improved UI/UX',
      'Bug Fix - Resolved critical issue',
    ],
  },
  // Добавьте остальных участников команды аналогично
];

export const TeamMembersModal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Modal>
      <Wrapper>
        <Title>Development Team</Title>
        <SliderWrapper>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <SlideCard key={index}>
                <ImageDescription>
                  <Image src={member.photo} alt={member.name} />
                  <EyeIcon />
                  <WorkList className="work-list">
                    {member.work.map((workItem, i) => (
                      <WorkItem key={i}>{workItem}</WorkItem>
                    ))}
                  </WorkList>
                </ImageDescription>
                <Description>
                  <Name>{member.name}</Name>
                  <JobTitle>{member.job}</JobTitle>
                  <SocialLinks>
                    {member.email && (
                      <SocialLinksItem>
                        <IconLink
                          href={`mailto:${member.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaEnvelope />
                        </IconLink>
                      </SocialLinksItem>
                    )}
                    {member.github && (
                      <SocialLinksItem>
                        <IconLink
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </IconLink>
                      </SocialLinksItem>
                    )}
                    {member.linkedin && (
                      <SocialLinksItem>
                        <IconLink
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </IconLink>
                      </SocialLinksItem>
                    )}
                    {member.resume && (
                      <SocialLinksItem>
                        <IconLink
                          href={member.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFileAlt />
                        </IconLink>
                      </SocialLinksItem>
                    )}
                  </SocialLinks>
                </Description>
              </SlideCard>
            ))}
          </Slider>
        </SliderWrapper>
      </Wrapper>
    </Modal>
  );
};

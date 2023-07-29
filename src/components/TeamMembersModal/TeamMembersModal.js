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
    job: 'Scrum Master',
    photo: `${urlToPhotos + 'Mykyta Hilis.png'}`,
    email: 'mykytahilis@gmail.com',
    github: 'https://github.com/333Nikita333',
    linkedin: 'https://www.linkedin.com/in/mykyta-hilis/',
    resume:
      'https://drive.google.com/file/d/1kKPOmKaankcWdmdS4T16hakmvRDbQZtU/view?usp=sharing',
    work: [
      'Backend:',
      '-Feedback routes;',
      '-Swagger documentation;',
      '-Email verification routes;',
      '-Code refactoring;',
      "",
      "",
      'Frontend:',
      '-Svg and image optimization;',
      '-Slider functionality with reviews;',
      '-Mail verification route layout;',
      '-Email resend functionality;',
      '-Footer section;',
      '-Code refactoring;',
    ],
  },
  {
    name: 'Ihor Leonov',
    job: 'Team Lead',
    photo: `${urlToPhotos + 'Ihor Leonov.jpg'}`,
    email: 'Ihorleonow@gmail.com',
    github: 'https://github.com/IhorLeonov',
    linkedin: 'https://www.linkedin.com/in/i-leonov/',
    resume:
      'https://www.canva.com/design/DAFZRPgUrFk/XvAkswx0reTgsT8zMWxGnQ/view?utm_content=DAFZRPgUrFk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Anatolij Goga',
    job: 'Developer',
    photo: `${urlToPhotos + 'Anatolij Goga.jpg'}`,
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Antonina Kicha',
    job: 'Developer',
    photo: `${urlToPhotos + 'Antonina Kicha.jpg'}`,
    github: 'https://github.com/antonina-kicha',
    linkedin: 'https://www.linkedin.com/in/antonina-kicha/',
    resume:
      'https://drive.google.com/file/d/15hPBYO3h7mnrAPCRMiGOVdpX4Dn7CtU_/view?usp=sharing',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Mykola Zanko',
    job: 'Developer',
    photo: `${urlToPhotos + 'Mykola Zanko.jpg'}`,
    email: 'tt10392@gmail.com',
    github: 'https://github.com/Pumpon4yk',
    linkedin: 'https://www.linkedin.com/in/mykola-zanko',
    resume:
      'https://drive.google.com/file/d/16Ny8xs9JIHGtC-_bpfmuGA2Dy6S2O2b5/view?usp=drivesdk',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Ruslan Karpov',
    job: 'Developer',
    photo: `${urlToPhotos + 'Ruslan Karpov.jpg'}`,
    email: 'rkarpov88@gmail.com',
    github: 'https://github.com/KarpovRuslan',
    linkedin: 'https://www.linkedin.com/in/ruslan-karpov/',
    resume:
      'https://drive.google.com/file/d/1Kzr0Q_2DjlrwPR3BsvSqEnDebCdZYW88/view?usp=share_link',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Julia Babiychuk',
    job: 'Developer',
    photo: `${urlToPhotos + 'Julia Babiychuk.jpg'}`,
    email: 'julia4233097@gmail.com',
    github: 'https://github.com/BabiychukYuliya',
    linkedin: 'https://www.linkedin.com/in/yulia-babiychuk',
    resume:
      'https://drive.google.com/file/d/1BCOVFLpbpUjwYotZxjYmOKEcJtTQtx-B/view?usp=sharing',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Maxsym Svyrydov',
    job: 'Developer',
    photo: `${urlToPhotos + 'Maxsym Svyrydov.jpg'}`,
    email: 'msvhts@gmail.com',
    github: 'https://github.com/Maksym-Svyrydov',
    linkedin: 'https://www.linkedin.com/in/maksym-svyrydov/',
    resume:
      'https://drive.google.com/file/d/1ueZpImlNQOfcpkFIfWZfN5A1OoqmI8ay/view?usp=sharing',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Ilya Mustafa',
    job: 'Developer',
    photo: `${urlToPhotos + 'Ilya Mustafa.jpg'}`,
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Oleg Rudenko',
    job: 'Developer',
    photo: `${urlToPhotos + 'Oleg Rudenko.jpg'}`,
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Serhii Karashchuk',
    job: 'Developer',
    photo: `${urlToPhotos + 'Serhii Karashchuk.jpg'}`,
    email: 'kspost01@gmail.com',
    github: 'https://github.com/SergiiKarashchuk',
    linkedin: 'https://www.linkedin.com/in/sergii-karashchuk',
    resume:
      'https://www.canva.com/design/DAFeyahd2WI/uJhPA4LEb4NhhU1P-Y7-QA/edit?utm_content=DAFeyahd2WI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Vadim Koverin',
    job: 'Developer',
    photo: `${urlToPhotos + 'Vadim Koverin.jpg'}`,
    email: 'koverinv1997@gmail.com',
    github: 'https://github.com/Koverin',
    linkedin: 'https://www.linkedin.com/in/vadim-koverin/',
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Serhii Mukhin',
    job: 'Developer',
    photo: `${urlToPhotos + 'Serhii Mukhin.jpg'}`,
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
  {
    name: 'Yevhenii Sitolenko',
    job: 'Developer',
    photo: `${urlToPhotos + 'Yevhenii Sitolenko.jpg'}`,
    work: [
      'Backend:',
      '-Example 1;',
      '-Example 2;',

      'Frontend:',
      '-Example 1;',
      '-Example 2;',
    ],
  },
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

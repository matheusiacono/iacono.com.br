import React from 'react';
import Helmet from 'react-helmet';
import g from 'glamorous';

import Container from '../components/curriculum/container';
import FieldHeader from '../components/curriculum/field-header';
import CurriculumLink from '../components/curriculum/curriculum-link';
import Details from '../components/curriculum/details';
import Experience from '../components/curriculum/experience';
import Education from '../components/curriculum/education';
import Languages from '../components/curriculum/languages';
import SkillsContainer from '../components/curriculum/skills-container';
import Skills from '../components/curriculum/skills';

import appendTitle from '../utils/append-title';
import data from '../assets/data/curriculum-en';

const CurriculumPage = () => (
  <Container>
    <Helmet title={appendTitle('Resume', 'Matheus Iácono')}>
      <html lang="en-US" />
    </Helmet>
    <CurriculumLink to="/sobre/#sobre-mim">Go back</CurriculumLink>

    <g.Div textAlign="right">
      <g.H1 fontSize="2.5em" margin="0">
        Matheus Iacono
      </g.H1>
      <g.H2 fontSize="1.2em" margin="0" fontWeight="normal" fontStyle="italic">
        Front End Developer
      </g.H2>
    </g.Div>

    <FieldHeader title="Personal Details" />
    <Details items={data.personal} />

    <FieldHeader title="Work Experience" />
    <Experience items={data.experience} />

    <FieldHeader title="Education" />
    <Education items={data.education} />

    <FieldHeader title="Languages" />
    <Languages items={data.languages} />

    <g.Div pageBreakBefore="always" />
    <FieldHeader title="Technical Skills" />
    <SkillsContainer>
      <Skills items={data.skills} />
    </SkillsContainer>
  </Container>
);

export default CurriculumPage;

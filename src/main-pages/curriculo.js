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
import data from '../assets/data/curriculum';

const CurriculumPage = () => (
  <Container>
    <Helmet title={appendTitle('Currículo', 'Matheus Iácono')}>
      <html lang="pt-BR" />
    </Helmet>
    <CurriculumLink to="/sobre/#sobre-mim">Voltar para o site</CurriculumLink>

    <g.Div textAlign="right">
      <g.H1 fontSize="2.5em" margin="0">
        Matheus Iácono
      </g.H1>
      <g.H2 fontSize="1.2em" margin="0" fontWeight="normal" fontStyle="italic">
        Desenvolvedor Front End
      </g.H2>
    </g.Div>

    <FieldHeader title="Dados Pessoais" />
    <Details items={data.personal} />

    <FieldHeader title="Experiência" />
    <Experience items={data.experience} />

    <FieldHeader title="Educação" />
    <Education items={data.education} />

    <FieldHeader title="Idiomas" />
    <Languages items={data.languages} />

    <g.Div pageBreakBefore="always" />
    <FieldHeader title="Habilidades" />
    <SkillsContainer>
      <Skills items={data.skills} />
    </SkillsContainer>
  </Container>
);

export default CurriculumPage;

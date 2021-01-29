import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.3 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="NomeDoUsuário"
                value={name}
                autoCapitalize=""
                min={3}
                required
                placeholder="Digite seu nome para jogar!"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar!
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.3 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Acompanhe aqui os Quizes gerado pela comunidade!</p>

            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <Widget.Topic
                  key={linkExterno}
                  href={`/quiz/${projectName}___${githubUser}`}
                >
                  {`${githubUser}/${projectName}`}
                </Widget.Topic>
              );
            })}
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer
        as={motion.section}
        transition={{ delay: 0, duration: 0.3 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '100%' },
        }}
        initial="hidden"
        animate="show"
      />
      <GitHubCorner projectUrl="https://github.com/ricardoltt/aluraquiz-contemplese" target="_blank" />
    </QuizBackground>
  );
}

/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import GitHubCorner from '../../src/components/GitHubCorner';
import AlternativesForm from '../../src/components/AlternativesForm';
import LoadingWidget from '../../src/components/LoadingScreen';

function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query; return (

    <Widget>
      <Widget.Header>
        <h1>
          {' '}
          {name}
          , você acertou
          {' '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}

          {' '}
          .
        </h1>
      </Widget.Header>

      <Widget.Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h2>
          Quer conhecer mais sobre relação com a comida?
        </h2>
        <p style={{
          marginTop: '20px',
        }}
        >
          Clique na logo, acesse o instagram da contemple.se e confira os posts!
        </p>
        <a
          href="https://www.instagram.com/contemple.se/"
          target="_blank"
          className="social-icons"
        >
          {' '}
          <i
            className="fa fa-instagram"
            style={{
              fontSize: '100px',
              color: '#d0d0d0',
              borderRadius: '51%',
              textAlign: 'center',
              height: '60px',
              width: '100%',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          />
          {' '}

        </a>

      </Widget.Content>
      <Widget.Header>
        <h1>
          <a
            href="/"
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            Voltar para a home
          </a>
        </h1>
      </Widget.Header>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [alternativaSelecionada, setAlternativaSelecionada] = React.useState(undefined);
  const questionId = `question__${questionIndex}`;
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = alternativaSelecionada === question.answer;
  const hasAlternativeSelected = alternativaSelecionada !== undefined;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setAlternativaSelecionada(undefined);
            }, 1.5 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = alternativaSelecionada === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onClick={() => setAlternativaSelecionada(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </button>
          {isQuestionSubmited && isCorrect && <h2> Parabéns, você acertou! </h2>}
          {isQuestionSubmited && !isCorrect && <h2> Ah você errou, vamos para a próxima!</h2>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo src={db.logo} />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}

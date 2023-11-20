import { useState } from 'react'
import styled from 'styled-components'
import '../src/style/app.css'

const questions = [
  {
    questionText: 'What is the capital of France',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lyon', isCorrect: false }
    ]
  },
  {
    questionText: 'The Iphone was created bu which company ?',
    answerOptions: [
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Huawei', isCorrect: false }
    ]
  },
  {
    questionText: 'What does it mean CSS',
    answerOptions: [
      { answerText: 'Create Simple Samples', isCorrect: false },
      { answerText: 'Cascading Style Sheet', isCorrect: true },
      { answerText: 'Constructor Simple Style', isCorrect: false },
      { answerText: 'Choucroute et Saucisses de Strasbourg', isCorrect: false }
    ]
  },
  {
    questionText: 'What does it mean HTML',
    answerOptions: [
      { answerText: 'HyperText Markup Language', isCorrect: true },
      { answerText: 'Hyperspace TradeMark Language', isCorrect: false },
      { answerText: 'HomeTabulation of Mailing List', isCorrect: false },
      { answerText: 'Extensible Markup Language', isCorrect: false }
    ]
  }
]


function App() {
  const [answerIndex, setAnswerIndex] = useState(0);
  const [choose, setChoose] = useState('')
  const [respons, setRespons] = useState(0)
  const [start, setStart] = useState(false)
  return <Game>
    <Container>
      <div className="left">
        <h2> {!start ? 'Appuyez sur START pour commencer' : `Question ${answerIndex + 1}`} <NbQuest> {!start ? '' : `/${questions.length}`}</NbQuest></h2>
        <p>{!start ? 'Choisis une solution parmis les 4 réponses' : questions[answerIndex].questionText} </p>
      </div>
      <Reponse className="right">
        {
          questions[answerIndex].answerOptions.map((obj, index) => {
            return <input key={index} onClick={(e) => {
              setChoose(e.currentTarget.value);
              if (start === true) {
                if (obj.isCorrect === true) {
                  setRespons(respons + 1)
                }
              }
            }} value={!start ? ('Question ' + (index + 1)) : obj.answerText} readOnly />
          })
        }
      </Reponse>
    </Container>
    <Btn>
      <button className='validBtn' onClick={() => {
        console.log(respons);
        if (answerIndex < questions.length - 1) {
          return setAnswerIndex(answerIndex + 1)
        } else if (answerIndex === questions.length - 1) {
          alert('votre score est de ' + ((respons * 100) / questions.length) + '%');
          setAnswerIndex(0);
          setChoose('');
          setRespons(0);
          setStart(false)
          document.querySelector('.startBtn').setAttribute('style', 'display : block')
          document.querySelector('.validBtn').setAttribute('style', 'display : none')
        }

      }}>Valid</button>
      <button className='startBtn' onClick={() => {
        setStart(true);
        document.querySelector('.startBtn').setAttribute('style', 'display : none')
        document.querySelector('.validBtn').setAttribute('style', 'display : block')
      }}>START</button>
    </Btn>
  </Game>
}
const Btn = styled.div`
& .validBtn{
  display : none
}
`
const NbQuest = styled.span`
font-size: 1.4rem;
`

const Game = styled.div`
color : white ;
width : max-content;
background-color: #191B21;
border-radius : 30px ;
border : #23272F ;
gap: 50px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
margin-top: 20vh;
padding: 75px 50px;

& button {
width: 250px;
padding : 10px ;
font-size : 1.5rem ;
}
`

const Container = styled.div`
display: flex;
width: max-content;
gap : 50px ;
& .left {
  width: 500px;
  background-color: #23272F;
}
& .right {
  width: max-content;
  cursor : none ;
}
& input {
  width: 500px;
  padding: 15px 0px;
  font-size : 1.2rem;
  text-align: center;
  border-radius : 10px ; 
  border : none ; 
  color : white ; 
  background :  #374151;
  outline : none ; 
  cursor : none
}
& input:hover{
  transform : scale(1.1) ; 
  transition-duration : 0.5s
}
`
const Reponse = styled.div`
display: flex;
flex-direction: column;
gap: 40px
  `
export default App

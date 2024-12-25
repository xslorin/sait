const questions = {
    "История": {
      "100": {
        question: "Когда был установлен День защитника Отечества?",
        answers: ["23 февраля 1918 года", "23 февраля 1922 года", "23 февраля 1943 года"],
        correct: 0,
        explanation: "23 февраля 1918 года — день первой победы Красной Армии над немецкими войсками."
      },
      "200": {
        question: "Какой праздник раньше справлялся 23 февраля?",
        answers: ["День работника органов внутренних дел", "День авиации", "День Красной Армии"],
        correct: 2,
        explanation: "Раньше 23 февраля отмечался как День Красной Армии."
      },
      "300": {
        question: "Кто был первым главнокомандующим Красной Армии?",
        answers: ["Михаил Фрунзе", "Климент Ворошилов", "Лаврентий Берия"],
        correct: 1,
        explanation: "Климент Ворошилов был первым главнокомандующим Красной Армии."
      },
      "400": {
        question: "Какой город стал первым объектом атаки Красной Армии в 1918 году?",
        answers: ["Петроград", "Москва", "Тула"],
        correct: 2,
        explanation: "Тула стала первым объектом атаки Красной Армии в 1918 году."
      },
      "500": {
        question: "Какой закон был принят в 1993 году, связанный с празднованием 23 февраля?",
        answers: ["Закон о защите Отечества", "Закон о воинской обязанности", "Закон о государственных праздниках"],
        correct: 1,
        explanation: "В 1993 году был принят Закон о воинской обязанности, который связан с празднованием 23 февраля."
      }
    },
    "Военная техника": {
      "100": {
        question: "Какой танк использовался в Первой мировой войне?",
        answers: ["Т-34", "Mark V", "ИС-2"],
        correct: 1,
        explanation: "Mark V — британский танк, использовавшийся в Первой мировой войне."
      },
      "200": {
        question: "Какой самолет использовался в Великой Отечественной войне?",
        answers: ["МиГ-21", "Ил-2", "Су-27"],
        correct: 1,
        explanation: "Ил-2 — штурмовик, использовавшийся в Великой Отечественной войне."
      },
      "300": {
        question: "Какой корабль был символом обороны Ленинграда?",
        answers: ["Аврора", "Варяг", "Адмирал Нахимов"],
        correct: 0,
        explanation: "Аврора — крейсер, ставший символом обороны Ленинграда."
      },
      "400": {
        question: "Какой ракетный комплекс был разработан в СССР?",
        answers: ["Точка", "Першинг", "Скад"],
        correct: 2,
        explanation: "Скад — советский ракетный комплекс."
      },
      "500": {
        question: "Какой танк стал символом Великой Отечественной войны?",
        answers: ["Т-34", "КВ-1", "ИС-2"],
        correct: 0,
        explanation: "Т-34 — советский танк, ставший символом Великой Отечественной войны."
      }
    },
    "Личности": {
      "100": {
        question: "Кто был первым президентом России?",
        answers: ["Борис Ельцин", "Михаил Горбачев", "Владимир Путин"],
        correct: 0,
        explanation: "Борис Ельцин был первым президентом России."
      },
      "200": {
        question: "Кто был главнокомандующим Черноморского флота?",
        answers: ["Федор Ушаков", "Александр Суворов", "Михаил Кутузов"],
        correct: 0,
        explanation: "Федор Ушаков был главнокомандующим Черноморского флота."
      },
      "300": {
        question: "Кто был первым маршалом России?",
        answers: ["Георгий Жуков", "Александр Василевский", "Константин Рокоссовский"],
        correct: 0,
        explanation: "Георгий Жуков был первым маршалом России."
      },
      "400": {
        question: "Кто был первым космонавтом?",
        answers: ["Юрий Гагарин", "Герман Титов", "Алексей Леонов"],
        correct: 0,
        explanation: "Юрий Гагарин был первым космонавтом."
      },
      "500": {
        question: "Кто был первым министром обороны России?",
        answers: ["Дмитрий Рогозин", "Павел Грачев", "Сергей Шойгу"],
        correct: 1,
        explanation: "Павел Грачев был первым министром обороны России."
      }
    },
    "Культура": {
      "100": {
        question: "Какой фильм посвящен Великой Отечественной войне?",
        answers: ["Броненосец Потемкин", "Иди и смотри", "Остров сокровищ"],
        correct: 1,
        explanation: "Иди и смотри — фильм, посвященный Великой Отечественной войне."
      },
      "200": {
        question: "Какая песня стала гимном защитников Отечества?",
        answers: ["Катюша", "Священная война", "Патриот"],
        correct: 1,
        explanation: "Священная война — песня, ставшая гимном защитников Отечества."
      },
      "300": {
        question: "Какой писатель написал роман о войне?",
        answers: ["Александр Пушкин", "Михаил Шолохов", "Лев Толстой"],
        correct: 1,
        explanation: "Михаил Шолохов написал роман Тихий Дон, посвященный войне."
      },
      "400": {
        question: "Какой музей посвящен военной истории?",
        answers: ["Эрмитаж", "Музей Победы", "Третьяковская галерея"],
        correct: 1,
        explanation: "Музей Победы посвящен военной истории."
      },
      "500": {
        question: "Какой праздник отмечается 9 мая?",
        answers: ["День Победы", "День России", "День космонавтики"],
        correct: 0,
        explanation: "9 мая отмечается День Победы."
      }
    }
  };
  
  let score = 0;
  let timer;
  
  const modal = document.getElementById('modal');
  const modalQuestion = document.getElementById('modal-question');
  const modalAnswers = document.getElementById('modal-answers');
  const modalExplanation = document.getElementById('modal-explanation');
  const closeBtn = document.getElementById('close');
  const scoreValue = document.getElementById('score-value');
  
  document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
      const points = question.getAttribute('data-points');
      const category = question.parentElement.previousElementSibling.textContent;
  
      // Проверка, что категория и вопрос существуют
      if (questions[category] && questions[category][points]) {
        const currentQuestion = questions[category][points];
        showQuestion(currentQuestion, question, points);
      } else {
        alert('Ошибка: Вопрос не найден!');
      }
    });
  });
  
  function showQuestion(q, questionElement, points) {
    modal.style.display = 'block';
    modalQuestion.textContent = q.question;
    modalAnswers.innerHTML = '';
    q.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => checkAnswer(q, index, questionElement, points));
      modalAnswers.appendChild(button);
    });
  
    startTimer(120); // 2 минуты
  }
  
  function checkAnswer(q, selectedIndex, questionElement, points) {
    clearInterval(timer);
    if (selectedIndex === q.correct) {
      score += parseInt(points);
      scoreValue.textContent = score;
      alert(`Правильно! Ваш счет: ${score}`);
    } else {
      questionElement.classList.add('wrong');
      modalExplanation.textContent = q.explanation;
    }
    questionElement.classList.add('answered');
    modal.style.display = 'none';
  }
  
  function startTimer(seconds) {
    let timeLeft = seconds;
    modal.querySelector('.timer').textContent = `Осталось: ${timeLeft} сек`;
    timer = setInterval(() => {
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(timer);
        modal.style.display = 'none';
        alert('Время вышло!');
      } else {
        modal.querySelector('.timer').textContent = `Осталось: ${timeLeft} сек`;
      }
    }, 1000);
  }
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(timer);
  });
let levels = [
	// start level 1
	{
		name: 'المستوى الأول',
		images: [
			'https://deerdesigner.com/wp-content/uploads/17706-Article-Illustration-8-Types-of-graphic-design-1200x790-01.png',
			' https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/02/Tips_for_Working_with_a_Graphic_Designer_jpg_WT7S4rHC.jpg?auto=format&q=60&w=1280&h=750&fit=crop&crop=faces',
			'images/animal.jpg',
		],
		questions: [
			//start 2 questions for image 1 in level 1
			{
				questionTitle: ' كم شغلة اخونا قاعد يهوجس فيها؟',
				options: ['6', '7', '8', '9'],
				keyAnswer: '8',
			},
			{
				questionTitle: ' ايش لون المثلث؟',
				options: ['احمر', 'اصفر', 'ازرق', 'اسود'],
				keyAnswer: 'احمر',
			},

			//end 2 questions for image 1 in level 1

			//start 2 questions for image 2 in level 1
			{
				questionTitle: ' لون جزمة اخر شخص من اليسار؟',
				options: ['اصفر', 'اخضر', 'بنفسجي', 'وردي'],
				keyAnswer: 'بنفسجي',
			},
			{
				questionTitle: ' كم في بنت في الصورة؟',
				options: ['1', '2', '3', '4'],
				keyAnswer: '1',
			},

			//end 2 questions for image 2 in level 1

			//start 2 questions for image 3 in level 1
			{
				questionTitle: ' هل في اسد في الصورة؟',
				options: ['لا', 'نعم'],
				keyAnswer: 'لا',
			},
			{
				questionTitle: ' وين مكان الببغاء؟',
				options: ['فوق الزرافة', 'فوق النعامة', 'فوق الدب', 'فوق الفيل'],
				keyAnswer: 'فوق النعامة',
			},

			//end 2 questions for image 3 in level 1
		],
	},
	// end level 1

	// start level 2
	{
		name: 'المستوى الثاني',
		images: [
			'images/restaurant.png',
			'images/kid.png',
			'https://media-api.advertisingvietnam.com/oapi/v1/media?uuid=2df9f835-c4cf-48eb-b7fd-b0e7fc661f9a&resolution=1440x756&type=image',
		],
		questions: [
			//start 2 questions for image 1 in level 2
			{
				questionTitle: ' الكلب يناظر اي جهة؟',
				options: ['يسار', 'يمين'],
				keyAnswer: 'يسار',
			},
			{
				questionTitle: ' الشخص الجالس في نص الطاولة اليسار ماسك؟',
				options: ['برجر', 'بيتزا'],
				keyAnswer: 'بيتزا',
			},

			//end 2 questions for image 1 in level 2

			//start 2 questions for image 2 in level 2
			{
				questionTitle: ' لون تيشيرت الولد الي يبكي؟',
				options: ['اصفر', 'اخضر', 'بنفسجي', 'وردي'],
				keyAnswer: 'اخضر',
			},
			{
				questionTitle: ' كم طفل لابس تيشيرت اصفر؟',
				options: ['1', '2', '3', '4'],
				keyAnswer: '3',
			},
			//end 2 questions for image 2 in level 2

			//start 2 questions for image 3 in level 2
			{
				questionTitle: ' ايش لون السماعة؟',
				options: ['وردي', 'اخضر', 'اسود', 'ابيض'],
				keyAnswer: 'ابيض',
			},
			{
				questionTitle: ' اللون الاضافي على النبتة الموجودة على اليسار؟',
				options: ['وردي', 'اخضر', 'اسود', 'ابيض'],
				keyAnswer: 'وردي',
			},

			//end 3 questions for image 3 in level 2
		],
	},
	// end level 2
	// start level 3
	{
		name: 'المستوى الثالث',
		images: ['images/home-office.jpg', 'images/hospital.webp', 'images/amal.jpg'],
		questions: [
			//start 3 questions for image 1 in level 2
			{
				questionTitle: ' كم الساعة؟',
				options: ['5:59', '4:59', '6:59', '3:59'],
				keyAnswer: '5:59',
			},
			{
				questionTitle: ' كم في خط على الباب؟',
				options: ['10', '11', '12', '13'],
				keyAnswer: '11',
			},
			//end 2 questions for image 1 in level 3

			//start 2 questions for image 2 in level 3
			{
				questionTitle: ' الشرطية ماسكة المسدس بأي يد؟',
				options: ['اليسار', 'اليمين'],
				keyAnswer: 'اليمين',
			},
			{
				questionTitle: ' هل في رسام في الصورة؟',
				options: ['لا', 'نعم'],
				keyAnswer: 'نعم',
			},
			//end 3 questions for image 2 in level 2

			//start 3 questions for image 3 in level 2
			{
				questionTitle: ' كيف كانت عيون أمل؟',
				options: ['مغمضة', 'مفتوحة'],
				keyAnswer: 'مغمضة',
			},
			{
				questionTitle: ' كم في كوب دانكن؟',
				options: ['1', '2', '3', '4'],
				keyAnswer: '2',
			},
			//end 3 questions for image 3 in level 3
		],
	},
	// end level 3

	// Add more levels with their images and questions
];
let imageContainer = document.getElementById('image-container');
let questionContainer = document.getElementById('question-container');
let AllImages = document.getElementById('images');
let questionText = document.getElementById('question-title');
let options = document.getElementById('all-options');
let timeLeft = document.getElementById('time-left');
let scoreContainer = document.getElementById('score-container');
let checkScore = document.getElementById('checkScore');
let levelName = document.getElementById('levelName');
let scoreText = document.getElementById('scoreText');

let currentLevel = 0; // Start with the first level
let currentImage = 0;
let currentQuestion = 0;
let userScore = 0; // Initialize the user's score
let timer = 15;
let countDown;

function showImage() {
	if (currentImage < levels[currentLevel].images.length) {
		AllImages.src = levels[currentLevel].images[currentImage];
		imageContainer.style.display = 'flex';
		questionContainer.style.display = 'none'; // to hide the question when image display

		setTimeout(function () {
			imageContainer.style.display = 'none';
			currentQuestion = 0;
			showQuestions(currentQuestion);
		}, 3000);
	} else {
		if (currentLevel < levels.length - 1) {
			// Move to the next level
			currentLevel++;
			currentImage = 0;
			showImage();
		} else {
			// Handle the situation when all images and questions are displayed.
			showResultForAllAnswers();
		}
	}
}

function showQuestions(index) {
	if (index < 2) {
		// display 3 questions for each image
		questionContainer.style.display = 'flex';
		let level = levels[currentLevel];
		let questionSet = level.questions;
		let question = questionSet[currentImage * 2 + index];
		levelName.innerHTML = level.name;
		questionText.innerHTML = question.questionTitle;
		options.innerHTML = '';
		// hold options btn
		const optionButtons = [];

		question.options.forEach((option) => {
			const btn = document.createElement('button');
			btn.textContent = option;
			optionButtons.push(btn);
			options.appendChild(btn);
		});

		// Add event listeners to the option buttons
		optionButtons.forEach((btn, optionIndex) => {
			btn.addEventListener('click', () => {
				checkAnswer(question.options[optionIndex], question.keyAnswer);
			});
		});
	} // if end
	else {
		// All 3 questions for the current image have been displayed
		// Move to the next image
		currentImage++;
		showImage();
	}

	currentQuestion++;
}

function checkAnswer(myAnswer, correctAnswer) {
	if (myAnswer === correctAnswer) {
		userScore++; // Increase the user's score for each correct answer
	}

	if (
		currentImage === levels[currentLevel].images.length &&
		currentQuestion === levels[currentLevel].questions.length
	) {
		if (currentLevel < levels.length - 1) {
			// Move to the next level
			currentLevel++;
			currentImage = 0;
			currentQuestion = 0;
			showImage();
		} else {
			showImage();
		}
	} else {
		// Show the next question or image, depending on your logic.
		if (currentQuestion < levels[currentLevel].questions.length) {
			showQuestions(currentQuestion);
		} else {
			currentImage++;
			currentQuestion = 0;
			showImage();
		}
	}
}

// function checkAnswer(myAnswer, correctAnswer) {
// 	currentQuestion++; // Change 'currentIndex' to 'currentQuestion'.
// 	clearInterval(countDown);

// 	if (myAnswer === correctAnswer) {
// 		score++;
// 	}

// 	if (currentQuestion < questions.length) {
// 		showQuestions(currentQuestion);
// 		timer = 15; // Adjust the initial timer back to 15 seconds
// 		timeLeft.textContent = timer;
// 		showTimer();
// 	} else {
// 		showResult();
// 	}
// }

function showResultForAllAnswers() {
	// Hide the question container
	questionContainer.style.display = 'none';

	// Display the user's total score
	scoreContainer.style.display = 'flex';
	if (userScore <= 10) {
		scoreText.innerHTML = 'تحتاج تكثر جوز';
	} else if (userScore > 10 && userScore <= 15) {
		scoreText.innerHTML = 'وضعك فالسليم';
	} else if (userScore > 15) {
		scoreText.innerHTML = 'الله علييك يا فنان';
	}
	checkScore.textContent = `نتيجتك: ${userScore} من ${calculateTotalQuestionsCount()}`;
}
function calculateTotalQuestionsCount() {
	let totalCount = 0;
	for (const level of levels) {
		totalCount += level.questions.length;
	}
	return totalCount;
}

showImage();

//show the timer under or upper each question
//show some sentanse depend on the final score
//if click correct and wrong answer change btn color

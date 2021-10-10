interface Question {
    description: string;
    printQuestionChoices: () => void;
    options?: Array<string>;
}

class TextQuestion implements Question{
    description: string;
    
    constructor(description: string) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('Answers:');
    }
}

class MultipleChoiceQuestion implements Question {
    description: string;
    options: Array<string>

    constructor(description: string, options: Array<string>) {
        this.description = description;
        this.options = options;
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        })
    }
}

class BooleanQuestion implements Question {
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    printQuestionChoices() {
        console.log('1.True');
        console.log('2.False');
    }
}

// class RangeQuestion implements Question{
//     description: string;
    
//     constructor(description: string) {
//         this.description = description;
//     }

//     printQuestionChoices() {
//         console.log('Minimum:');
//         console.log('Maximum:');
//     }
// }

const questionTypeList = [
    new BooleanQuestion('Is this sharing useful?'),
    new MultipleChoiceQuestion('What is your favorite language or scripting?', ['CSS', 'HTML', 'JS', 'Python']),
    new TextQuestion('Describe some TS features'),
    // new RangeQuestion('What is the range of light speed?'),
]

function printQuiz(questions: Array<Question>) {
    questions.forEach((question: Question)  => {
        console.log(question.description)
        question.printQuestionChoices();
    })
}

printQuiz(questionTypeList);


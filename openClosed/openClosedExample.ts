interface Question {
    type: string;
    description: string;
    options?: Array<string>;
}

const questionTypeList: Array<Question> = [
    {
        type: 'boolean',
        description: 'Is this sharing useful?'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite language or scripting?',
        options: ['CSS', 'HTML', 'JS', 'Python']
    },
    {
        type: 'text',
        description: 'Describe some TS features'
    },
    // {
    //     type: 'range',
    //     description: 'What is the range of light speed?'
    // },
]

function printQuiz(questions: Array<Question>) {
    questions.forEach((question: Question) => {
        switch (question.type) {
            case 'boolean':
                console.log('1.True');
                console.log('2.False');
                break;
            case 'multipleChoice':
                question?.options?.forEach((option: any, index: any) => {
                    console.log(`${index + 1}. ${option}`);
                })
                break;
            case 'text':
                console.log('Answers:');
                break;
            // case 'range':
            //     console.log('Minimum:');
            //     console.log('Maximum:');
            //     break;
        }
    })
}

printQuiz(questionTypeList);


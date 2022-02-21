let game = {
    score: 0,
    indexVoprosa: 0,
    /**
     * Запускает игру.
     */
    run() {
        if (!this.isVoprosExists()) {
            console.log(`А уже все, твой счет ${this.score}`)
            this.indexVoprosa = 0;
            this.score = 0;
            if (confirm("Еще каточку?")) {
                this.run();
            }
            return;
        }
        let result = zelenskii.askQuestion(voprosi[this.indexVoprosa]);
        if (result) {
            this.score++;
        }
        this.indexVoprosa++;
        this.run();
    },
    isVoprosExists() {
        return voprosi[this.indexVoprosa] !== undefined;
    }
}


let voprosi = [
    {
        question: "что любят хохлы?",
        otvet: {
            "a": "Сало",
            "b": "Не сало",
            "с": "Точно не сало",
            "d": "Хто я?"
        },
        PravilniyOtvet: "a",
    },
    {
        question: "Где ты??",
        otvet: {
            "a": "Дома",
            "b": "В игре",
            "с": "Не дома",
            "d": "Хто я?"
        },
        PravilniyOtvet: "b",
    },
    {
        question: "Нравится игра?",
        otvet: {
            "a": "Нет",
            "b": "Не очень",
            "с": "Да",
            "d": "Хто ты?"
        },
        PravilniyOtvet: "c",
    },
    {
        question: "В чем сила брат?",
        otvet: {
            "a": "В силе",
            "b": "В селе",
            "с": "ты хто?",
            "d": "В правде"
        },
        PravilniyOtvet: "d",
    },
    {
        question: "Хто ты?",
        otvet: {
            "a": "Хохол",
            "b": "Не хохол",
            "с": "Программист",
            "d": "Хто я?"
        },
        PravilniyOtvet: "c",
    },
];


let zelenskii = {
    askQuestion(voprosi) {
        let varietions = "";
        for (let key in voprosi.otvet) {
            varietions += `${key}: ${voprosi.otvet[key]}\n`;
        }
        let answer = prompt(`${voprosi.question}, варианты ответа:\n${varietions}`);
        return answer === voprosi.PravilniyOtvet;
    }
}
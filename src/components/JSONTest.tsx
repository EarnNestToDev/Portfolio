import JSON_FILE_PATH from "../../public/data/saludos.json";

const JSON = JSON_FILE_PATH;
const MIN_RANDOM_NUMBER = 0;

const Test = () => {

    return (
        <div className="text-2xl font-bold text-orange-400">
            {
                randomResult(JSON.length)
            }
        </div>
    );
}

function randomResult(max: number) {

    max = Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max - MIN_RANDOM_NUMBER + 1)) + MIN_RANDOM_NUMBER;

    const saludo = JSON[randomNumber].text;

    return saludo;
}

export default Test;
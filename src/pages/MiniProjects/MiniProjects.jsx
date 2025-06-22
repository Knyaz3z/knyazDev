import Heading from "../../components/Heading/Heading";
import {use, useEffect, useState} from "react";
import './MiniProjects.scss';
import CalcInput from "./StyledRange/CalcInput";


function MiniProjects() {


    return (
        <>

            <div className="projects container">
                <Heading title='Weather API'/>
                <WeatherAPI/>
                <Heading title='Anime API'/>
                <AnimeGirlAPI/>
                <Heading title='Slider'/>
                <Slider/>
                {/*<Heading title='Compound Interest Calculator'/>*/}
                {/*<Calculator/>*/}
            </div>
        </>

    );
}

function WeatherAPI() {
    const [inputValue, setInputValue] = useState('');
    const [city, setCity] = useState('Moscow')
    const [weatherData, setWeatherData] = useState(null)

    const handleClick = () => {
        if (inputValue.trim() !== '') {
            setCity(inputValue.trim());
        } else {
            alert('Введите город!')
        }
    };

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=cc7ccaeed1af46ad8cf100410251604&q=${city}`);
            const data = await res.json();
            setWeatherData(data);
        }

        getData();

    }, [city])


    return (
        weatherData && (
            <div className="weather">
                <h3>Weather Widget</h3>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder='Enter city'/>

                <div className="weather__display">
                    <p className="city">{weatherData.location.name}, {weatherData.location.country}</p>
                    <p className="temp">{weatherData.current.temp_c}℃</p>
                    <p className="now">{weatherData.current.condition.text}</p>
                    <div className="humwind">
                        <p className="humidity">humidity {weatherData.current.humidity}%</p>
                        <p className="wind">wind {weatherData.current.wind_kph} kp/h</p>
                    </div>
                    <button id='handleButton' className='button' onClick={handleClick} type='button'>Change city
                    </button>
                </div>
            </div>
        )
    );
}

function AnimeGirlAPI() {
    const [imageUrl, setImageUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Функция загрузки картинки
    const fetchImage = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://nekos.life/api/v2/img/neko');
            const data = await response.json();
            setImageUrl(data.url);
        } catch (error) {
            console.error('Ошибка:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Загружаем первую картинку при открытии
    useState(() => {
        fetchImage();
    }, []);
    return (
        <div className="anime__api">
                {imageUrl && <img className='anime__pic' src={imageUrl} alt="Random anime girl" />}
                <button onClick={fetchImage} className='button'>Change girl</button>
        </div>
    )
}

function Slider() {
    const sliderItems = [
        {link: '/slider/1.jpg'},
        {link: '/slider/2.jpg'},
        {link: '/slider/3.jpg'},
        {link: '/slider/4.jpg'},
    ];
    const total = sliderItems.length;
    const [index, setIndex] = useState(0);

    const getPrevIndex = () => (index - 1 + total) % total;
    const getNextIndex = () => (index + 1) % total;

    function handleClickPrev() {
        setIndex((prev) => (prev - 1 + total) % total);
    }

    function handleClickNext() {
        setIndex((prev) => (prev + 1) % total);
    }

    return (
        <div className="slider">
            <span onClick={handleClickPrev} className="slider__prev">&#8249;</span>
            <div className="slider__box">
                <img
                    key={getPrevIndex()}
                    src={sliderItems[getPrevIndex()].link}
                    className="slider__img slider__img--prev"
                    alt=""
                />
                <img
                    key={index}
                    src={sliderItems[index].link}
                    className="slider__img slider__img--active"
                    alt=""
                />
                <img
                    key={getNextIndex()}
                    src={sliderItems[getNextIndex()].link}
                    className="slider__img slider__img--next"
                    alt=""
                />
            </div>
            <span onClick={handleClickNext} className="slider__next">&#8250;</span>
        </div>
    );
}

// Calculator.js


function Calculator() {
    const [isActive, setIsActive] = useState(0);
    const [inputs, setInputs] = useState({
        targetAmount: 100000,
        investmentPeriod: 5,
        initialInvestment: 10,
        depositFrequency: 'year',
        projectedProfitability: 13,
        interestAccrual: 'year',
        tax: 15
    });
    const [result, setResult] = useState(0);

    // Функция для обработки изменений в инпутах
    const handleInputChange = (name, value) => {
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Функция расчета сложных процентов
    const calculateCompoundInterest = () => {
        const {
            initialInvestment,
            investmentPeriod,
            projectedProfitability,
            interestAccrual,
            depositFrequency,
            tax
        } = inputs;

        // Конвертируем проценты в десятичную дробь
        const annualRate = projectedProfitability / 100;
        const taxRate = tax / 100;

        // Количество периодов начисления в год
        const periodsPerYear = interestAccrual === 'year' ? 1 : 12;

        // Общее количество периодов
        const totalPeriods = investmentPeriod * periodsPerYear;

        // Эффективная ставка с учетом налога
        const effectiveRate = annualRate * (1 - taxRate);

        // Расчет конечной суммы
        const finalAmount = initialInvestment * Math.pow(1 + effectiveRate / periodsPerYear, totalPeriods);

        return finalAmount.toFixed(2);
    };

    // Пересчитываем результат при изменении inputs
    useEffect(() => {
        setResult(calculateCompoundInterest());
    }, [inputs]);

    return (
        <div className="calculator">
            <div className="calculator__btn-box">
                <button onClick={() => setIsActive(0)}
                        className={`calculator__btn ${isActive === 0 ? 'active' : null}`}>Calculating the amount
                </button>
                <button onClick={() => setIsActive(1)}
                        className={`calculator__btn ${isActive === 1 ? 'active' : null}`}>Calculating the time limit
                </button>
            </div>

            <div className="inputs">
                <form id='form1'>
                    <CalcInput
                        isRange={false}
                        type='text'
                        className="inputs__input"
                        label='How much do you want to save?'
                        value={inputs.targetAmount}
                        onChange={(value) => handleInputChange('targetAmount', value)}
                    />
                    <CalcInput
                        isRange={true}
                        type='range'
                        label='Investment period'
                        classname='custom__slider'
                        value={inputs.investmentPeriod}
                        onChange={(value) => handleInputChange('investmentPeriod', value)}
                        min={1}
                        max={50}
                    />
                    <CalcInput
                        isRange={false}
                        type='text'
                        className="inputs__input"
                        label='Initial investment amount'
                        value={inputs.initialInvestment}
                        onChange={(value) => handleInputChange('initialInvestment', value)}
                    />
                    <div className="custom__range-header">
                        <h3> Frequency of deposits</h3>
                        <select
                            className="inputs__input"
                            required
                            value={inputs.depositFrequency}
                            onChange={(e) => handleInputChange('depositFrequency', e.target.value)}
                        >
                            <option value="year">per year</option>
                            <option value="month">per month</option>
                        </select>
                    </div>
                    <CalcInput
                        isRange={true}
                        type='range'
                        label='Projected profitability, per annum'
                        classname='custom__slider'
                        value={inputs.projectedProfitability}
                        onChange={(value) => handleInputChange('projectedProfitability', value)}
                        min={1}
                        max={100}
                    />
                    <div className="custom__range-header">
                        <h3> Accrual of interest </h3>
                        <select
                            className="inputs__input"
                            required
                            value={inputs.interestAccrual}
                            onChange={(e) => handleInputChange('interestAccrual', e.target.value)}
                        >
                            <option value="year">per year</option>
                            <option value="month">per month</option>
                        </select>
                    </div>
                    <CalcInput
                        isRange={false}
                        type='text'
                        className="inputs__input"
                        label='Tax'
                        value={inputs.tax}
                        onChange={(value) => handleInputChange('tax', value)}
                    />
                    <div className="result__box">
                        <h3>Final Amount:</h3>
                        <span className='result'>{result}</span>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default MiniProjects;

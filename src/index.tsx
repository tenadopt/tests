//1. Вопрос:
//
// В коде в разных местах допущена одна и та же ошибка.
//
// Какое слово должно быть написано вместо ошибочного?


/*export const Wrapper = () => {
    return <User city = "minsk" />
}
type PropsType = {
    city: string
}
export const User React.FC<PropsType> = (props) => {
    return <div>hello</div>
}*/


/*
2. Что нужно написать вместо ххх, чтобы на экране увидеть:
    😀 Заголовок видео

📼 Контент видео

📊 Статистика лайков

❗ Ответ дать минимально возможным объёмом кода*/


/*
import ReactDOM from 'react-dom'

export const YoutubeVideo = () => {
    return <div>
        <VideoHeader />
        <VideoContent />
        <VideoStatistics />
    </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div><YoutubeVideo/></div>,
    document.getElementById('root')
);
*/

/*3. Что нужно написать вместо ххх, что бы код работал?*/

/*
type UserPropsType = {
    name: string
    description: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>
        <h1>Имя: {props.name}</h1>
        <div>Описание: {props.description}</div>
    </div>
}
*/

/* 4. Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки*/


/*type PropsType = {
    city: string
    country: string
    coords?: string
}
// 'belarus', 'minsk', '53.917501,27.604851'
export const Wrapper1 = () => {
    return <PropsComponent1 country='belarus' city='minsk'/>
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}*/

/*5. Что нужно написать вместо xxx и yyy? Ответ дайте через пробел, например:
blabla onClick(props)*/

/*
type PagePropsType = {
    age: number
    name: string
    avatarUrl: string
}
const Page: React.FC<PagePropsType> = (props) => {
    return <User a={props.age} n={props.name} />
    console.log({a});
}
type UserPropsType = {
    a: number
    n: string
}
export const User: React.FC<UserPropsType> = (props) => {
    return <div>name: {props.n}, age: {props.a}</div>
}
*/

/* 6. Что нужно написать вместо XXX и YYY? Ответ дайте через пробел, например:
car user*/

/*type NewsType = {
    title: string
    author: string
}
type ArticleType = {
    title: string
    date: string
    text: string
}
type PagePropsType = {
    news: NewsType[]
    mainArticle: ArticleType
}
export const Page: React.FC<PagePropsType> = (props) => {
    return <div>
        <article>
            <h1>Название: {props.mainArticle.title}</h1>
            <div>{props.mainArticle.date}</div>
            <div>{props.mainArticle.text}</div>
        </article>
        <aside>Articles:
            <ul>
                {props.news.map(n => <li>{n.title}, {n.author}</li>)}
            </ul>
        </aside>
    </div>
}*/

/*7. Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?

    Ответ дайте через пробел, например: props.x wallets*/

/*
type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100}
    ]

    return <div>
        <UserWallet wallet={wallets[0]} />
        <UserWallet wallet={wallets[1]} />
    </div>
}
*/

/* 8. Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?

    Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}*/

/*
import ReactDOM from 'react-dom'
import {Simulate} from "react-dom/test-utils";
import timeUpdate = Simulate.timeUpdate;

export const VideoHeader = (props: {videoName: string}) => {
    return <div>
        😀 {props.videoName}
    </div>
}
export const VideoContent = (props: {videoContent: string}) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription = (props: {videoDescription: string}) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const YoutubeVideo = (props: any) => {
    return <div>
        <VideoHeader videoName = {props.video.title} />
        <VideoContent videoContent = {props.video.link} />
        <VideoDescription videoDescription ={props.video.description} />
    </div>
}

export const App = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course'
    }

    return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);
*/


/* 9. Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел*/

/*import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

    const style = {
        color: props.fontColor,
        backgroundColor: props.bgColor
    }

    return <button style={style}>
        {props.title}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)*/

/*Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел*/

/*import ReactDOM from 'react-dom'

const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}


const Father = (props: any) => {
    return <div>
        I am father. My name is {props.name}
        <Son name={props.sonName} />
    </div>
}

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName} />
    </div>
}

export const App = () => {
    return <div>
        <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import zhTW from 'date-fns/locale/zh-TW';

const locales = {
    'zh-TW': zhTW
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const message = {
    today: '今天',
    previous: '◀️',
    next: '▶️',
    month: '月',
    week: '週',
    day: '日',
    work_week: '工作週',
    agenda: '近期活動'
};

const Home = () => {
    return (
        <>
            <Calendar
                events={[]}
                localizer={localizer}
                culture="zh-TW"
                startAccessor="start"
                endAccessor="end"
                messages={message}
                style={{ height: 500 }}
            />
        </>
    );
};

export default Home;

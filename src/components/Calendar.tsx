import { Calendar as ReactBigCalendar, CalendarProps, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import zhTW from 'date-fns/locale/zh-TW';

const locales = {
    'zh-TW': zhTW
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay: () => 0,
    locales
});

const message = {
    today: '今天',
    previous: '◀',
    next: '▶',
    month: '月',
    week: '週',
    day: '日',
    work_week: '工作週',
    allDay: '全天',
    date: '日期',
    time: '時段',
    event: '活動',
    agenda: '近期活動',
    noEventsInRange: '目前無活動'
};

const Calendar: React.FC<Partial<CalendarProps>> = (props) => (
    <ReactBigCalendar
        localizer={localizer}
        messages={message}
        startAccessor="start"
        endAccessor="end"
        culture="zh-TW"
        style={{ height: 'calc(100vh - 110px)' }}
        popup
        {...props}
    />
);

export default Calendar;

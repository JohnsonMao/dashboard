import { useState, useEffect } from 'react';
import {
    Calendar as ReactBigCalendar,
    CalendarProps,
    dateFnsLocalizer,
    Views,
    View
} from 'react-big-calendar';
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

const breakPoint = (window: Window) => window.innerWidth < 600;

const Calendar: React.FC<Partial<CalendarProps>> = (props) => {
    const [isMobile, setIsMobile] = useState(breakPoint(window));
    const [view, setView] = useState<View>(isMobile ? Views.AGENDA : Views.MONTH);
    const views = isMobile
        ? [Views.AGENDA]
        : [Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA];

    const handleView = (v: View) => {
        setView(v);
    };

    useEffect(() => {
        const resizeCalendar = (e: Event) => {
            setIsMobile(() => {
                if (breakPoint(e.target as Window)) setView(Views.AGENDA);
                return breakPoint(e.target as Window);
            });
        };
        window.addEventListener('resize', resizeCalendar);

        return () => window.removeEventListener('resize', resizeCalendar);
    }, []);

    return (
        <ReactBigCalendar
            localizer={localizer}
            messages={message}
            culture="zh-TW"
            view={view}
            views={views}
            onView={handleView}
            style={{ height: 'calc(100vh - 110px)' }}
            popup
            {...props}
        />
    );
};

export default Calendar;

import Table from '../components/Table';

const Example: React.FC = () => {
    const fetchDroplist = () => {
        fetch('/api/DropList?type=slope')
            .then((res) => res.json())
            .then((d) => console.log(d));
    };

    return <Table />;
};

export default Example;

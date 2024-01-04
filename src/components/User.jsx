import { getDatabase, ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const User = () => {
    const db = getDatabase();
    const { id } = useParams();
    const { type } = useParams();
    const [tab, setTab] = useState(type);
    const [user, setUser] = useState('');

    useEffect(() => {
        const getUser = ref(db, 'users/' + id);
        onValue(getUser, (snapshot) => {
            const data = snapshot.val();
            setUser(data);
        });
    }, [db, id]);

    const dataList = [
        { time: '9 am', MONDAY: 'Yoga', TUESDAY: 'Kickboxing', WEDNESDAY: 'Zumba', THURSDAY: 'Yoga', FRIDAY: 'Kickboxing', SATURDAY: 'Zumba', SUNDAY: 'Rest' },
        { time: '11 am', MONDAY: 'Zumba', TUESDAY: 'Yoga', WEDNESDAY: 'Kickboxing', THURSDAY: 'Zumba', FRIDAY: 'Yoga', SATURDAY: 'Kickboxing', SUNDAY: 'Rest' },
        { time: '1 pm', MONDAY: 'Rest', TUESDAY: 'Yoga', WEDNESDAY: 'Kickboxing', THURSDAY: 'Zumba', FRIDAY: 'Yoga', SATURDAY: 'Kickboxing', SUNDAY: 'Rest' },
        { time: '3 pm', MONDAY: 'Yoga', TUESDAY: 'Kickboxing', WEDNESDAY: 'Rest', THURSDAY: 'Yoga', FRIDAY: 'Kickboxing', SATURDAY: 'Zumba', SUNDAY: 'Rest' },
        { time: '5 pm', MONDAY: 'Zumba', TUESDAY: 'Yoga', WEDNESDAY: 'Kickboxing', THURSDAY: 'Rest', FRIDAY: 'Yoga', SATURDAY: 'Kickboxing', SUNDAY: 'Zumba' },
        { time: '7 pm', MONDAY: 'Yoga', TUESDAY: 'Kickboxing', WEDNESDAY: 'Zumba', THURSDAY: 'Yoga', FRIDAY: 'Kickboxing', SATURDAY: 'Rest', SUNDAY: 'Rest' },
        { time: '9 pm', MONDAY: 'Zumba', TUESDAY: 'Yoga', WEDNESDAY: 'Kickboxing', THURSDAY: 'Zumba', FRIDAY: 'Yoga', SATURDAY: 'Kickboxing', SUNDAY: 'Rest' },
        // Add other data as needed
    ];

    console.log(user);

    return (
        <div className="user-background">
            <div className="w-full bg-transparent flex">
                <div className="bg-transparent">Schedule</div>
                <div className="bg-transparent">Subscriptions</div>
                {
                    tab === 'schedule' ? (
                        <div className="bg-white p-4 h-fit rounded-xl">
                            <div className="overflow-x-auto">
                                <table className="min-w-full table-auto border-collapse border-gray-300 rounded-xl">
                                    <thead>
                                        <tr>
                                            <th className="border-gray-300 px-4 py-2 bg-white">Time</th>
                                            {Object.keys(dataList[0]).slice(1).map(day => (
                                                <th key={day} className="border-gray-300 px-4 py-2 text-black bg-white">{day}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataList.map((data, index) => (
                                            <tr key={index}>
                                                <td className="border-gray-300 px-4 py-2 bg-white text-black">{data.time}</td>
                                                {Object.entries(data).slice(1).map(([key, value], i) => (
                                                    <td key={i} className="border-gray-300 px-4 py-2 bg-white text-black">{value}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default User;

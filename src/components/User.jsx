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
        <div className="user-background flex justify-center mt-24 overflow-x-clip">
            <div className="w-full bg-transparent items-center flex flex-col">
                <div className="flex w-full bg-transparent mb-6 gap-10 items-center justify-center">
                    <div className="bg-transparent">
                        <button
                            className="w-[200px] mt-4 h-12 text-black font-semibold 
                            bg-gradient-to-r from-indigo-500 via-purple-500
                             to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 
                             hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                            onClick={() => setTab('schedule')}
                        >
                            Schedule
                        </button>
                    </div>
                    <div className="bg-transparent">
                        <button
                            className="w-[200px] mt-4 h-12 text-black font-semibold 
                            bg-gradient-to-r from-indigo-500 via-purple-500
                             to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 
                             hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                            onClick={() => setTab('subscriptions')}
                        >
                            Subscriptions
                        </button>
                    </div>
                </div>
                {
                    tab === 'schedule' ? (
                        <div className="bg-white p-4 h-fit w-fit rounded-xl">
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
                        <div className="bg-white p-4 h-fit w-fit rounded-xl">
                            <div className="overflow-x-auto bg-transparent text-black">
                            {
                                user.subscription ? 'Your current subscription are' : 'No Active Subscriptions'
                            }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default User;

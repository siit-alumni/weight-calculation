import { userSex, userBodyType } from '../Settings/settings';

export default function UserData({ userData }) {
    if (!userData) {
        return <p>No user data available.</p>;
    }

    return (
        <div>
            <h2>Informatii despre {userData.name}:</h2>
            <p><strong>Varsta:</strong> {userData.age} ani</p>
            <p><strong>Inaltime:</strong> {userData.height} cm</p>
            <p><strong>Greutate:</strong> {userData.weight} kg</p>
            <p><strong>Sex:</strong> {userSex[userData.gender]}</p>
            <p><strong>Tip corp:</strong> {userBodyType[userData.bodyType]}</p>
        </div>
    );
};

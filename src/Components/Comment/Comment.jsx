import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { getUserFromId, updateUserInLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';

export default function Comment() {
    const { userData, setUserData } = useContext(UserContext);
    const selectedUser = getUserFromId(userData);
    const [comment, setComment] = useState(selectedUser.comment || '');
    const [originalComment, setOriginalComment] = useState(selectedUser.comment || '');
    const { t } = useTranslation();

    const handleSave = () => {
        if (selectedUser && selectedUser.id !== undefined) {
            const updatedUser = { ...selectedUser, comment };
            updateUserInLocalStorage(updatedUser);
            setUserData(updatedUser.id);
            setOriginalComment(comment);
            
        }
    };

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleDiscard = () => {
        setComment(originalComment);
    };

    return (
        <div className="comment-container">
            <h4>{t('comments.title')} {selectedUser.name}</h4>
            <textarea
                value={comment}
                onChange={handleChange}
                placeholder={t('comments.placeholder').replace('{{name}}', selectedUser.name)}
                rows="6"
                style={{ resize: 'both' }}
            />
            <div className="button-group">
                <button onClick={handleSave}>{t('comments.saveButton')}</button>
                <button onClick={handleDiscard}>{t('comments.resetButton')}</button>
            </div>
        </div>
    );
}
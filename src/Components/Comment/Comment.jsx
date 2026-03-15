import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import { updateUserInLocalStorage } from '../functions/functions';
import { useTranslation } from 'react-i18next';

export default function Comment() {
    const { userData, setUserData } = useContext(UserContext);
    const [comment, setComment] = useState('');
    const [originalComment, setOriginalComment] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
  
            const initialComment = userData.comment || '';
            setComment(initialComment);
            setOriginalComment(initialComment);
        
    }, [userData]);

    const handleSave = () => {
        if (userData && userData.id !== undefined) {
            const updatedUser = { ...userData, comment };
            updateUserInLocalStorage(updatedUser);
            setUserData(updatedUser);
            setOriginalComment(comment);
        }
    };

    const handleDiscard = () => {
        setComment(originalComment);
    };

    return (
        <div className="comment-container">
            <h4>{t('comments.title')} {userData.name}</h4>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t('comments.placeholder').replace('{{name}}', userData.name)}
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
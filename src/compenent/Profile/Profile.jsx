import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import supabase from '../../supabase';
import Menu from '../Menu/Menu';
import CryptoJS from 'crypto-js';
import './Profile.css';

function ProfilePage() {
    const [profile, setProfile] = useState({
        nom: '', prenom: '', email: '', adresse: '', dateNaissance: '', telephone: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { userId } = useParams(); 

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('Authentification')
                .select('*')
                .eq('id', userId)
                .single();

            if (error) {
                console.error('Erreur lors du chargement du profil:', error);
                return;
            }

            setProfile(data);
        };

        fetchProfile();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('Authentification')
            .update(profile)
            .eq('id', userId);

        if (error) {
            alert('Erreur lors de la mise à jour:', error.message);
        } else {
            alert('Profil mis à jour avec succès.');
            setIsEditing(false);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        const hashedPassword = CryptoJS.SHA256(newPassword).toString();

        const { error } = await supabase
            .from('Authentification')
            .update({ password: hashedPassword })
            .eq('id', userId);

        if (error) {
            alert('Erreur lors de la mise à jour du mot de passe:', error.message);
        } else {
            alert('Mot de passe mis à jour avec succès.');
            setIsChangingPassword(false);
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="app">
            <Menu />
            <div className="profile-content">
                {!isEditing && !isChangingPassword ? (
                    <div className="profile-info">
                        <h2>Profil Utilisateur</h2>
                        <p><strong>Nom:</strong> {profile.nom}</p>
                        <p><strong>Prénom:</strong> {profile.prenom}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Adresse:</strong> {profile.adresse}</p>
                        <p><strong>Date de Naissance:</strong> {profile.dateNaissance}</p>
                        <p><strong>Téléphone:</strong> {profile.telephone}</p>
                        <button onClick={() => setIsEditing(true)}>Modifier le Profil</button>
                        <button onClick={() => setIsChangingPassword(true)}>Changer le Mot de Passe</button>
                    </div>
                ) : isEditing ? (
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" name="nom" value={profile.nom || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Prénom</label>
                            <input type="text" name="prenom" value={profile.prenom || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={profile.email || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Adresse</label>
                            <input type="text" name="adresse" value={profile.adresse || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Date de Naissance</label>
                            <input type="date" name="dateNaissance" value={profile.dateNaissance || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Téléphone</label>
                            <input type="tel" name="telephone" value={profile.telephone || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="save-button">Sauvegarder les Changements</button>
                            <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Annuler</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handlePasswordChange} className="password-form">
                        <div className="form-group">
                            <label>Nouveau mot de passe</label>
                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label>Confirmer le nouveau mot de passe</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="save-button">Sauvegarder le mot de passe</button>
                            <button type="button" className="cancel-button" onClick={() => setIsChangingPassword(false)}>Annuler</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;

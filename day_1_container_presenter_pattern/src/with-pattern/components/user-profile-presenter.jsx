import { useState, useEffect } from "react";
import Error from "./common/error";
import Loading from "./common/loading";
import ProfileHeader from "./profile/profile-header";
import PostsList from "./posts/post-list";

function UserProfilePresenter({
    user,
    posts,
    loading,
    error,
    onUpdateUser,
    onRetry,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState(null);
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                bio: user.bio,
            });
        }
    }, [user]);
    function handleInputChange(field, value) {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        if (formError) setFormError(null);
    }

    async function handleSaveProfile() {
        const result = await onUpdateUser(formData);
        if (result.success) {
            setIsEditing(false);
            setFormError(null);
        } else {
            setFormError(result.error);
        }
    }

    function handleCancelEdit() {
        setIsEditing(false);
        setFormError(null);
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                bio: user.bio,
            });
        }
    }

    if (loading) {
        return <Loading message="Loading user profile..." />;
    }

    if (error) {
        return (
            <Error
                title="Oops! Something went wrong"
                message={error}
                onRetry={onRetry}
            />
        );
    }

    return (
        <div className="user-profile">
            <ProfileHeader
                user={user}
                isEditing={isEditing}
                formData={formData}
                formError={formError}
                onStartEdit={() => setIsEditing(true)}
                onSaveProfile={handleSaveProfile}
                onCancelEdit={handleCancelEdit}
                onInputChange={handleInputChange}
            />

            <PostsList posts={posts} />
        </div>
    );
}

export default UserProfilePresenter;

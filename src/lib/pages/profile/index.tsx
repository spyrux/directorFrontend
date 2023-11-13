import ProfileCard from './components/ProfileCard';
import ProfileContainer from './components/ProfileContainer';

const Profile = () => {
  return (
    // placeholder info replace with fetched data
    <div className="wrapper mx-auto flex justify-start w-8/12 font-nhgdp">
      <ProfileCard
        about=" Kelly Ling is a visionary director who has taken the New York City film scene by storm. Born and raised in the suburbs of Toronto, Kelly developed a deep passion for storytelling from a young age. Her unique perspective and creative flair have made her a rising star in the world of cinema."
        website="www.workbykelly.com"
        instagram="kellyling"
        twitter="kellymonjaro"
        linkedin="Kelly Ling"
        username="kellymonjaro"
        image="https://picsum.photos/300/300?image=2"
        key={1}
        name="Kelly Ling (1/1000)"
        location="New York City"
        role="Director from New York City"
      />
      <div className="text-left h-max mt-0 align-top">
        <ProfileContainer />
      </div>
    </div>
  );
};

export default Profile;

import MeetupForm from '../../components/meetups/NewMeetupForm';

// our-domain.com/new-meetup

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

// import PropTypes from 'prop-types';

export class Friend {

  static amountOfFriends = 0;

  constructor(name, age, gender, isCloseFriend, father, pronoun) {

    this.name = name;
    this.age = age;
    this.gender = gender;
    this.isCloseFriend = isCloseFriend;
    this.father = father;
    this.pronoun = pronoun;

    Friend.amountOfFriends++;
    this.id = Friend.amountOfFriends;

  }

}

const FriendList = () => {

  const friends = [
    new Friend("Zwe Khant Kyaw", 16, 'male', true, "Jake", "He"),
    new Friend("Khant Shan Zwe", 16, 'male', true, "Josh", "He"),
    new Friend("May Thazin", 15, 'female', true, "some name", "She"),
    new Friend("Bob", 20, 'male', false, "Mike", "He"),
  ];

  // const itemList = props.list;

  friends.sort((a, b) => a.name.localeCompare(b.name));

  const friendList = friends.map((friend) =>
    <li key={friend.id}>
      {friend.name}: <b>{friend.age}</b> <br />
      {friend.isCloseFriend ? `${friend.pronoun} is a very good friend` : `${friend.pronoun} is a friend`}
    </li>);

  return (

    <ol>
      {friendList}
    </ol>

  );

};

// FriendList.propTypes = {

//   list: PropTypes.array

// };

export default FriendList;
class User {
  constructor(id, first_name, last_name, email, user_type, password, image, location) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.user_type = user_type;
    this.password = password;
    this.image = image;
    this.location = location;
  }
}

export default User;
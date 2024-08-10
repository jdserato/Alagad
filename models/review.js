class Review {
  constructor(id, from, to, bookingId, rating, notes, date) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.bookingId = bookingId;
    this.rating = rating;
    this.notes = notes;
    this.date = date;
  }
}

export default Review;
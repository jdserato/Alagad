class Booking {
  constructor(id, workerId, clientId, date, time, status, cancellation, proof) {
    this.id = id;
    this.workerId = workerId;
    this.clientId = clientId;
    this.date = date;
    this.time = time;
    this.status = status;
    this.cancellation = cancellation;
    this.proof = proof;
  }
}

export default Booking;
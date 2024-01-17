const readers = [];

const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const cardIDInput = document.getElementById("cardID");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const booksTakenInput = document.getElementById("books");
const submitBtn = document.getElementById("submitBtn");

class Reader {
  constructor(name, surname, cardID, address, phone) {
    (this.name = name),
      (this.surname = surname),
      (this.cardID = cardID),
      (this.address = address),
      (this.phone = phone),
      (this.books = []);
  }
  setBooks(books) {
    this.books.push(books);
  }
  getBooks() {
    this.books.forEach((el) =>
      console.log(`${this.name} ${this.surname} took these books: ${el}`)
    );
  }
  getReaderInfo() {
    console.log(`${this.name} ${this.surname} ${this.cardID} ${this.cardID}`);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameInputValue = nameInput.value;
  const lastNameValue = lastNameInput.value;
  const cardIDValue = cardID.value;
  const addressValue = addressInput.value;
  const phoneValue = phoneInput.value;
  const booksValue = booksTakenInput.value;
  console.log(
    nameInputValue,
    lastNameValue,
    cardIDValue,
    addressValue,
    phoneValue,
    booksValue
  );
});

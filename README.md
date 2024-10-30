# Front-end take home assignment

## Task: Build a "Cash Advance Dashboard" Interface

### Project Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/doeunkwon/bree-takehome.git
   cd bree-takehome
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   This will start the development server and open the application in your default web browser. If it doesn't open automatically, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Design Decisions
- **Aesthetics:** I went for a very minimalistic and clean aesthetic. I believe it's crucial in creating a user-friendly interface that doesn't overwhelm the user with unnecessary elements. By focusing on simplicity, the design ensures that users can easily navigate the dashboard and access the information they need without distraction. The use of a limited color palette and ample white space helps in maintaining a professional and modern look, which is essential for financial applications where clarity and precision are paramount.

- **Component Structure:** The application is structured with reusable components such as `Balance`, `TransactionList`, and `RequestModal`. This modular approach allows for easy maintenance and scalability.

- **State Management:** React's `useState` and `useEffect` hooks are used for managing component state and side effects. This keeps the code clean and easy to understand.

- **Styling:** CSS is used for styling, with a focus on responsive design. Media queries ensure the application is usable on various screen sizes.

- **TypeScript:** The use of TypeScript provides type safety, which helps catch errors during development and improves code quality.

### Challenges and Solutions

- **Responsive Design:** Ensuring the application looks good on all devices was a challenge. This was addressed by using CSS flexbox and media queries to create a responsive layout.

- **Form Validation:** Implementing validation for the cash advance request form was crucial. The solution involved checking the input amount against predefined limits and displaying appropriate messages.

- **State Management:** Managing the state of the modal and banner messages required careful handling to ensure a smooth user experience. This was achieved using React hooks and effect cleanup functions.

### Interesting Solutions

- **Banner Notifications:** A banner notification system was implemented to provide feedback to users. This uses a combination of state and CSS animations to display success or error messages.

- **Transaction Filtering:** The `TransactionList` component includes a filtering mechanism that allows users to view transactions based on their status. This was implemented using a combination of state and array filtering.

### Notes

- The application is designed to be easily extendable, allowing for additional features or components to be added with minimal changes to the existing codebase.

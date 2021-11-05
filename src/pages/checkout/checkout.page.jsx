import { useHideCartDropdownOnPageLoad } from "../../hooks";

export default function CheckoutPage() {
  useHideCartDropdownOnPageLoad();

  function formHandler(evt) {
    evt.preventDefault();
  }
  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        <label htmlFor="postal_code">
          Postal Code:
          <input type="text" id="postal_code" />
        </label>
        <label htmlFor="notes">
          Notes:
          <textarea name="notes" id="notes"></textarea>
        </label>
        <button type="submit">Place order</button>
      </form>
      <div>
        <h1>Summary:</h1>
        <p>"Cart items go here"</p>
      </div>
    </div>
  );
}

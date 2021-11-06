import { useHideCartDropdownOnPageLoad } from "../../utils/hooks";
import FormInput from '../../components/FormatInput'

export default function CheckoutPage() {
  useHideCartDropdownOnPageLoad();

  function formHandler(evt) {
    evt.preventDefault();
  }

  function handleChange (evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value, authError: '' });
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <FormInput
          onChange={handleChange}
          label="name"
          type="text"
          name="name"
          value="email"
          required
          />
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

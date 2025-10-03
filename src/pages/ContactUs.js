function ContactUs() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form>
        <label>
          Name:<br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:<br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:<br />
          <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default ContactUs;

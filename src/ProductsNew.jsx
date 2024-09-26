export function ProductsNew( {onCreate}) {
const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  onCreate(params, () => event.target.reset());
};


  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Tax: <input name="tax" type="text" />
        </div>
        <div>
          Total: <input name="total" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
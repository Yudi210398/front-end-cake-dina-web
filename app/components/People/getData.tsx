async function getData() {
  const res = await fetch("http://localhost:3001/cake/kuetrue");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const GetDataTrue = async () => {
  const data = await getData();
  return <div>Enter</div>;
};

export default GetDataTrue;

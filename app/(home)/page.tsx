export const metadata = {
  title: "Home"
}
const URL = "https://billions-api.nomadcoders.workers.dev/"

async function getBillionaries() {
  const response =  await fetch(URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const billionaries = await getBillionaries();
    
  return (
    <div>
      <h2>home</h2>
      {JSON.stringify(billionaries)}
      <div></div>
    </div>
  );
}

import BillionaireCard from "../components/BillionaireCard";

export const metadata = {
  title: "Home",
};
const URL = "https://billions-api.nomadcoders.workers.dev/";

async function getBillionaries() {
  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
}
export default async function HomePage() {
  const billionaries = await getBillionaries();

  return (
    <div className="flex" >
      <div className="grid grid-cols-4 gap-1 justify-center items-center">
        {billionaries.map ((billionarie) => (
          <BillionaireCard  key={billionarie.id} id={billionarie.id} name={billionarie.name} squareImage={billionarie.squareImage} netWorth={billionarie.netWorth} industries={billionarie.industries} />
        ))}
       {/* {JSON.stringify(billionaries)} */}
      </div>
    </div>
  );
}

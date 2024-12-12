import { formatNetWorth } from "@/app/utils/formatNetworth";

async function getPerson(id:string) {
    const API_URL = "https://billions-api.nomadcoders.workers.dev/person/" 
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

export default async function PersonDetail ({
    params: {id},
} : {
    params: {id:string}
}) {
    const person = await getPerson(id);
    return (
        <div className="flex flex-col justify-center my-10 mx-52 p-10 bg-gray-600 gap-2">
        <div className="bg-cover bg-top w-48 h-48 md:w-64 md:h-64" style={{backgroundImage: `url(${person.squareImage})`}} />
        <span className="font-bold text-xl mb-2">{person.name}</span>
        <span className="font-semibold">Networth: {formatNetWorth(person.netWorth)}</span>
        <span className="font-semibold">Country: {person.country}</span>
        <span className="font-semibold">Industry: {person.industries}</span>
        <p>{person.bio}</p>
        </div>
    )
}
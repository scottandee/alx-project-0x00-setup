import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <Button title="Small" styles="small rounded-sm bg-blue-300"/>
      <Button title="Medium" styles="medium rounded-sm bg-blue-400"/>
      <Button title="Large" styles="large rounded-sm bg-blue-500"/>
      <Button title="Small" styles="small rounded-md bg-blue-300"/>
      <Button title="Medium" styles="medium rounded-md bg-blue-400"/>
      <Button title="Large" styles="large rounded-md bg-blue-500"/>
      <Button title="Small" styles="small rounded-full bg-blue-300"/>
      <Button title="Medium" styles="medium rounded-full bg-blue-400"/>
      <Button title="Large" styles="large rounded-full bg-blue-500"/>
      <Button title="Small" styles="small rounded-lg bg-blue-300"/>
      <Button title="Medium" styles="medium rounded-lg bg-blue-400"/>
      <Button title="Large" styles="large rounded-lg bg-blue-500"/>
    </div>
  )
}

export default Landing;
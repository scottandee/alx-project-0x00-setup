import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <Button title="Get in" styles="small rounded-sm bg-blue-300"/>
      <Button title="Get in 1" styles="medium rounded-sm bg-blue-400"/>
      <Button title="Get in 2" styles="large rounded-sm bg-blue-500"/>
      <Button title="Get in 3" styles="small rounded-md bg-blue-300"/>
      <Button title="Get in 4" styles="medium rounded-md bg-blue-400"/>
      <Button title="Get in 5" styles="large rounded-md bg-blue-500"/>
      <Button title="Get in 6" styles="small rounded-full bg-blue-300"/>
      <Button title="Get in 4" styles="medium rounded-full bg-blue-400"/>
      <Button title="Get in 6" styles="large rounded-full bg-blue-500"/>
      <Button title="Get in 6" styles="small rounded-lg bg-blue-300"/>
      <Button title="Get in 4" styles="medium rounded-lg bg-blue-400"/>
      <Button title="Get in 6" styles="large rounded-lg bg-blue-500"/>
    </div>
  )
}

export default Landing;
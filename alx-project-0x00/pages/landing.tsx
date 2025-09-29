import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Render Card Component */}
      <Card />
      <Card />
      <Card />

      {/* Button Variants */}
      <div className="mt-6 flex flex-wrap gap-4">
        {/* Sizes */}
        <Button title="Small Button" className="text-sm px-2 py-1" styles="" />
        <Button title="Medium Button" className="text-base px-4 py-2" styles="" />
        <Button title="Large Button" className="text-lg px-6 py-3" styles="" />

        {/* Shapes */}
        <Button title="Rounded-sm" className="rounded-sm" styles="" />
        <Button title="Rounded-md" className="rounded-md" styles="" />
        <Button title="Rounded-full" className="rounded-full" styles="" />
        <Button title="Rounded-lg" className="rounded-lg" styles="" />
      </div>
    </div>
  )
}

export default Landing

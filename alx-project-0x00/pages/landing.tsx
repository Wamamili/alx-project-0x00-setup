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
        <Button title="Small Button" className="text-sm px-2 py-1" />
        <Button title="Medium Button" className="text-base px-4 py-2" />
        <Button title="Large Button" className="text-lg px-6 py-3" />

        {/* Shapes */}
        <Button title="Rounded-sm" className="rounded-sm" />
        <Button title="Rounded-md" className="rounded-md" />
        <Button title="Rounded-full" className="rounded-full" />
      </div>
    </div>
  )
}

export default Landing

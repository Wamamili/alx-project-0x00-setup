import Card from "@/components/Card"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      {/* Render Card Component */}
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Landing;

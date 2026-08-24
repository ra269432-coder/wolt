import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function TeerPage() {
  return (
    <ProgramLayout
      title="Teer Enterprise"
      subtitle="Nutrition, food security, and sustainable production."
      heroImage="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "3M+", label: "Meals Fortified Monthly" },
        { value: "500+", label: "Partner Schools" },
        { value: "10,000", label: "Local Suppliers" },
        { value: "100%", label: "Profits Reinvested" }
      ]}
      challengeText={
        <>
          <p>
            Malnutrition and food insecurity are persistent challenges in Bangladesh, particularly among children and pregnant women in ultra-poor communities. A lack of essential vitamins and minerals stunts physical and cognitive development, locking generations into poverty.
          </p>
          <p>
            Simultaneously, traditional charitable food distribution is often unsustainable in the long term. A systematic, market-driven approach is required to make highly nutritious food both affordable and widely accessible to the masses.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            Teer operates as a nutrition-focused social enterprise. We manufacture and distribute fortified, high-quality essential food items (such as fortified flour, cooking oil, and lentils) at affordable prices to ensure that even the lowest-income families can access proper nutrition.
          </p>
          <p>
            Because Teer is a social enterprise, 100% of our surplus revenue is channeled back into WOLT Foundation’s core humanitarian programs, creating a powerful, self-sustaining financial model for our charitable work.
          </p>
        </>
      }
      interventions={[
        {
          title: "Fortified Food Production",
          description: "Manufacturing staple food items fortified with essential vitamins (Vitamin A, Iron, Zinc) to combat nationwide micronutrient deficiencies."
        },
        {
          title: "School Nutrition Programs",
          description: "Partnering with rural schools to provide daily fortified meals to children, improving health outcomes and increasing school attendance rates."
        },
        {
          title: "Local Supply Chain Integration",
          description: "Sourcing raw agricultural materials exclusively from local farmers at fair prices, stimulating the rural economy while securing our supply chain."
        },
        {
          title: "Sustainable Reinvestment",
          description: "Utilizing the revenue generated from commercial sales in urban areas to directly fund our free medical clinics and disaster relief operations."
        }
      ]}
      quote={{
        text: "Nutrition shouldn't be a luxury. Through social enterprise, we can solve food insecurity while generating the resources needed to change the world.",
        author: "Zayed Khan, Operations Manager, Teer Enterprise"
      }}
    />
  );
}

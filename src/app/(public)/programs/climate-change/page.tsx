import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function ClimateChangePage() {
  return (
    <ProgramLayout
      title="Climate Change"
      subtitle="Building resilience and promoting sustainable environmental practices."
      heroImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "1.2M", label: "Trees Planted" },
        { value: "350", label: "Coastal Villages Supported" },
        { value: "5,000", label: "Solar Panels Distributed" },
        { value: "20,000", label: "Farmers Trained" }
      ]}
      challengeText={
        <>
          <p>
            Bangladesh is recognized globally as one of the countries most vulnerable to the impacts of climate change. Rising sea levels, increased salinity in agricultural lands, and an unprecedented frequency of cyclones and floods threaten the livelihoods of millions of coastal and rural citizens.
          </p>
          <p>
            For communities relying on agriculture and fishing, these environmental shifts are devastating. Entire villages face displacement, food insecurity, and the loss of generational income due to unpredictable weather patterns and extreme climate events.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            WOLT Foundation takes a dual approach to the climate crisis: Mitigation and Adaptation. We work directly with at-risk communities to implement localized strategies that build environmental and economic resilience.
          </p>
          <p>
            By introducing climate-resilient agricultural practices, distributing renewable energy solutions, and aggressively investing in reforestation, we empower communities to protect their environment while securing their economic future against climate shocks.
          </p>
        </>
      }
      interventions={[
        {
          title: "Reforestation Initiatives",
          description: "Organizing large-scale, community-led tree planting drives in coastal and barren regions to prevent soil erosion and create natural barriers against cyclones."
        },
        {
          title: "Climate-Resilient Agriculture",
          description: "Training local farmers in sustainable, climate-adaptive farming techniques, including the use of saline-tolerant seed varieties and water conservation methods."
        },
        {
          title: "Renewable Energy Access",
          description: "Distributing solar panels and clean energy solutions to off-grid rural communities, reducing reliance on fossil fuels and providing reliable electricity."
        },
        {
          title: "Environmental Education",
          description: "Running comprehensive awareness campaigns in schools and villages to educate the public on environmental conservation and waste management."
        }
      ]}
      quote={{
        text: "We cannot stop the storms, but we can build communities strong enough to withstand them and thrive afterward.",
        author: "Rafiqul Islam, Director of Environmental Programs"
      }}
    />
  );
}

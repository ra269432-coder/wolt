import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function DisasterPreparednessPage() {
  return (
    <ProgramLayout
      title="Disaster Preparedness"
      subtitle="Rapid, coordinated response to natural and humanitarian crises."
      heroImage="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "48Hrs", label: "Max Response Time" },
        { value: "1.5M", label: "Relief Kits Distributed" },
        { value: "120", label: "Storm Shelters Built" },
        { value: "8,000", label: "Trained First Responders" }
      ]}
      challengeText={
        <>
          <p>
            Situated on the world's largest delta and heavily intersected by major rivers, Bangladesh is perpetually vulnerable to severe natural disasters, including cyclones, catastrophic flooding, and riverbank erosion.
          </p>
          <p>
            When disaster strikes, the poorest communities are hit the hardest. They lose their homes, livestock, and livelihoods in a matter of hours. Without proper early warning systems, secure shelters, and rapid emergency relief, these cyclical disasters keep rural populations trapped in a state of constant recovery and poverty.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            The WOLT Foundation's approach is two-fold: proactive preparedness before disaster strikes, and rapid, life-saving response in its immediate aftermath.
          </p>
          <p>
            By empowering communities with early warning technology and resilient infrastructure, we minimize the loss of life. When a crisis does occur, our logistics network and trained volunteer base ensure that food, clean water, and medical aid reach the most affected zones within 48 hours.
          </p>
        </>
      }
      interventions={[
        {
          title: "Early Warning Systems",
          description: "Installing community-based siren systems and training local volunteers to interpret weather data, ensuring every family has time to evacuate."
        },
        {
          title: "Emergency Relief Distribution",
          description: "Deploying rapid response teams to deliver high-energy biscuits, clean drinking water, water purification tablets, and emergency medical kits."
        },
        {
          title: "Resilient Infrastructure",
          description: "Constructing multi-purpose cyclone shelters in high-risk coastal zones that function as schools or community centers during normal times."
        },
        {
          title: "Post-Disaster Rehabilitation",
          description: "Providing cash-for-work programs, rebuilding homes, and replacing lost livestock or agricultural tools to help families restore their livelihoods."
        }
      ]}
      quote={{
        text: "In a crisis, every second counts. Our goal is to ensure that no community faces the storm alone, and no family is left without hope in the aftermath.",
        author: "Kamal Hossain, Head of Humanitarian Operations"
      }}
    />
  );
}

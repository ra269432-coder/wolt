import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function AdvocacyForSocialChangePage() {
  return (
    <ProgramLayout
      title="Advocacy for Social Change"
      subtitle="Empowering voices and driving systemic policy reforms."
      heroImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "120+", label: "Policy Dialogues" },
        { value: "50,000", label: "Women Empowered" },
        { value: "300", label: "Grassroots Leaders" },
        { value: "15", label: "National Campaigns" }
      ]}
      challengeText={
        <>
          <p>
            Poverty and inequality are not just economic issues; they are deeply rooted in social injustices, systemic discrimination, and lack of awareness regarding basic human rights. Marginalized groups, particularly women and minorities, often lack the platform to voice their needs or influence the policies that govern their lives.
          </p>
          <p>
            Without systemic advocacy, charitable interventions serve only as temporary bandages. Long-term sustainable development requires changing the structural inequalities that create poverty in the first place.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            WOLT Foundation operates on the principle that systemic change is driven from the ground up. We work alongside grassroots organizations, community leaders, and policymakers to amplify the voices of the marginalized and drive progressive policy reforms at the national level.
          </p>
          <p>
            By educating citizens about their rights and facilitating dialogues between communities and government bodies, we empower society to demand transparency, gender equality, and inclusive governance.
          </p>
        </>
      }
      interventions={[
        {
          title: "Rights Awareness Workshops",
          description: "Conducting extensive legal aid and rights awareness workshops in rural areas to educate citizens on their constitutional rights and legal protections."
        },
        {
          title: "Gender Equality Campaigns",
          description: "Spearheading national and local campaigns to fight gender-based violence, prevent child marriage, and promote women's economic independence."
        },
        {
          title: "Policy Research & Lobbying",
          description: "Collaborating with researchers to generate data-driven reports that are used to lobby government bodies for more inclusive and equitable public policies."
        },
        {
          title: "Grassroots Leadership",
          description: "Identifying and training community leaders, equipping them with the skills to organize, advocate, and negotiate on behalf of their communities."
        }
      ]}
      quote={{
        text: "Charity is a reaction. Advocacy is a solution. When we empower a community to speak, we change the future forever.",
        author: "Tariq Rahman, Head of Social Advocacy"
      }}
    />
  );
}

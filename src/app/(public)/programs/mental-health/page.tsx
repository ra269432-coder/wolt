import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function MentalHealthPage() {
  return (
    <ProgramLayout
      title="Mental Health"
      subtitle="Comprehensive psychosocial support and counseling for vulnerable communities."
      heroImage="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "15,000+", label: "Counseling Sessions" },
        { value: "45", label: "Mental Health Centers" },
        { value: "300+", label: "Trained Counselors" },
        { value: "24/7", label: "Crisis Hotline" }
      ]}
      challengeText={
        <>
          <p>
            In Bangladesh, mental health remains a highly stigmatized and underfunded sector. Millions of individuals suffering from depression, anxiety, trauma, and severe psychological distress lack access to professional care. 
          </p>
          <p>
            The stigma surrounding mental illness often prevents individuals from seeking help, leading to isolation and worsening conditions. Furthermore, in communities affected by natural disasters or extreme poverty, psychological trauma is a silent epidemic that severely hinders community development and individual productivity.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            WOLT Foundation believes that true healing begins when communities are empowered to talk about and address their mental health needs openly. Our approach integrates mental healthcare directly into community settings, making it accessible, free, and culturally sensitive.
          </p>
          <p>
            We focus on breaking the stigma through community awareness campaigns while simultaneously building a robust infrastructure of trained local counselors who can provide immediate psychosocial support to those in need.
          </p>
        </>
      }
      interventions={[
        {
          title: "Psychosocial Counseling",
          description: "Providing individual and group therapy sessions led by trained professionals to help individuals navigate trauma, depression, and anxiety in a safe environment."
        },
        {
          title: "Community Awareness",
          description: "Running extensive grassroots campaigns to educate communities about mental health, aiming to break the deep-rooted cultural stigma associated with seeking psychological help."
        },
        {
          title: "Crisis Intervention",
          description: "Deploying rapid-response trauma support teams to areas affected by natural disasters, accidents, or humanitarian crises to provide immediate psychological first aid."
        },
        {
          title: "Capacity Building",
          description: "Training local healthcare workers, teachers, and community leaders to identify early signs of mental distress and provide preliminary support and referrals."
        }
      ]}
      quote={{
        text: "Healing the mind is just as critical as healing the body. When we support mental well-being, we unlock human potential.",
        author: "Dr. Farhana Ahmed, Lead Psychiatrist"
      }}
    />
  );
}

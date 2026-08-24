import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function DisabilityInclusionPage() {
  return (
    <ProgramLayout
      title="Disability Inclusion"
      subtitle="Fostering an accessible and equal society for people with disabilities."
      heroImage="https://images.pexels.com/photos/4063618/pexels-photo-4063618.jpeg?auto=compress&cs=tinysrgb&w=800"
      stats={[
        { value: "8,500+", label: "Assistive Devices Distributed" },
        { value: "40", label: "Inclusive Schools Supported" },
        { value: "1,200", label: "Employed via Vocational Training" },
        { value: "12,000", label: "Families Supported" }
      ]}
      challengeText={
        <>
          <p>
            Individuals with disabilities in Bangladesh are disproportionately affected by poverty, social exclusion, and lack of access to basic services. Physical barriers, coupled with deep-seated social stigma, often prevent them from participating fully in educational and economic opportunities.
          </p>
          <p>
            Children with disabilities are frequently denied entry into mainstream schools, and adults face severe discrimination in the job market, leaving entire families trapped in cycles of dependency and isolation.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            WOLT Foundation approaches disability inclusion through a human rights lens. We do not view disability as a medical problem to be fixed, but as a societal failure to provide accessible environments and equal opportunities.
          </p>
          <p>
            Our programs focus on holistic integration: providing necessary assistive technologies, supporting inclusive education models, facilitating vocational training tailored to individual capabilities, and fiercely advocating for accessible public infrastructure.
          </p>
        </>
      }
      interventions={[
        {
          title: "Assistive Technology",
          description: "Distributing customized wheelchairs, hearing aids, white canes, and other assistive devices to enhance mobility and independence."
        },
        {
          title: "Inclusive Education",
          description: "Partnering with local schools to train teachers in special education techniques and modifying school infrastructure to be fully wheelchair accessible."
        },
        {
          title: "Vocational Rehabilitation",
          description: "Providing specialized skills training and partnering with local businesses to secure dignified, long-term employment for adults with disabilities."
        },
        {
          title: "Rights & Accessibility Advocacy",
          description: "Working with local governments to enforce building codes for accessibility and running community campaigns to eliminate social stigmas."
        }
      ]}
      quote={{
        text: "Inclusion is not a favor we do for people with disabilities; it is the standard of a just society. Everyone deserves a seat at the table.",
        author: "Aminul Islam, Disability Rights Advocate"
      }}
    />
  );
}

import { ProgramLayout } from "@/components/programs/ProgramLayout";

export default function ExpandingHealthCoveragePage() {
  return (
    <ProgramLayout
      title="Expanding Health Coverage"
      subtitle="Ensuring universal access to quality medical care for all."
      heroImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
      stats={[
        { value: "500+", label: "Mobile Clinics Deployed" },
        { value: "2M+", label: "Patients Treated" },
        { value: "85%", label: "Maternal Survival Rate Increase" },
        { value: "64", label: "Districts Covered" }
      ]}
      challengeText={
        <>
          <p>
            Access to quality healthcare remains a significant challenge for marginalized populations in Bangladesh. In rural and hard-to-reach areas, the lack of medical infrastructure, shortage of qualified professionals, and high out-of-pocket costs prevent millions from receiving basic medical attention.
          </p>
          <p>
            Preventable diseases, maternal mortality, and untreated chronic conditions disproportionately affect the ultra-poor. Without intervention, minor health issues often escalate into fatal conditions, perpetuating the cycle of poverty and poor health.
          </p>
        </>
      }
      approachText={
        <>
          <p>
            WOLT Foundation believes that healthcare is a fundamental human right, not a privilege. Our approach centers on bringing healthcare directly to the doorsteps of those who need it most, bypassing the geographical and financial barriers that prevent access.
          </p>
          <p>
            Through a combination of mobile health clinics, subsidized treatments, and grassroots health worker training, we are building a resilient health network that guarantees essential medical coverage for the most vulnerable populations across the country.
          </p>
        </>
      }
      interventions={[
        {
          title: "Mobile Health Clinics",
          description: "Deploying fully-equipped mobile medical units to remote villages, providing free general check-ups, diagnostics, and essential medicines directly to communities."
        },
        {
          title: "Maternal & Child Health",
          description: "Establishing specialized care facilities and awareness programs focused on safe deliveries, prenatal care, and child immunization to reduce mortality rates."
        },
        {
          title: "Subsidized Critical Care",
          description: "Providing financial assistance and subsidized treatment options for ultra-poor patients suffering from severe or chronic illnesses requiring hospital care."
        },
        {
          title: "Health Worker Training",
          description: "Building local capacity by training rural health workers and midwives to provide vital first-aid and maternal support within their own communities."
        }
      ]}
      quote={{
        text: "Health coverage is the bedrock of a thriving society. By keeping our communities healthy, we are keeping their futures alive.",
        author: "Dr. Selina Hossain, Chief Medical Officer"
      }}
    />
  );
}

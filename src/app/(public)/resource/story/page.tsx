import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StoriesPage() {
  const stories = [
    {
      name: "Rahima Begum",
      location: "Kurigram District",
      program: "Women's Empowerment",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      quote: "Before the micro-loan, I couldn't feed my children three times a day. Now, I own three sewing machines and employ two other women from my village.",
      story: "Rahima was devastated when river erosion took her home. Through our Bashundhara social enterprise, she received a micro-loan to purchase a sewing machine. Today, she runs a successful tailoring business."
    },
    {
      name: "Abdul Karim",
      location: "Khulna Coast",
      program: "Climate Resilience",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80",
      quote: "The saline water destroyed our crops for three years. The new seeds and training saved my family from having to migrate to the city.",
      story: "Abdul is a third-generation farmer who almost lost his livelihood to climate change. Our climate-resilient agriculture training provided him with saline-tolerant seeds, restoring his farm's yield by 150%."
    },
    {
      name: "Sumi Akter",
      location: "Dhaka Slums",
      program: "Education",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
      quote: "I never thought someone like me could go to university. The scholarship gave me a chance to dream bigger than my surroundings.",
      story: "Growing up in a slum, Sumi had to work to support her family. Our inclusive education program recognized her brilliant academic potential and provided a full scholarship. She is now studying engineering."
    },
    {
      name: "Hasan Ali",
      location: "Sylhet",
      program: "Disability Inclusion",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      quote: "Losing my legs in the accident made me feel useless. The wheelchair and the computer training gave me my life back.",
      story: "After a tragic accident, Hasan fell into severe depression. We provided him with a customized wheelchair and vocational IT training. He now works as a freelance graphic designer, fully supporting his family."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80" 
            alt="Stories of Change" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-pink-400 font-bold tracking-widest uppercase mb-4 block">Impact</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Stories of Change</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Real people, real impact. Read the inspiring journeys of the individuals whose lives have been transformed.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-16 max-w-7xl">
        <div className="space-y-16">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row group">
              <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                  {story.program}
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6 relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-pink-100 rotate-180 -z-10" />
                  <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug italic relative z-10">
                    "{story.quote}"
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                  <p className="text-pink-600 font-medium">{story.location}</p>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  {story.story}
                </p>
                <div>
                  <Link href="#" className="inline-flex items-center gap-2 text-white bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full font-bold transition-colors shadow-md shadow-pink-600/20">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Play, Image as ImageIcon } from "lucide-react";

export default function MediaPage() {
  const mediaItems = [
    { type: "image", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80", title: "Winter Relief Distribution" },
    { type: "video", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80", title: "A Day in the Life: Mobile Clinics" },
    { type: "image", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", title: "New School Inauguration" },
    { type: "image", src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80", title: "Bashundhara Farmers Meet" },
    { type: "video", src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80", title: "Advocacy Rally 2024" },
    { type: "image", src: "https://images.pexels.com/photos/4063618/pexels-photo-4063618.jpeg?auto=compress&cs=tinysrgb&w=800", title: "Wheelchair Distribution Drive" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Media Gallery</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Visual stories from the frontlines of our humanitarian and development work.</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 mt-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden aspect-video bg-slate-800 cursor-pointer">
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === "video" ? (
                  <div className="w-16 h-16 bg-pink-600/90 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-slate-900/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md border border-white/20">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

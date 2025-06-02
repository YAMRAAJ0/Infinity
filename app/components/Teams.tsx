interface TeamMember {
    name: string;
    role: string;
    expertise: string[];
    avatar: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Sarah Johnson",
        role: "CEO & Co-Founder",
        expertise: ["Strategic Planning", "Business Development", "Team Leadership"],
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Michael Chen",
        role: "CTO & Co-Founder",
        expertise: ["Software Architecture", "Mobile Development", "Cloud Solutions"],
        avatar: "https://images.unsplash.com/photo-1573497014508-991fe17932e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Emily Wilson",
        role: "Head of Design",
        expertise: ["UI/UX Design", "Visual Strategy", "User Research"],
        avatar: "https://images.unsplash.com/photo-1503443211940-34a63bf87785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "David Kim",
        role: "Lead Developer",
        expertise: ["Web Development", "React", "Node.js"],
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Sophia Martinez",
        role: "UI/UX Designer",
        expertise: ["Design Systems", "Prototyping", "User Experience"],
        avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "James Brown",
        role: "Mobile Developer",
        expertise: ["iOS Development", "Android Development", "Cross-platform"],
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

export default function Teams() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Our Expert Team</h2>
                <p className="text-xl text-gray-400 text-center mb-16">Meet the talented professionals behind our innovative solutions</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-black rounded-2xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img 
                                    src={member.avatar}
                                    alt={member.name}
                                    className="rounded-full w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 rounded-full transition-opacity duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-gray-400 mb-4">{member.role}</p>
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill, skillIndex) => (
                                    <span 
                                        key={skillIndex}
                                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white font-medium hover:bg-gray-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

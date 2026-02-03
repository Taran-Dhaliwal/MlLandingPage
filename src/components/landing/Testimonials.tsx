import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GradeAI has transformed how I approach grading. I can now spend more time on actual teaching and student mentorship instead of endless marking sessions.",
    author: "Dr. Sarah Chen",
    role: "Professor of Computer Science",
    institution: "MIT",
  },
  {
    quote: "The feedback quality is remarkable. My students actually read and engage with the AI-generated comments, which has noticeably improved their subsequent work.",
    author: "Prof. Michael Torres",
    role: "Department Chair, English",
    institution: "Stanford University",
  },
  {
    quote: "Implementing GradeAI across our faculty saved us thousands of hours. The consistency in grading has also reduced student grade appeals by 60%.",
    author: "Dr. Emily Watson",
    role: "Dean of Academic Affairs",
    institution: "University of Toronto",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading
            <span className="gradient-text"> Educators</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what professors and academic leaders are saying about GradeAI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-medium transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold text-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonial.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

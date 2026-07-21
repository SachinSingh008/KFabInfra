import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { blogData } from "@/data/blogData";
import SEO from "@/components/SEO";
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blog.title, url: `/blog/${blog.slug}` }
  ];

  return (
    <>
      <SEO 
        title={blog.seoTitle} 
        description={blog.metaDescription} 
        breadcrumbs={breadcrumbs}
        extraSchema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog.title,
          "author": {
            "@type": "Person",
            "name": blog.author
          },
          "datePublished": blog.date
        }}
      />
      
      <div className="pt-24 pb-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-6">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {blog.date}</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {blog.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6 leading-tight">{blog.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <div className="prose prose-lg max-w-none">
          {/* Note: In a real app we'd use a markdown parser, but for Phase 5 we will just render standard elements */}
          {blog.content.split('\\n\\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={i} className="text-3xl font-bold mt-8 mb-4 font-playfair">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.includes('1.')) {
              return (
                 <ul key={i} className="list-disc pl-6 my-6 space-y-2">
                    {paragraph.split('\\n').map((li, idx) => (
                      <li key={idx}>{li.replace(/^[0-9]+\.\s/, '')}</li>
                    ))}
                 </ul>
              );
            }
            return <p key={i} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
          })}
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <div className="bg-primary/5 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Need Expert Fabrication Services?</h3>
            <p className="text-muted-foreground mb-6">Our engineering team is ready to assist you with your next heavy fabrication project.</p>
            <Link to="/contact">
              <Button size="lg">Contact Us Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

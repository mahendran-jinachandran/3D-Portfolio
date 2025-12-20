import TitleHeader from "../components/TitleHeader.jsx";
import { blogPosts } from "../constants";

const BlogSection = () => {
    return (
        <section id="blog" className="section-padding padding-x-lg blog-section">
            <TitleHeader title="Insights & Articles" sub="📝 Fresh perspectives" />

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article key={post.title} className="blog-card">
                        <div className="blog-meta">
                            <p className="blog-date">{post.date}</p>
                            <div className="blog-tags">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="blog-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-summary">{post.summary}</p>
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            className="blog-link"
                        >
                            Read article →
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;

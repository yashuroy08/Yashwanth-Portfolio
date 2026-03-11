import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const blogPosts = [
    {
        id: 'java-ecommerce',
        date: 'MAR 11, 2026',
        unit: 'CASE_STUDY',
        title: 'BUILDING A SCALABLE E-COMMERCE BACKEND WITH JAVA',
        image: '/blog/backend-blueprint.png',
        content: `
            <h3>The Architecture of Scale</h3>
            <p>In the world of e-commerce, scalability isn't just a feature—it's a survival requirement. This project reflection walks through the full lifecycle of my <strong>Threads Fashion</strong> e-commerce API, built with Spring Boot and MongoDB, from initial sketches to deployment on <img src="/render.svg" alt="Render" class="inline-block align-middle w-5 h-5 mx-1 mb-1 object-contain" /> Render and <svg viewBox="0 0 256 222" class="inline-block align-middle w-4 h-4 mx-1 mb-1" fill="currentColor"><path d="m128 0 128 221.705H0z"/></svg> Vercel.</p>

            <h4>The Challenge & How We Overcame It</h4>
            <p>Early load tests exposed severe latency spikes during simulated flash sales when database connection pools were exhausted. By implementing a non-blocking service layer, tuning MongoClient pool settings, and optimizing MongoDB indexes on hot query paths, we reduced p99 latency by over 40%.</p>

            <blockquote>"Premature optimization is the root of all evil — but not optimizing at all is worse." — adapted from Knuth</blockquote>

            <h4>Key Features</h4>
            <ul>
                <li><strong>RESTful API Design:</strong> Versioned endpoints with consistent error envelopes.</li>
                <li><strong>JWT Authentication:</strong> Stateless auth baked in from day one.</li>
                <li><img src="/render.svg" alt="Render" class="inline-block align-middle w-5 h-5 mr-2 mb-1 object-contain" /> <strong>Render Deployment:</strong> Hosted the Spring Boot API securely on Render.</li>
                <li><svg viewBox="0 0 256 222" class="inline-block align-middle w-4 h-4 mr-2 mb-1" fill="currentColor"><path d="m128 0 128 221.705H0z"/></svg> <strong>Vercel Deployment:</strong> Hosted the React frontend on Vercel for fast global edge delivery.</li>
                <li><strong>MongoDB Schema:</strong> Optimized document structures, indexing strategies, and connection pooling.</li>
            </ul>

            <h4>References &amp; Tools Used</h4>
            <ul>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" target="_blank" class="text-red hover:underline">Spring Boot Reference Docs</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-red-500 mx-1" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> <a href="https://www.youtube.com/@Telusko" target="_blank" class="text-red hover:underline">Telusko – Java &amp; Spring Boot on YouTube</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg> <a href="https://github.com/features/copilot" target="_blank" class="text-red hover:underline">GitHub Copilot</a> — used for boilerplate generation &amp; test stubs.</li>
                <li><img src="/render.svg" alt="Render" class="inline-block align-text-bottom w-4 h-4 mx-1 object-contain" /> <a href="https://render.com" target="_blank" class="text-red hover:underline">Render Hosting</a></li>
                <li><svg viewBox="0 0 256 222" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="currentColor"><path d="m128 0 128 221.705H0z"/></svg> <a href="https://vercel.com" target="_blank" class="text-red hover:underline">Vercel Hosting</a></li>
            </ul>

            <h4>Try It</h4>
            <p>The full source is on <a href="https://github.com/yashuroy08/Threads-Fashion" target="_blank" class="text-red hover:underline">GitHub</a>. What would you have done differently with the connection pool strategy?</p>
        `
    },
    {
        id: 'rbac-security',
        date: 'FEB 28, 2026',
        unit: 'HOW_TO_GUIDE',
        title: 'IMPLEMENTING ROLE-BASED ACCESS CONTROL WITH SPRING SECURITY',
        image: '/blog/security-specs.png',
        content: `
            <h3>Securing the Enterprise, Layer by Layer</h3>
            <p>Security is the foundation of trust. This guide documents exactly how I designed the <strong>RBAC system</strong> in my Spring Boot project — from defining roles to issuing JWT tokens and locking down method-level access.</p>

            <h4>Step 1: Define Your Roles</h4>
            <p>Start by setting up an enum of roles (<code>ROLE_ADMIN</code>, <code>ROLE_EDITOR</code>, <code>ROLE_VIEWER</code>) and a corresponding <code>UserDetails</code> implementation. Store roles in MySQL via JPA.</p>

            <h4>Step 2: Configure the Security Filter Chain</h4>
            <ol>
                <li>Disable CSRF for stateless REST APIs.</li>
                <li>Define <code>.requestMatchers()</code> rules per role.</li>
                <li>Plug in your custom <code>JwtAuthenticationFilter</code> before <code>UsernamePasswordAuthentication</code>.</li>
            </ol>

            <h4>Step 3: Method-Level Security</h4>
            <p>Enable <code>@EnableMethodSecurity</code> in your config class, then annotate service methods with <code>@PreAuthorize("hasRole('ADMIN')")</code> for fine-grained control.</p>

            <h4>References &amp; Tools</h4>
            <ul>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> <a href="https://docs.spring.io/spring-security/reference/index.html" target="_blank" class="text-red hover:underline">Spring Security Official Docs</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-red-500 mx-1" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> <a href="https://www.youtube.com/@Telusko" target="_blank" class="text-red hover:underline">Dan Vega – Spring Security Tutorials</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.756 19.86a4.5 4.5 0 0 1-6.157-1.556zM2.61 8.64a4.485 4.485 0 0 1 2.34-1.974V12.2a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.572 14.51A4.501 4.501 0 0 1 2.61 8.64zm16.44 3.866-5.836-3.37 2.02-1.165a.073.073 0 0 1 .072 0l4.49 2.59a4.496 4.496 0 0 1-.696 8.114v-5.536a.797.797 0 0 0-.05-.633zm2.008-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.52 9.979V7.648a.071.071 0 0 1 .028-.068l4.487-2.59a4.496 4.496 0 0 1 6.675 4.654zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V7.81a4.496 4.496 0 0 1 7.375-3.453l-.142.08L8.704 7.193a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" /></svg> <a href="https://chatgpt.com" target="_blank" class="text-red hover:underline">ChatGPT</a> — invaluable for debugging JWT claim mismatches.</li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17 4v6h-6" /><path stroke-linecap="round" stroke-linejoin="round" d="M9 14h6M9 17h4" /></svg> <a href="https://www.baeldung.com/spring-security-role-filter-url" target="_blank" class="text-red hover:underline">Baeldung – RBAC with Spring Security</a></li>
            </ul>

            <h4>Your Turn</h4>
            <p>Check out the full RBAC boilerplate on <a href="https://github.com/yashuroy08/RBAC" target="_blank" class="text-red hover:underline">GitHub</a>. How does your team handle permission escalation edge cases?</p>
        `
    },
    {
        id: 'weather-flutter',
        date: 'JAN 20, 2026',
        unit: 'LEARNING_LOG',
        title: 'BUILDING A WEATHER APP IN FLUTTER: BLoC PATTERN & APIS',
        image: '/blog/design-blueprint.png',
        content: `
            <h3>Going Cross-Platform with Flutter</h3>
            <p>Coming from a Java/Spring Boot background, building a mobile app in <strong>Flutter</strong> was a genuine paradigm shift. This learning log captures the key moments from my Weather Forecast App project — from setting up the BLoC pattern to wrangling device geolocation.</p>

            <h4>Why BLoC?</h4>
            <p>Flutter's reactive model encourages isolating UI and business logic. The BLoC (Business Logic Component) pattern keeps <code>Widgets</code> dumb and testable. My <code>WeatherBloc</code> listens to events like <code>FetchWeatherByLocation</code> and emits states (<code>WeatherLoading</code>, <code>WeatherLoaded</code>, <code>WeatherError</code>).</p>

            <h4>Key Technical Decisions</h4>
            <ul>
                <li><strong>OpenWeather API:</strong> Used the One Call API 3.0 for hourly + 7-day forecasts in a single request.</li>
                <li><strong>Geolocator package:</strong> Handles runtime permission requests and GPS coordinate retrieval.</li>
                <li><strong>Dynamic Backgrounds:</strong> Conditional widget trees swap animated backgrounds based on weather condition codes.</li>
            </ul>

            <h4>References &amp; Tools</h4>
            <ul>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-current mx-1" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> <a href="https://docs.flutter.dev/" target="_blank" class="text-red hover:underline">Flutter Official Docs</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-red-500 mx-1" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> <a href="https://www.youtube.com/@ResoCoder" target="_blank" class="text-red hover:underline">Reso Coder – BLoC in Depth (YouTube)</a></li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-blue-500 mx-1" fill="currentColor"><path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12z" /></svg> <a href="https://gemini.google.com" target="_blank" class="text-red hover:underline">Gemini AI</a> — used for UI layout ideation and widget composition questions.</li>
                <li><svg viewBox="0 0 24 24" class="inline-block align-text-bottom w-4 h-4 text-amber-500 mx-1" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" /><path stroke-linecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg> <a href="https://openweathermap.org/api" target="_blank" class="text-red hover:underline">OpenWeather API Reference</a></li>
            </ul>

            <h4>What Would You Do Differently?</h4>
            <p>I'd consider replacing BLoC with Riverpod for simpler dependency injection in the next version. What state management solution do you prefer for Flutter apps?</p>
        `
    },
];

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) return <div className="min-h-screen flex items-center justify-center font-mono text-red">404: POST_NOT_FOUND</div>;

    return (
        <div className="bg-primary text-accent min-h-screen pt-32 pb-20 px-4 md:px-0">
            <div className="container-custom max-w-3xl">
                <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted hover:text-red mb-12 transition-colors">
                    &lt; RETURN_TO_SYSTEM
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-xs text-red font-bold">[{post.unit}]</span>
                        <div className="w-8 h-[1px] bg-border-strong opacity-50"></div>
                        <span className="font-mono text-xs text-muted">/{post.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-12 font-mono uppercase leading-none tracking-tighter">
                        {post.title}
                    </h1>

                    <div className="border-4 border-border-strong mb-16 p-1 relative shadow-[8px_8px_0px_var(--color-border-strong)]">
                        <img src={post.image} alt={post.title} className="w-full h-auto grayscale transition-all duration-700 hover:grayscale-0" />
                        <div className="absolute top-2 right-2 font-mono text-[8px] bg-red text-white px-2 py-0.5">SOURCE: LOG_FILE_0x{post.id.slice(0, 2).toUpperCase()}</div>
                    </div>

                    <div
                        className="blog-content font-mono text-muted leading-relaxed text-lg prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.article>

                <div className="mt-20 pt-12 border-t border-border-strong flex justify-between items-center">
                    <div className="font-mono text-[10px] text-muted tracking-[0.4em] uppercase">STATUS: LOG_COMPLETE</div>
                    <Link to="/" className="nothing-card px-8 py-3 font-mono text-[10px] tracking-widest hover:border-red hover:text-red transition-all">
                        EXIT_INTERFACE
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;

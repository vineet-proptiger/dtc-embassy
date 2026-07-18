'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ExploreVideo = () => {
  return (
    <section id="explore-area" style={{ background: '#f9f9f9', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}>
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 data-aos="flip-left" data-aos-delay="300" style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
            color: '#684C1B', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            Explore
          </h2>
        </div>

        {/* Video Container */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#D5C2A8]" 
          style={{ aspectRatio: '16/9' }}
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/t7PfyAATHDc?si=x4q-qSnS3gnseJ-G" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ExploreVideo

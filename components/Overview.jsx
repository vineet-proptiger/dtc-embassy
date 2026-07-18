'use client'
import { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'



/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'Status',             value: 'New Launch', bgColor: '#FDF8F6' },
  { label: 'Floors',             value: '2', bgColor: '#FFFDF2' },
  { label: 'Units',              value: '153', bgColor: '#F4FAF4' },
  { label: 'Total Project Area', value: '3.53 acres', bgColor: '#F2FAFD' },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section
      id="overview"
      style={{ scrollMarginTop: '80px', background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Mobile Section Heading ── */}
      <div className="block lg:hidden" style={{ marginBottom: '32px', textAlign: 'left' }}>
        <h2 data-aos="flip-right" data-aos-delay="500" style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
        }}>
          Welcome to DTC Embassy Villa
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Premium Gated Villa Community on Rajarhat Main Road
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          
          {/* ── Desktop Section Heading ── */}
          <div className="hidden lg:block" style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#3A2A0E', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }}>
              Welcome to DTC Embassy Villa
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '500', fontSize: '14px',
              color: '#C9A96E', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              Premium Gated Villa Community on Rajarhat Main Road
            </h3>
          </div>
          
          {/* Paragraphs */}
          <p data-aos="flip-down" data-aos-delay="500" style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '24px',
            textAlign: 'justify',
          }}>
            <strong>DTC Embassy Villas</strong> is a premium gated villa community spread across <strong>6 acres</strong> on <strong>Rajarhat Main Road</strong>. Designed for discerning homebuyers, the project features just <strong>153 elegant 4 & 5 BHK independent villas</strong> surrounded by over 70,000 sq. ft. of landscaped open spaces, ensuring exceptional privacy and a serene living environment. Homebuyers are actively searching for properties in Rajarhat Main Road because of its excellent connectivity to New Town, Sector V, Chinar Park, VIP Road, Rajarhat Chowmatha, and Netaji Subhas Chandra Bose International Airport. The location also provides quick access to leading IT hubs, reputed schools, hospitals, shopping centres, and upcoming infrastructure, making daily life more convenient.
            {isExpanded ? (
              <>
                {" "}Compared to conventional apartment developments, this villa community offers greater privacy, larger living spaces, and a premium lifestyle while keeping every essential destination within easy reach.
                {" "}
                <button
                  onClick={() => setIsExpanded(false)}
                  style={{
                    fontFamily: F_JOST,
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#C9A96E',
                    border: 'none',
                    background: 'none',
                    padding: '0 0 1px 0',
                    borderBottom: '1px solid #C9A96E',
                    cursor: 'pointer',
                    marginLeft: '6px',
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3A2A0E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C9A96E'}
                >
                  READ LESS
                </button>
              </>
            ) : (
              <>
                {" ... "}
                <button
                  onClick={() => setIsExpanded(true)}
                  style={{
                    fontFamily: F_JOST,
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#C9A96E',
                    border: 'none',
                    background: 'none',
                    padding: '0 0 1px 0',
                    borderBottom: '1px solid #C9A96E',
                    cursor: 'pointer',
                    marginLeft: '6px',
                    letterSpacing: '0.05em',
                    display: 'inline-block',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#3A2A0E'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#C9A96E'}
                >
                  READ MORE
                </button>
              </>
            )}
          </p>

          {/* Info Box */}
          <div
            className="hidden lg:block"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="flex flex-col justify-center" style={{
                background: item.bgColor || '#fff',
                padding: '20px 16px',
                textAlign: 'left',
              }}>
                <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800">
                  <p style={{
                    fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                    color: '#b5a99a', letterSpacing: '0.18em',
                    textTransform: 'uppercase', margin: '0 0 8px',
                  }}>
                    {item.label}:
                  </p>
                  <p className="whitespace-normal" style={{
                    fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                    color: '#3A2A0E', letterSpacing: '0.05em',
                    textTransform: 'uppercase', margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="DTC Embassy Villa Overview" 
              width={1000}
              height={1200}
              className="w-[95%] lg:w-[75%] h-auto object-contain mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview

import { useEffect, useRef, useState } from 'react';

function App() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.THREE) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x973AA4,
        highlightColor: 0x00ffd5,
        backgroundColor: 0x0a0a0a,
        backgroundAlpha: 0.0,
        points: 8.0,
        maxDistance: 22.0,
        spacing: 18.0,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ minHeight: '100vh' }}>
      <main className="glass">
        {/* Hero */}
        <section style={{ marginBottom: '3rem' }}>
          <h1 style={{ 
            fontFamily: 'SF Mono, Monaco, Inconsolata, Roboto Mono, monospace', 
            fontWeight: 700, 
            fontSize: '2.8rem', 
            margin: '0 0 1.5rem 0', 
            color: '#fff',
            letterSpacing: '-0.5px'
          }}>
            Abhinav B
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.6, 
            margin: '0 0 1rem 0', 
            color: '#e0e0e0' 
          }}>
            Building human-aware AI, surreal apps, and molecular models.<br />
            Currently solving ticket clutter at Softeon.<br />
            Former intern, researcher, forever tweaking.
          </p>
        </section>

        {/* Projects */}
        <div className="projects-section">
          <h2 style={{ 
            fontFamily: 'SF Mono, Monaco, monospace', 
            fontSize: '1.4rem', 
            color: '#00ffd5', 
            marginBottom: '2rem',
            fontWeight: 600
          }}>
            Featured Projects
          </h2>
          
          <div className="project-card">
            <h3>🧬 Quantum-Aware SMILES Pipeline for Drug Interaction Prediction</h3>
            <p>
              Building a pipeline that embeds SMILES-based molecular structures using grammar-aware NLP transformers, converting them into molecular graphs processed by hybrid quantum-classical GNNs for drug-drug interaction prediction. Technologies: RDKit, Qiskit, PyTorch Geometric.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">NLP</span>
              <span className="tag">Quantum ML</span>
              <span className="tag">Drug Discovery</span>
            </div>
            <div className="links">
              <a href="https://github.com/abhinav7473/smiles2vec-q">GitHub</a>
              <a href="#">Paper</a>
            </div>
          </div>

          <div className="project-card">
            <h3>🔒 SensorShield: Real-Time Anomaly Detection for EV Sensor Networks</h3>
            <p>
              Built a cybersecurity tool for CAN bus networks in EVs using One-Class SVM and LSTM Autoencoders. Features live attack simulation, real-time anomaly detection, and a Streamlit-based dashboard. Covers fuzzy, spoofing, replay, and DoS attacks.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Cybersecurity</span>
              <span className="tag">LSTM</span>
              <span className="tag">Streamlit</span>
            </div>
            <div className="links">
              <a href="#">GitHub</a>
              <a href="#">Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>💥 Accident Heuristic: Video Dataset Engineering for Spatiotemporal ML</h3>
            <p>
              Curated and preprocessed a raw dashcam video dataset for accident detection models. Automated segmentation, resizing, and heuristic-based temporal annotation for CNN-LSTM pipelines. Currently part of an ongoing research paper.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Computer Vision</span>
              <span className="tag">Time Series</span>
              <span className="tag">Research</span>
            </div>
            <div className="links">
              <a href="https://github.com/abhinav7473/accidentsense">GitHub</a>
              <span style={{ color: '#888', fontStyle: 'italic' }}>Paper Coming Soon</span>
            </div>
          </div>

          <div className="project-card">
            <h3>🧱 ArUco-Based Warehouse Visualization System</h3>
            <p>
              Created a PERN stack-based warehouse dashboard with 3D spatial rendering and ArUco-based marker tracking. Used OpenCV for object recognition and marker-driven real-time visualization.
            </p>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag">Computer Vision</span>
              <span className="tag">Full Stack</span>
              <span className="tag">Simulation</span>
            </div>
            <div className="links">
              <a href="#">GitHub</a>
              <a href="#">Live Demo</a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{ 
            fontFamily: 'SF Mono, Monaco, monospace', 
            fontSize: '1.4rem', 
            color: '#00ffd5', 
            marginBottom: '1.5rem',
            fontWeight: 600
          }}>
            Experience
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ 
                fontSize: '1.1rem', 
                margin: '0 0 0.3rem 0', 
                color: '#fff',
                fontWeight: 600
              }}>
                <strong>Softeon</strong> – Data Science Intern
              </p>
              <p style={{ 
                fontSize: '1rem', 
                margin: 0, 
                color: '#c0c0c0',
                lineHeight: 1.5
              }}>
                Developed interactive analytics dashboards and LLM-based ticket summarizer, demoed to CEO and AVPs.
              </p>
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1.1rem', 
                margin: '0 0 0.3rem 0', 
                color: '#fff',
                fontWeight: 600
              }}>
                <strong>University Research</strong> – Research Assistant
              </p>
              <p style={{ 
                fontSize: '1rem', 
                margin: 0, 
                color: '#c0c0c0',
                lineHeight: 1.5
              }}>
                Working on SMILES-to-QML pipeline for drug synergy modeling. Targeting lead compound discovery.
              </p>
            </div>
          </div>
        </section>

        {/* Now Section */}
        <section style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 style={{ 
            fontFamily: 'SF Mono, Monaco, monospace', 
            fontSize: '1.4rem', 
            color: '#00ffd5', 
            marginBottom: '1rem',
            fontWeight: 600
          }}>
            Now
          </h2>
          <p style={{ 
            fontSize: '1rem', 
            margin: 0, 
            color: '#c0c0c0',
            lineHeight: 1.6
          }}>
            Reading: Attention mechanisms in transformers, quantum error correction.<br />
            Building: Multimodal emotion recognition system, molecular property predictor.<br />
            Learning: Advanced probabilistic ML, quantum computing fundamentals.
          </p>
        </section>

        {/* Contact */}
        <section style={{ textAlign: 'center' }}>
          <p style={{ 
            fontSize: '1.2rem', 
            margin: '0 0 1.5rem 0', 
            color: '#fff',
            fontWeight: 500
          }}>
            Let's talk.
          </p>
          <div className="links">
            <a href="#">Resume</a>
            <a href="https://linkedin.com/in/abhinav7473">LinkedIn</a>
            <a href="https://github.com/abhinav7473">GitHub</a>
            <a href="mailto:abhinav@email.com">Email</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
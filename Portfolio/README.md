Abhinav Balakrishnan

I look for the moment where systems technically work, but practically fail.

Most systems don’t collapse loudly, they erode quietly.
They give correct answers in the wrong order, surface confidence where there shouldn’t be any, and punish curiosity instead of guiding it.
I pay attention to hesitation, misinterpretation, edge cases, and the places where humans stop trusting what’s in front of them.
That’s usually where the real problem is.

RT-MTCP: Real-Time Multi-Target Traffic Crash Prediction

Context:
Urban crash prediction systems tend to optimize for overall accuracy, even when the cost of being wrong is unevenly distributed. In high-density or vulnerable regions, rare failures matter more than average performance.

What broke:
Existing models collapsed under extreme class imbalance and quietly ignored low-frequency, high-impact crashes. The system “worked,” but systematically underrepresented the very cases planners care about.

What changed:
I reframed the problem around reliability under stress rather than mean accuracy, prioritizing recall in minority classes. Gradient boosting with Bayesian smoothing was used to preserve rare patterns instead of washing them out, and evaluation was designed around failure visibility rather than headline metrics.

Outcome:
Improved minority-class recall by 22–37%, enabling more honest risk signals for downstream planning and emergency response.

AI Support Platform at Softeon

Context:
Enterprise support teams operate under time pressure, ambiguity, and partial information. Resolution tools often overload agents with data instead of reducing cognitive friction.

What broke:
Early versions surfaced correct information too late, too uniformly, and without regard for user role. Latency and dense outputs caused hesitation, misreads, and over-escalation.

What changed:
I redesigned the interaction flow using progressive disclosure, streaming high-confidence knowledge before historical tickets. Dashboards were split by role after observing misinterpretation of shared metrics, and configuration controls were exposed so behavior could be tuned without engineering intervention.

Outcome:
Adoption across daily workflows for 50+ users, with sustained quality ratings improving from 88% to 98.6% through feedback-aware refinement.

Warehouse Management System with 3D Visualization

Context:
Traditional WMS interfaces force operators to mentally reconstruct spatial layouts across disconnected views, increasing cognitive load during active operations.

What broke:
Critical decisions depended on abstract tables and static floor plans, making spatial reasoning slow and error-prone in dense storage environments.

What changed:
I built a 3D digital twin using ArUco-based physical–digital synchronization, allowing operators to navigate the warehouse as a continuous space. Real-time APIs and path optimization reduced unnecessary context switching during live picking.

Outcome:
Reduced picker travel distance by 12–18% and enabled faster spatial decision-making without additional training overhead.

GitHub
 • Resume
 • abhikrish734@gmail.com
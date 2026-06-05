---
title: "The First Data Scientist Who Hacked Time"
date: 2026-06-05
draft: false
tags: ["data science", "history", "taxonomy", "machine learning", "unsupervised learning"]
thumbnail: '/img/lyubishchev.png'
alt_description: 'Alexander Lyubishchev — entomologist, mathematician, proto data scientist'
slug: "the-first-data-scientist"
description: "An entomologist who studied flea beetles in Soviet fields proved that agricultural reporting was lying — using the same math that powers modern unsupervised learning."
---

## The Entomologist 
 
It is the 1930s. The Soviet Union is collectivizing agriculture at speed. Crop losses are a political problem. Someone needs to explain them
 
The official answer is insects. Pest damage accounts for at least 10% of annual crop loss — everyone agrees on this number. It justifies an entire institute, its budget, its staff, its reason for existing
 
One researcher is not convinced. He goes out to the fields. He rides trains from Ukraine to Mongolia. He walks the fields, counts insects, counts yield, builds a dataset row by row. Three years of fieldwork
 
His conclusion: the real number is closer to 2%
 
The other 8%? Fields left unworked. Crops rotting not because of beetles, but because collective farm workers are not showing up. The reporting system has no category for "human failure," so the insects take the blame
 
He stands up and says: the department, as currently structured, is not needed
 
He is not fired. He is reassigned. In Soviet science, being right about the wrong thing is its own kind of career risk
 
This is the oldest data problem in the world. Metrics get defined by the people whose budgets depend on them. The number 10% was not a measurement — it was a negotiating position
 
The researcher who went to the source, built a proper sample, and reported what he actually found was Alexander Alexandrovich Lyubishchev (1890–1972). He was a Soviet entomologist who spent his career studying flea beetles, which is a tiny jumping insects that destroy crops across the steppe. He published papers on taxonomy, and in his spare time, with no computer and no formal training in statistics, he built the mathematical foundations of what we now call unsupervised machine learning
 
Every data analyst who has ever pushed back on a KPI that smelled wrong is following in his footsteps today

---
## The Fleas and the Birth of Clustering
 
Here is the part of Lyubishchev's career that I find genuinely extraordinary
 
His main scientific work was the taxonomy of flea beetles - the subfamily Alticinae, small jumping beetles that feed on cultivated plants. Taxonomy sounds like stamp collecting: you catch an insect, you pin it, you give it a Latin name. In practice, Lyubishchev's flea beetle work was computational
 
The problem: many species are nearly identical to the naked eye. A single millimeter of difference in wing shape separates species that behave completely differently — different host plants, different damage patterns, different seasonal behavior. The old method was to find one diagnostic character and use it. This worked badly. Specimens identified by one specialist would be re-identified by another. The system had no way to handle variation
 
Lyubishchev's approach: measure everything, then use the structure of the measurements to find the groups
 
He measured body proportions — the ratio of prothorax length to width, the relative length of antenna segments, the shape of the aedeagus. He collected 20 specimens per species, not one. He computed means, standard deviations, and what he called the "divergence coefficient":
 
```
D = (M₁ - M₂)² / (σ₁² + σ₂²)
```
 
This is the squared distance between two group means, normalized by their variance. When D is large, the groups are cleanly separated. When D is small, you have a taxonomic problem — and probably a biological one too
 
He built what he called "scatter ellipses" in two-dimensional measurement space. Plot specimens of species A by two measurements. Plot species B. If the ellipses overlap, you have transgression — the classical boundary between species breaks down. If they are separated, you have a real distinction
 
![Lyubishchev's scatter ellipses for two flea beetle species, 1943. Species A and B are inseparable on any single measurement axis but cleanly separated in two-dimensional space — the geometric intuition behind modern discriminant analysis.](/img/lyubishchev_fig1.png)
*Fig. 1 from Lyubishchev's 1943 manuscript. Two species as covariance ellipses. The regression lines show where the single-axis transgression disappears in two dimensions*
 
This is, in the vocabulary of 2026, dimensionality reduction followed by cluster validation. The ellipses are covariance ellipsoids. The divergence coefficient is a precursor to Mahalanobis distance. The whole project is unsupervised learning applied to morphological data — done in 1943, by hand, with a micrometer and graph paper
 
In his 1943 manuscript *Program of General Systematics*, he described a method he called the Edgeworth-Pearson function — the full multivariate probability that a given specimen belongs to a given species, accounting not just for individual measurements but for all pairwise correlations between them. He was describing what would later be called the multivariate normal distribution applied to classification
 
He even designed nomograms — visual computation tools — that a field entomologist could use to identify a specimen by plotting measurements against a grid and reading off which ellipse it fell inside
 
![Nomogram for species identification using four correlated measurements, 1943.](/img/lyubishchev_fig3.png)
*Fig. 3 from the same manuscript. The entomologist plots two measured values, connects them across the aligned scales, reads the intersection. Classification without arithmetic. This is a deployed model on paper*
 
This was the first version of inference!

---

## The System Builder
 
By this point I should address the question you are probably thinking: how is this different from what any quantitatively inclined biologist was doing in the 1940s?
 
The answer is in the scope of what Lyubishchev was building
 
He was not just developing a method for flea beetles. He was developing a general theory of classification — a mathematics of similarity that he believed applied equally to organisms, chemical elements, mineral crystals, and languages. In his 1923 paper *On the Form of the Natural System of Organisms* and his 1947 manuscript *On Some Postulates of General Systematics*, he laid out a framework that explicitly distinguished three types of systems:
 
**Hierarchical systems**: the classical Linnaean tree, where you subdivide by a series of binary choices. Good for exposition. Bad as a model of reality
 
**Combinatorial systems**: Mendelian genetics, where independent traits combine freely. Good for describing variation within a species. Cannot capture correlation structure
 
**Correlative systems**: his preferred model, exemplified by the Periodic Table of Elements. Here, a small number of underlying parameters generate the full diversity of observable properties. Everything else is a function of those parameters
 
What Lyubishchev was describing as a "correlative system" is what we now call a latent factor model. The principal components of a high-dimensional measurement space. The low-dimensional manifold that data actually lives on
 
![Multi-species classification diagrams from Lyubishchev's general systematics program, 1943.](/img/lyubishchev_fig4_fig5.png)
*Figs. 4 and 5 from the 1943 manuscript. Each concentric ellipse is a taxon. The dashed lines are decision boundaries between species. Replace the axis labels with feature vectors and this is a clustering visualization from any modern ML textbook*
 
He wrote in 1965: *"The most developed method for building a natural system is factor analysis (numerical taxonomy), but it has a number of shortcomings: uneconomical operation, ignoring within-taxon variation, and preserving the hierarchical form as the only possible one."*
 
He was critiquing Sokal and Sneath's *Principles of Numerical Taxonomy* — the book that defined the field — in the same paragraph where he acknowledged they were working on the same problem. He had been working on it for twenty years longer

---

## The Citation He Never Got

The standard history of numerical taxonomy goes like this: Sokal and Sneath published *Principles of Numerical Taxonomy* in 1963. Before that, classification was qualitative, expert-driven, and subjective. After that, it became quantitative. They are the founders
 
This is wrong!
 
Lyubishchev published on discriminant functions in taxonomy in *Biometrics* — a peer-reviewed Western journal — in 1962. One year before the book that supposedly founded the field. His 1943 manuscript, documented above, contained scatter ellipses, the divergence coefficient, the full Edgeworth-Pearson multivariate classification function, and hand-drawn nomograms for field deployment. The diagrams in this article are from that manuscript
 
Sokal and Sneath do not cite him. The standard histories of numerical taxonomy do not mention him. The Wikipedia article on numerical taxonomy does not mention him. The received account of who invented quantitative biological classification is factually incomplete
 
The general assumption — that the fathers of modern taxonomy were Western biologists working in the 1950s and 60s — needs a correction. A Soviet entomologist was doing the same work in 1943, publishing in Western journals by 1962, and critiquing the canonical texts by 1965.
 
He deserves a citation. At minimum.

---

## The Frost Patterns

One more thing, because it tells you something about the kind of person he was
 
In 1965, Lyubishchev spent months photographing frost patterns on windows. Hundreds of photographs. His colleagues thought he had lost his mind. The institute had real problems, Soviet science had real pressures, and this man was pressing his face against cold glass with a camera
 
His argument: frost patterns are a natural phenomenon subject to mathematical law. The branching geometry follows the same structural logic as leaf venation, coral growth, and river deltas. If you could describe the rules that generate a frost crystal, you were close to describing the rules that generate biological form
 
He was not wrong. The mathematics he was groping toward — what we now call fractal geometry, L-systems, reaction-diffusion models — became legitimate fields two decades later. His frost photographs were a data collection project in search of a theory that had not yet been invented
 
He liked this kind of problem. Problems where the pattern was obvious to anyone who looked carefully, but the explanation required mathematics that did not yet exist. He spent his life building tools and waiting for the world to catch up

---

## What He Actually Was

Systematics was his entire life's work. In his notebooks from 1918, he was building classification systems for everything — not just organisms, but ideas, failure modes, types of stupidity ("useful stupidity," "harmful" "progressive" etc.)
 
He was one of the first people to apply discriminant analysis to biological taxonomy, but
Is the taxonomy of insects a science? 

In the worst framing: catching bugs, pinning them, lining them up on a shelf by similarity. In the actual framing: a mathematical problem of finding structure in high-dimensional spaces, building a language for describing similarity, and building tools that let a field worker make a real-time classification decision with nothing but a ruler and a nomogram
 
The unsupervised algorithms in your ML library — k-means, hierarchical clustering, UMAP, Gaussian mixture models — are the formal descendants of what Lyubishchev was doing by hand in Frunze (nowadays Bishkek) in 1943. He was a biologist who needed mathematics, built it himself, and did not live long enough to see the fruits of his work

---

## The Time Hack

You may have heard of Lyubishchev for a different reason
 
In 1974, the Soviet writer Daniil Granin published a book called *This Strange Life* — a biographical essay about Lyubishchev's time tracking system. From 1916 until his death in 1972, Lyubishchev recorded every hour of every day in detailed daily logs: how long he spent on scientific work, correspondence, reading, rest. 56 years of data. He used this data to plan, to audit himself, to understand where his time actually went versus where he thought it went
 
Granin's book made him famous. In the Soviet popular imagination, Lyubishchev became the time management guy. The productivity hack person. The man who figured out how to do everything
 
This is not wrong. But it is incomplete
 
The time tracking system was not a trick. It was the same thing as everything else he did: collect data about something real, measure it carefully, find the structure in it, act on what you find. He applied to his own life the same methodology he applied to flea beetles. The same methodology he applied to crop damage statistics. The same methodology he applied to the taxonomy of organisms
 
He was a data scientist. He just never had that word. He had a micrometer, a notebook, and fifty years of uninterrupted work
 
---

## References

Lyubishchev, A.A. (1943). *Programma obshchey sistematiki* [Program of General Systematics]. Manuscript, 22 November 1943. Digitized by ZIN RAS Coleoptera Laboratory. Available at: [zin.ru/animalia/coleoptera/rus/lyubis05.htm](http://www.zin.ru/animalia/coleoptera/rus/lyubis05.htm)

Lubischew, A.A. (1962). On the use of discriminant functions in taxonomy. *Biometrics*, 18(4), 455–477

Sokal, R.R., Sneath, P.H.A. (1963). *Principles of Numerical Taxonomy*. W.H. Freeman, San Francisco

Granin, D. (1974). *Eta strannaya zhizn* [This Strange Life]. Sovetsky Pisatel, Leningrad

Lyubishchev, A.A. (1982). *Problemy formy, sistematiki i evolyutsii organizmov* [Problems of Form, Systematics and Evolution of Organisms]. Nauka, Moscow
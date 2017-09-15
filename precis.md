---
title: Precis
featured: /assets/images/pic02.jpg
layout: article
---

## About Building Evolutionary Architectures

It seems that some parts of software become hard to change. For a variety of reasons, parts of software systems defy change, becoming more brittle and intractable over time. However, the world we inhabit has exactly the opposite characteristic. The software development ecosystem exists in a state of dynamic equilibrium. New tools, techniques, approaches, and frameworks constantly impact the equilibrium in unanticipatable ways. While this creates a headache for brittle systems, it also provides the ultimate solution. Over the last few years, incremental developments in core engineering practices for software development have created the foundations for rethinking how architecture changes over time, along with ways to protect important architectural characteristics as it evolves. This book ties those parts together with a new way to think about _architecture_ and _time_. 

Along the way, we also answer the questions, _How is long term planning possible when everything changes all the time?_ and _Once I've built an architecture, how can I prevent it from gradually degrading over time?_.

This book is about _evolutionary architectures_, building systems that allow architects and developers to make sweeping changes to the most important parts of their systems with confidence. It covers practices that allow developers to build continual architectures, which evolve cleanly without the need for a crystal ball. 

__Our Definition__: 

> An evolutionary architecture supports guided, incremental change as a first principle across multiple dimensions.

### Incremental change

_Incremental change_ relies on continuous delivery practices like deployment pipelines, mature DevOps, good testing culture, and other current agile engineering best practices. When combined with a granular, modular architecture, incremental change allows developers to make small modifications at the architectural level without breaking unrelated pieces. Incremental change is the machinery that enables evolutionary architectures to evolve.

### Fitness Functions
Evolutionary architecture allows different parts of the system to evolve in the ways most sensible to solve a problem. However, we don't want the system to evolve in a way that harms some quality attribute. For example, improving performance with caching might accidentally harm security in the process. How can we build guidelines within the architecture to support change but guard specific attributes? Evolutionary computing defines a _fitness function_ as an objectively quantifiable function used to summarise how close a given design solution is to achieving the set aims. When defining an evolutionary algorithm, the designer seeks a "better" algorithm; the fitness function defines what "better" means in this context. 

In software architecture, we define a fitness function as a qualifiable measurement (test, metric, etc.) that defines one or a combination of quality attributes. A wide variety of dimensions exist for architectural fitness functions: context, cadence, scope, and so on. We identify a variety of important fitness function dimensions and how they interact, along with techniques for discovering them.

### Multiple dimensions
Architects commonly focus on a narrow dimension of a software project, the _technical architecture_: frameworks, dependencies, integration architecture, and so on. But real software projects contain numerous orthogonal concerns: data architecture, security, scalability, testability, and a host of others. Modern architectures that support evolution must accommodate all these important dimensions of architecture--continuously.

Software architecture exists at least in part to allow architects to make evolutionary changes. For example, part of the motivation for layered architecture is the ability to swap out layers to evolve them. However, most architectures support only one dimension of evolution, along the _technical_ architecture. Thinking about the evolvability of only one dimension ignores and likely harms the ability to evolve other dimensions.

We discuss how coupling and cohesion affect architecture, and how to define the full set of architectural dimensions for a system. We also define _architectural quanta_, the operational unit of deployment in architecture, and how it affects a large number of aspects of evolvable architectures.

When we identify a dimension in architecture affected by change, we define fitness functions to protect against undesirable breakage. 

## Evolutionary Architecture
We offer a new perspective on evolving architecture, making "evolvability" a first-class "-ility" in software projects. We provide a logical framework for identifying and protecting parts of the architecture that evolve: identify the important dimensions, define fitness functions to ensure compliance, and use incremental change engineer practices such as deployment pipelines and other continuous delivery practices to automatically verify fitness.

The concepts of evolutionary architecture also help automate previously underserved constituents ("non-functional requirements") by providing a framework for identifying important dimensions, with their critical characteristics, and the mechanism (via fitness functions) for verifying the veracity of those attributes continually. This in turn allows architects to build systems that support ongoing change with confidence that important qualities won't degrade. Identification of architecture dimension and fitness function occurs at both project inception and as an ongoing concern, building continual architecture.

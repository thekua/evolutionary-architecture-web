---
layout: article
---

## Fitness Function Katas

_inspired by Ted Neward's original [Architectural Katas](https://archkatas.herokuapp.com)_


## About

Fitness Function katas are intended as a small-group (3-5 people) exercise, usually as part of a larger group (4-10 groups are ideal), each of whom is doing a different kata. A Moderator keeps track of time, assigns Katas (or allows this website to choose one randomly), and acts as the facilitator for the exercise.

## Architectural Fitness Functions
Evolutionary architecture allows different parts of the system to evolve in the ways most sensible to solve a problem. However, we don't want the system to evolve in a way that harms some architectural concern. For example, improving performance with caching might accidentally harm security in the process. How can we build guidelines within the architecture to support change but guard specific attributes? Evolutionary computing defines a _fitness function_ as an objectively quantifiable function used to summarise how close a given design solution is to achieving the set aims. When defining an evolutionary algorithm, the designer seeks a "better" algorithm; the fitness function defines what "better" means in this context. 

As defined in our book [Building Evolutionary Architectures](http://shop.oreilly.com/product/0636920080237.do), we borrow this concept to for _architectural fitness functions_: 

> An architectural fitness function provides an objective integrity assessment of some architectural characteristic(s).

Fitness functions encompass existing engineering practices such as testing and metrics, but also advanced capabilities such as Netflix's [Chaos Monkey](https://github.com/Netflix/SimianArmy/wiki/Chaos-Monkey) A wide variety of dimensions exist for architectural fitness functions: context, cadence, scope, and so on. We identify a variety of important fitness function dimensions and how they interact, along with techniques for discovering them.


## Rules

Doing an Fitness Function kata requires you to obey a few rules in order to get the maximum out of the activity. However, one rule trumps all the others: Any other questions that are not already covered by these rules, you may ask the Moderator about. When in doubt, ask.

### Preparation: Getting your project team together

The first step is to assemble your project team

* __Co-workers may not be in a group together__. Obviously in some cases (such as when this is being done internally within a company) this will be impossible; in that case, seek to avoid teaming up with people with whom you work regularly.
* __Make sure you're sitting a little distance from any other project team__. You'll want to make sure you can converse with your team without a lot of competition noise from other teams.
* __None of you will really need a laptop__. The point of this exercise is not to spend the entire time looking stuff up on StackOverflow or on Google/Bing/Yahoo. At the worst, you'll want a silicon-based device to access this site, and to maybe help organize your thoughts.
* __Procure supplies__. However, having notepads, whiteboards (if they are available in the room), and/or flip-charts to scribble on and debate over are very helpful, and it might not hurt to score a few before the other project teams take them all.

Once that's done, [select your kata]({{ site.url }}/ffkatas/random.html) and proceed on to the Discussion Phase.

### Discussion Phase: Figuring out what you're building and building it

For the next "N" minutes or hours (depending on what the Moderator tells you), your project team will now examine the requirements for the kata as given, and work out a rough vision of how to solve this architectural problem. We're not expecting code, but rather a strategy for how you would attack this particular verification of this architectural element. 

* __You may ask the Moderator any questions you have about the project__. The Moderator is your customer, your boss, your project manager, your IT ops guy.... Basically, the Moderator is everybody except you.
* __Any technology is fair game__. Customers really don't care, most of the time, what kind of technology you use... until they care, anyway. Just because this exercise is being done at a particular conference or user group doesn't imply the Moderator requires you to use that technology; if something else makes more sense, run with it! Just be prepared to defend its use during the Peer Review Phase.
* __You may safely make assumptions about technologies you don't know well__. However, any assumptions you make under this rule must be clearly defined and described during the Peer Review Phase.

The Moderator will give you some kind of audio and visual cue when your time is getting low, and then at some point, time will run out and it will be time to move on to the Peer Review Phase.

### [List Katas &raquo;]({{ site.url }}/ffkatas/list.html)

### [Random Kata &raquo;]({{ site.url }}/ffkatas/random.html)


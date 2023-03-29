# Personal Site (now w/vite!)

I recently opened up my original personal site and realized many things:
1. The code was woefully out of date. 100% Class-based components in react, poor organization, mis-matched functions. Something had to be done
2. `create-react-app` has also aged poorly. Webpack was struggling with my static assests since many packages were now (also) out of date.
3. Bugs. There were a couple bugs in the deployed version that needed to be sorted.


Put all of these together, and what do you get?

## A new Website, built on Vite.js, with less package dependancies.

I'm trying to mimic the functionality of the original app, without so many random packages from npm. Currently, this version is using:

- Bootstrap: Styling, Scrollspy, Nav
- ParticleJS: Obviously
- DEVICONS: For the sweet, sweet icons. 

I hope to eliminate Bootstrap in favor of in-house CSS, but the website needs to be off the ground first. 
# Recurrent Queer Imaginaries
In collaboration with Helen Pritchard 

# Description 
"Recurrent Queer Imaginaries" features queer manifestos, urban dreams and the new artificial intelligence entity - "Motto Assistant". As a machine learner, "Motto Assistant" continuously writes mottos for revolutions, anti-facist guiding principles of living, queer love ethics, authoritarian resistances, political movements, class struggles, municipal identities, city planning, art practices, joyful engagements and violent direct action.The artwork was developed using manifestos and zines for queer and intersectional life as source text for machine learning and generative processes with neural networks. Incoherent and worm-eaten, Soon and Pritchard invite the audience to interpret a motto from "Motto Assistant" as a guiding principle of how to reorganise your collective life and fight injustices in the present. 
Now, start your motto...

For more details, visit: http://siusoon.net/recurrent-queer-imaginaries/ 

# Technical 
1. For machine learning and training: Adapt from [Text Predictor](https://github.com/gsurma/text_predictor) in Python, produced by Greg Surma 
2. For diastic modelling and text generation: p5.js 

# CREDIT:
FONT - https://fontlibrary.org/en/font/textura-libera
GIF/motion graphic by Rafel Araujo - https://giphy.com/gifs/animation-loop-dark-xUA7aQJxHftDbAFMic
p5.js - https://p5js.org/

# What it does:
- loading the source text and put each word into an array
- match the words based on the seed text and perform diastic generation
- Generate motto every x seconds with a loading transitional graphic
- the motto will type out character by character on display

# How to use:
1. change the variable of seedtext
2. change the path of source text
3. change the variable of auto timer
4. change the transitional logo and loading time under setTimeout
5. change the speed of typing

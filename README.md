PsiTurk_Flanker
===============

Created by Matthew Crump 2014

Sample code for running a web-based flanker (a la Eriksen & Eriksen, 1974) experiment. This code is based on the scripts used by [Crump, McDonnell, & Gureckis (2013)](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0057410) to replicate the flanker effect via Amazon Mechanical Turk. It has been edited for clarity and with added comments throughout, and to interface with [Psiturk](http://psiturk.org).

##Contents

####FlankerMain.html
The start page for the task. Displays brief instructions and consent form. Button click initiates pop-up window for flanker task

####Flankertask.html
Page for flanker experiment. Begins with a demographics questionnaire, continues on to experiment. Current experimental design involves 4 blocks of 92 trials, with 50% congruent and incongruent trials. Flanker stimuli are made up from the letter s,d, j, and k. Trial order is fully randomized when the page is loaded.

####FlankerStims.js
Javascript file for creating the trial structure, with helper functions.

####Fstyle.css
Style sheets for controlling HTML element look and feel

####TURKconsent.html
Placeholder for consent form

####FlankerDebrief.html
Placeholder for debriefing

####FlankerInstructions.html
Task instructions

####jquery-2.1.0.min.js
JQUERY library (helpful tools for easily controlling HTML element behavior with Javascript)


##References

[Crump, M. J. C., McDonnell, J. V., & Gureckis, T. M. (2013). Evaluating Amazon's Mechanical Turk as a tool for experimental behavioral research. PloS one, 8(3), e57410.](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0057410)

Eriksen, B. A., & Eriksen, C. W. (1974). Effects of noise letters upon the identification of a target letter in a nonsearch task. Perception & Psychophysics, 16(1), 143-149.

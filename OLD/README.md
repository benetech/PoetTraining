# PoetTraining
The aim of the application is to train individuals to make images and diagrams, particularly those critical in STEM (science, technology, engineering, mathematics) education, accessible to all readers. This module updates and expands upon the existing training module currently available at: https://diagram.herokuapp.com/training/index <br />

The upcoming work involves an update to the current UI design for the training pages as well as adding additional best practice examples/guidelines and interactive, hands-on exercises. 

The module consists of 4 main sections:
* Introduction to Accessible Images - basic overview page
* When to Describe - figuring out when a description is actually required; this section leverages existing code, but will require updates to the look and feel to match the rest of the site (use existing 1 template)
* How to Describe - adds general guidelines that apply when describing any image/diagram (1 new template)
* Practice Describing - adds best practice guidelines and examples for specific image types/categories; includes 6 image types that will autogenerate using a form-based input (7 new templates = 1 general + 6 image-specific) <br />

Refer to the reference file: https://benetech.box.com/s/1ogjlbno9b2uoe05pnurt42rspvox9re), for a more details explanations and links to relevant folders and files. <br />

## Technical Information
The sections are available as summaries on the main page and/or detailed, individuals pages
* Front-End tech stack: Backbone, HTML, CSS, JavaScript, github 
* Back-End tech stack: none (requires limited local storage for each user's browser session; no long-term storage required)
* QA tech stack: Web Driver (content should be reflowable; primary expected usage via desktop, but should document expected experience when using tablets: iPad, Chromebook)
* Accessibility requirements: WCAG AA, Section 508 (Benetech can provide some assistance on this front if required)
* Existing code that should be reused for 2. When to Describe available at: https://github.com/benetech/ImageDescService/tree/master/public/javascripts

## Deployment
* Push code to github
* Build will be automatically deployed
* Wait for about 15 minutes and then check to see if changes made are reflected at https://poet-qa.diagramcenter.org




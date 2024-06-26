## Dynamic Interactions for R and Python using Quarto and WebAssembly

### Details

- **Location:** [Hewlett Teaching Center](https://campus-map.stanford.edu/?id=04-510), Room 101.
- **Dates:** Wednesdays, May 1st and May 8th 2024
- **Time:** 1:30 – 2:50 PM PDT (80 minutes)
- **Website:** <https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/>

### Abstract

These lectures delve into the world of dynamic interactions available through interactive documents by exploring the integration of web-based versions of R and Python within the Quarto framework. The dynamic capabilities of the Quarto publishing framework, coupled with in-browser versions of leading data science language distributions based on WebAssembly, offer a unique platform for real-time code execution, fostering interactive experiences in data analysis and scientific computing. We’ll discuss how this approach not only fosters interactive experiences in data analysis and scientific computing but also provides a powerful and versatile toolset for researchers, educators, and practitioners.

### Format

Each topic is covered in a sequence of two consecutive lectures.  In the first 
meeting, the speaker can introduce the topic and work through a simple example. 
The participants will be expected to replicate the example and other exercises 
outside of class before the next meeting. The second meeting will involve a 
further discussion of the topic, including any issues that arose with the 
examples/exercises and even an in-class walk-through if that is helpful.

### Schedule

- May 1st
  - [Dynamic Interactions for R and Python](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day01a-wasm.html#/title-slide)
  - [Reproducible Research with Quarto](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day01b-quarto.html#/title-slide) (Quarto Intro)
- May 8th
  - [Exercise 1: Create and Publish](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day02a-create-and-publish-rstudio.html)
  - [Exercise 2: Convert Existing Documents](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day02b-convert.html)
  - [Exercise 3: Slide Decks](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day02c-slides.html)
  - [Exercise 4: Dynamic Currency](https://talks.thecoatlessprofessor.com/stats352-guest-lectures-on-dynamic-interactions-wasm/day02d-currency.html)

### Authoring Codespace

If you are comfortable with VS Code, you can jump right into an Authoring Codespace for Dynamic Documents by clicking on the following button:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/coatless-quarto/quarto-webr-pyodide-demo?devcontainer_path=.devcontainer%2Fvs-code%2Fdevcontainer.json)

**Note:** Codespaces are available to Students and Teachers for free [up to 180 core hours per month](https://docs.github.com/en/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-github-codespaces) through [GitHub Education](https://education.github.com/). Otherwise, you will have [up to 60 core hours and 15 GB free per month](https://github.com/features/codespaces#pricing).


### Useful links

- [`Pyodide`](https://pyodide.org/en/stable/) [:octocat:](https://github.com/pyodide/pyodide): Severless Python Distribution
- [`webR`](https://docs.r-wasm.org/) [:octocat:](https://github.com/r-wasm/webr): Severless R Distribution
- [`Quarto`](https://quarto.org/) [:octocat:](https://github.com/quarto-dev/quarto-cli): An open-source scientific and technical publishing system
- WebAssembly Extensions for Quarto 
    - [`{quarto-pyodide}`](https://quarto.thecoatlessprofessor.com/pyodide) [:octocat:](https://github.com/coatless-quarto/pyodide): Severless Python documents
    - [`{quarto-webr}`](https://quarto-webr.thecoatlessprofessor.com/) [:octocat:](https://github.com/coatless/quarto-webr): Severless R documents

### Additional Resources

- [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/)
  - [JupyterLab - WASM](https://jupyterlite.readthedocs.io/en/stable/_static/lab/index.html?path=intro.ipynb)
  - [JupyterNotebook - WASM](https://jupyterlite.readthedocs.io/en/stable/_static/lab/index.html?path=intro.ipynb)
- [marimo](https://marimo.app/)
- [webR REPL](https://webr.r-wasm.org/latest/)
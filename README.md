

![437500379-b501488e-d636-437d-9fd8-088ea2004ff2](https://github.com/user-attachments/assets/52dfe798-f4d1-473f-b9a3-14db202f0398)

# SciCalX 
SciCalX is a feature-packed scientific calculator designed to provide an easy-to-use interface for performing various calculations in physics, chemistry, biology, and mathematics. It includes a scientific notation converter, fundamental equations, and support for smooth animations. I didn't find any app like i wanted, so i made myself.


## Features

 - Scientific calculator with basic and advanced operations.

 - Unit converter 

 - Physics, Chemistry, Biology, and Math fundamental equations.

- Themes

- MathJax integration for displaying complex equations.

- Fully functional on Windows (with an easy-to-install .exe).


# 📦 Installation
- Download the latest release from the Releases page. (Use the mediafire links)

- Run the installer (SciCalX Setup.exe).

- After installation, search for SciCalX in the Start menu or desktop shortcut to launch the app.


# 🔧 Usage
Once installed, you can:

- Use the calculator. It has both simple addition, and multiplication as well as complex trigonometric functions, etc.

- Access the equations via the "Equations" tab and use the 200+ equations library for reference. 

- Use the unit converter by selecting the category and unit you wish to convert. ( 70+ units supported)

- Use the plug-in manager to upload/remove and enable/disable plug-ins.



# Making Plug-ins and Plug-in system information (For beta version):

## SciCalX v1.0.0 Beta.1 supports plug-ins for equations and themes.

### How to Upload and use plug-ins:

- Just download the plugins (you can make one , or download some plug-ins I made.) (They are .json files)
-  Launch SciCalX application 
- click on Plug-In manager  for uploading equation plug-ins.
- Click on " `  Upload theme plugin ` " button and select the file.



### How to Create a Plug-in for SciCalX
SciCalX supports two types of plug-ins:

Equation Plug-ins: Add new equations to the app.
Theme Plug-ins: Customize the app's appearance with new themes.
-  Equation Plug-ins
**JSON Structure**
- An equation plug-in is a .json file with the following structure:



 `{
  "name": "Plug-in Name",
  "categories": [
    {
      "name": "Category Name",
      "equations": [
        {
          "name": "Equation Name",
          "formula": "LaTeX Formula"
        }
      ]
    }
  ]
}`




### Example:

 - Here’s an example of an equation plug-in for General Relativity:

`{
  "name": "General Relativity",
  "categories": [
    {
      "name": "Einstein's Field Equations",
      "equations": [
        {
          "name": "Einstein Field Equations",
          "formula": "R_{\\mu\\nu} - \\frac{1}{2} g_{\\mu\\nu} R + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4} T_{\\mu\\nu}"
        },
        {
          "name": "Schwarzschild Metric",
          "formula": "ds^2 = -\\left(1 - \\frac{2GM}{c^2r}\\right)c^2dt^2 + \\left(1 - \\frac{2GM}{c^2r}\\right)^{-1}dr^2 + r^2d\\Omega^2"
        }
      ]
    }
  ]
}`


 **Steps to Create an Equation Plug-in**
- Create a .json file (e.g., general-relativity.json).
- Follow the structure above to define categories and equations.
- Save the file.
***How to Upload***
- Open the Plug-in Manager in SciCalX.
- Click the "Upload New Plug-in" button.
- Select your .json file.
- The equations will be added to the app under the specified categories.

## Theme Plug-ins
JSON Structure
A theme plug-in is a .json file with the following structure:
`{
  "name": "Theme Name",
  "variables": {
    "--background-color": "CSS Value",
    "--text-color": "CSS Value",
    "--button-background": "CSS Value",
    "--button-text": "CSS Value"
  }
}`


**Example**
Here’s an example of a theme plug-in for Oceanic:

`{
  "name": "Oceanic",
  "variables": {
    "--background-color": "#002b36",
    "--text-color": "#839496",
    "--button-background": "#268bd2",
    "--button-text": "#ffffff"
  }
}`
 

**Steps to Create a Theme Plug-in**
- Create a .json file (e.g., oceanic-theme.json).
- Define the CSS variables for your theme.
- Save the file.
- How to Upload
- Open the Theme Manager in SciCalX.
- Click the "Upload Theme Plug-in" button.
- Select your .json file.
- The theme will be applied to the app.






# 🔄 Contributing
**Feel free to contribute by:**

- Forking the repository and submitting a pull request.

- Reporting bugs or suggesting new features.

- Testing new versions and providing feedback.

# 📝 License
This project is licensed under the Custom License - see the LICENSE file for details.

# 📱 Contact
###  Creator: Dheeraj Kumar.N

### GitHub: https://github.com/ProCoder1199X
### Email: dheeraj1018279@gmail.com
### website: https://procoder1199x.github.io


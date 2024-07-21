# Quiz Template

This is a simple multi-step quiz template created with HTML, CSS, and JavaScript. It includes a progress bar, validation for required fields, and a results page with recommendations.

## Features

- Progress bar at the top.
- Multiple choice questions with icons.
- Required field validation.
- Navigation buttons (Next, Previous, and Continue).
- Results page with recommendations.

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/LiyamFlx/quiz-template.git
    ```

2. Navigate to the project directory:
    ```sh
    cd quiz-template
    ```

3. Open `index.html` in your browser to see the quiz in action.

## File Structure

quiz-template/
├── images/
│   ├── icon-business.png
│   ├── icon-blog.png
│   ├── icon-informational.png
│   ├── icon-portfolio.png
│   ├── icon-food.png
│   ├── icon-retail.png
│   ├── icon-health.png
│   ├── icon-fashion.png
│   ├── icon-crm.png
│   ├── icon-email.png
│   ├── icon-pos.png
│   ├── icon-payment.png
│   ├── icon-design.png
│   ├── icon-value.png
│   ├── icon-support.png
│   ├── icon-sales.png
│   ├── icon-ease.png
│   ├── icon-reputation.png
├── index.html
├── styles.css
├── script.js
├── README.md

- `index.html`: The main HTML file containing the quiz structure.
- `styles.css`: The CSS file for styling the quiz.
- `script.js`: The JavaScript file for quiz functionality.
- `images/`: Directory containing icon images used in the quiz.

## Customization

You can customize the quiz by editing the HTML, CSS, and JavaScript files. Here are some ways you can modify the quiz:

### Adding or Removing Questions

1. **Add a New Question**:
    - Copy one of the existing question containers (`<div class="question-container" data-step="N">`).
    - Update the `data-step` attribute to the next number.
    - Modify the content as needed.

2. **Remove a Question**:
    - Delete the corresponding question container (`<div class="question-container" data-step="N">`).

3. **Update Total Steps**:
    - Update the `totalSteps` variable in `script.js` to match the number of questions.

### Changing the Design

1. **Update CSS**:
    - Modify `styles.css` to change the look and feel of the quiz.
    - Update colors, fonts, and layout as needed.

2. **Update Images**:
    - Replace images in the `images/` directory with your own icons.
    - Ensure the new images have the same names or update the image paths in `index.html`.

### Modifying the Results Page

1. **Update Results Content**:
    - Modify the `displayResults` function in `script.js` to change the content of the results page.
    - Add or remove result cards, update links, and change text as needed.

## License

This project is licensed under the MIT License.

function openReadme() {
    // Assuming there's only one textarea with the class name 'inside'
    const textarea = document.querySelector('.inside');
    const text=getText();
    if (textarea) {
        textarea.value = text;
    }
    
}



function getText(){
// Usage example
const readmeText = `UI Code Assistant - Usage Guide
    The UI Code Assistant is designed to help developers generate HTML, CSS, and JavaScript code snippets quickly and efficiently. Below is a guide on how to use the UI Code Assistant by typing specific commands.

    HTML Snippets:
    html:login - Generates a login form HTML code snippet.
    html:shopping cart - Generates a shopping cart HTML code snippet.
    html:doc - Generates a basic HTML document structure.
    html:search - Generates an HTML search form.

    CSS Snippets:
    css:login - Generates CSS styling for the login form.
    css:shopping cart - Generates CSS styling for the shopping cart.

    JavaScript Snippets:
    js:login - Generates JavaScript code for form submission validation in the login form.
    js:shopping cart - Generates JavaScript code for adding items to the shopping cart and checkout functionality.
    js:console - Generates a basic JavaScript console log statement.
    js:if - Generates a JavaScript if statement template.
    js:for - Generates a JavaScript for loop template.
    js:function - Generates a JavaScript function template.

    How to Use:
    Type one of the above commands in the text editor.
    The corresponding code snippet will be generated automatically.
    You can then customize the generated code as per your requirements.

    Example:
    If you type html:login, the UI Code Assistant will generate the following HTML code for a login form:

    <div class="container">
        <h2>Login Form</h2>
        <form id="loginForm" action="login.php" method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password">
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>

    Feel free to use the UI Code Assistant to streamline your web development workflow and speed up code generation. Happy coding!`;
return readmeText;
};
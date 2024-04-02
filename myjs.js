document.addEventListener('DOMContentLoaded', function () {
    const textareas = document.getElementsByClassName('inside');

    for (let i = 0; i < textareas.length; i++) {
        const textarea = textareas[i];
        textarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const lines = textarea.value.split('\n');
                const currentLineIndex = textarea.value.substring(0, textarea.selectionStart).split('\n').length - 1;
                const currentLine = lines[currentLineIndex];
                const leadingSpaces = currentLine.match(/^\s*/)[0]; // Get the leading spaces from the current line

                let outputValue = '';

                switch (currentLine.trim().toLowerCase()) {
                    case 'css:login':
                        outputValue=`<style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .container {
                        max-width: 300px;
                        margin: 50px auto;
                        padding: 20px;
                        background-color: #f4f4f4;
                        border-radius: 5px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    .form-group {
                        margin-bottom: 15px;
                    }
                    .form-group label {
                        font-weight: bold;
                    }
                    .form-group input {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                    }
                    .form-group button {
                        width: 100%;
                        padding: 8px;
                        background-color: #333;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                </style>`;break;
                    case 'html:login':
                        outputValue = `${leadingSpaces}<div class="container">
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
                `;
                        break;
                    case 'css:shopping cart' :
                        outputValue=`<style>
                        body {
                            font-family: Arial, sans-serif;
                        }
                        .container {
                            max-width: 800px;
                            margin: 50px auto;
                            padding: 20px;
                            background-color: #f4f4f4;
                            border-radius: 5px;
                            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                        }
                        .product {
                            display: flex;
                            margin-bottom: 20px;
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 10px;
                        }
                        .product img {
                            width: 100px;
                            height: 100px;
                            margin-right: 20px;
                        }
                        .product .info {
                            flex-grow: 1;
                        }
                        .product h2 {
                            margin: 0;
                        }
                        .product .price {
                            font-weight: bold;
                            color: #ff6600;
                        }
                        .total {
                            font-size: 18px;
                            font-weight: bold;
                            margin-top: 20px;
                        }
                        button {
                            padding: 8px;
                            background-color: #333;
                            color: #fff;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                    </style>`; break;
                case 'html:shopping cart':
                    outputValue = `${leadingSpaces}<<div class="container">
                    <h1>Shopping Cart</h1>
                    <div class="product">
            ${leadingSpaces}            <div class="info">
            ${leadingSpaces}                <h2>Product 1</h2>
            ${leadingSpaces}                <p>Description of Product 1.</p>
            ${leadingSpaces}                <p class="price">$19.99</p>
            ${leadingSpaces}            </div>
            ${leadingSpaces}            <button onclick="addToCart(19.99)">Add to Cart</button>
            ${leadingSpaces}        </div>
                    <div class="product">
            ${leadingSpaces}            <div class="info">
            ${leadingSpaces}                <h2>Product 2</h2>
            ${leadingSpaces}                <p>Description of Product 2.</p>
            ${leadingSpaces}                <p class="price">$24.99</p>
            ${leadingSpaces}            </div>
            ${leadingSpaces}            <button onclick="addToCart(24.99)">Add to Cart</button>
            ${leadingSpaces}        </div>
                    <div class="product">
            ${leadingSpaces}            <div class="info">
            ${leadingSpaces}                <h2>Product 3</h2>
            ${leadingSpaces}                <p>Description of Product 3.</p>
            ${leadingSpaces}                <p class="price">$14.99</p>
            ${leadingSpaces}            </div>
            ${leadingSpaces}            <button onclick="addToCart(14.99)">Add to Cart</button>
            ${leadingSpaces}        </div>
                    <div class="total" id="totalPrice">$0.00</div>
                    <button onclick="checkout()">Checkout</button>
                </div>`;
                    break;
                    case 'js:login':outputValue=`<script>
                    document.getElementById('loginForm').addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent form submission
                    
                        const username = document.getElementById('username').value;
                        const password = document.getElementById('password').value;
                    
                        // Example validation (you can replace this with your validation logic)
                        if (username === 'admin' && password === 'password') {
                            alert('Login successful!');
                        } else {
                            alert('Invalid username or password.');
                        }
                    });
                    </script>`;break;
                 case'js:shopping cart':
                 outputValue=`<script>
                 let totalPrice = 0;
         
                 function addToCart(price) {
                     totalPrice += price;
                     document.getElementById('totalPrice').textContent = '$' + totalPrice.toFixed(2);
                 }
         
                 function checkout() {
                     alert('Total Price: $' + totalPrice.toFixed(2));
                     // Here you can add further logic for payment processing or order confirmation
                 }
             </script>`; break;
                    case 'html:doc':
                        outputValue = `${leadingSpaces}<!DOCTYPE html>
${leadingSpaces}<html lang="en">
${leadingSpaces}<head>
${leadingSpaces}    <meta charset="UTF-8">
${leadingSpaces}    <meta name="viewport" content="width=device-width, initial-scale=1.0">
${leadingSpaces}    <title>Document</title>
${leadingSpaces}</head>
${leadingSpaces}<body style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f4f4f4; margin: 0;">
${leadingSpaces}</body>
${leadingSpaces}</html>`;
                        break;
                    case 'html:search':
                        outputValue = `${leadingSpaces}<form action="#" method="GET" style="display: flex;">
${leadingSpaces}    <input type="text" name="search" placeholder="Search..." style="flex: 1; padding: 8px;">
${leadingSpaces}    <button type="submit" style="background-color: #333; color: #fff; border: none; padding: 8px;">Search</button>
${leadingSpaces}</form>`;
                        break;
                    case 'js:console':
                        outputValue = `${leadingSpaces}console.log();`;
                        break;
                    case 'js:if':
                        outputValue = `${leadingSpaces}if () {\n${leadingSpaces}\n${leadingSpaces}}`;
                        break;
                    case 'js:for':
                        outputValue = `${leadingSpaces}for (let i = 0; i < array.length; i++) {\n${leadingSpaces}\n${leadingSpaces}}`;
                        break;
                    case 'js:function':
                        outputValue = `${leadingSpaces}function functionName() {\n${leadingSpaces}\n${leadingSpaces}}`;
                        break;
                    default:
                        return;
                }

                const updatedValue = textarea.value.substring(0, textarea.selectionStart - currentLine.length)
                    + outputValue
                    + textarea.value.substring(textarea.selectionEnd, textarea.value.length);

                textarea.value = updatedValue;

                const cursorPosition = textarea.selectionStart - currentLine.length + outputValue.length;
                textarea.selectionStart = textarea.selectionEnd = cursorPosition;

                event.preventDefault();
            }
        });
    }
});

function openAsHTML() {
    const textareas = document.getElementsByClassName('inside');

    if (textareas.length === 0) {
        console.error('Textarea element with class "inputTextarea" not found.');
        return;
    }

    const textarea = textareas[0];
    const content = textarea.value;

    if (!content) {
        const textarea = document.querySelector('.inside');
    const text="Textarea content is empty, Code to view Design";
    if (textarea) {
        textarea.value = text;
    }
        console.error('Textarea content is empty.');
        return;
    }

    console.log(content);

    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();
}

function openClear() {
    const textareas = document.getElementsByClassName('inside');

    for (let i = 0; i < textareas.length; i++) {
        const textarea = textareas[i];
        textarea.value = "";
    }
}

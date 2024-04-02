function openAnalysis() {
    const textarea = document.querySelector('.inside');
    const suggestTextarea = document.querySelector('.suggest');

    if (textarea && suggestTextarea) {
        const htmlCode = textarea.value;
        const suggestions = analyzeHTML(htmlCode);
        suggestTextarea.value = suggestions;
    } else {
        console.error('Textarea elements not found.');
    }
}

function analyzeHTML(htmlCode) {
    const regexTags = /<([a-z][\w-]*)\b[^>]*>/gs;
    const tagsFrequency = {};

    let match;
    while ((match = regexTags.exec(htmlCode)) !== null) {
        const tagName = match[1];
        tagsFrequency[tagName] = (tagsFrequency[tagName] || 0) + 1;
    }

    // Convert tagsFrequency object to an array of objects [{tag: tagName, count: frequency}, ...]
    const tagsArray = Object.keys(tagsFrequency).map(tagName => ({ tag: tagName, count: tagsFrequency[tagName] }));
    console.log(tagsArray)
    // Call zeroCountSpecialTags and remainingTags functions with tagsArray
    const suggestions = generateSuggestions(zeroCountSpecialTags(tagsArray), remainingTags(tagsArray));

    return suggestions.join('\n');
}

function zeroCountSpecialTags(tagsArray) {
    const specialTags = ['html', 'meta', 'body', 'div', 'script', 'style'];
    return specialTags
        .filter(tag => !tagsArray.find(item => item.tag === tag))
        .map(tag => ({ tag, count: 0 }));
}

function remainingTags(tagsArray) {
    const sortedTags = tagsArray.sort((a, b) => a.count - b.count);
    return sortedTags.slice(0, 3);
}

function generateSuggestions(zeroCountTags, remainingTags) {
    console.log(zeroCountTags)
    console.log(remainingTags)
    const suggestions = [];

    zeroCountTags.forEach(tag => {
        switch (tag.tag) {
            case 'html':
                suggestions.push('Include <html> tag to define the document type and language.');
                break;
            case 'meta':
                suggestions.push('Add <meta> tags to provide metadata about the HTML document.');
                break;
            case 'body':
                suggestions.push('Use <body> tag to define the main content of the HTML document.');
                break;
            case 'div':
                suggestions.push('Utilize <div> tags for structuring and styling sections of the page.');
                break;
            case 'script':
                suggestions.push('Include <script> tags to embed or reference JavaScript code.');
                break;
            case 'style':
                suggestions.push('Use <style> tags to define internal CSS styles for the document.');
                break;
            default:
                suggestions.push(`Consider using indentation for better HTML structure.`);
                break;
        }
    });

    remainingTags.forEach(tag => {
        switch (tag.tag) {
            case 'button':
                suggestions.push('Add type attribute (e.g., type="button" or type="submit") to buttons for clarity.');
                break;
            case 'table':
                suggestions.push('Use semantic elements like <th> for table headers and <caption> for table captions.');
                break;
            case 'label':
                suggestions.push('Associate labels with form elements using the for attribute.');
                break;
            case 'img':
                suggestions.push('Consider adding alternative text (alt attribute) to images for accessibility.');
                break;
            case 'a':
                suggestions.push('Ensure links (anchor tags) have meaningful href attributes.');
                break;
            case 'form':
                suggestions.push('Include labels for form inputs using <label> tags.');
                break;
            case 'video':
                suggestions.push('Provide alternative video formats for better browser compatibility.');
                break;
            case 'audio':
                suggestions.push('Provide alternative audio formats for better browser compatibility.');
                break;
            case 'input':
                suggestions.push('Use input types like email, tel, number, etc., for better user experience.');
                break;
            case 'ul':
            case 'ol':
                suggestions.push('Use list elements (ul, ol) for lists to improve accessibility.');
                break;
            case 'nav':
                suggestions.push('Use semantic <nav> element for navigation menus.');
                break;
            case 'header':
            case 'footer':
                suggestions.push('Use header and footer elements for better page structure.');
                break;
            case 'section':
                suggestions.push('Use section elements to divide content into thematic groups.');
                break;
            case 'article':
                suggestions.push('Use article elements for standalone content like blog posts.');
                break;
            case 'blockquote':
                suggestions.push('Use blockquote elements for quotations to provide proper attribution.');
                break;
                case 'html':
                case 'meta':
                case 'head':
                case 'div':
                case 'script':
                case 'style':break;
            default:
                suggestions.push(`Consider using identation for better HTML structure.`);
                break;
        }
    });

    return suggestions;
}

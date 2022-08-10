document.addEventListener('DOMContentLoaded', function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true},
      {left: "\\begin{align*}", right: "\\end{align*}", display: true}
    ],
    displayMode: true,
    newLineInDisplayMode: true
  });
});

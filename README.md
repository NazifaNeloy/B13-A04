

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById()**  
- Selects one element using ID.  
- ID must be unique.

**getElementsByClassName()**  
- Selects multiple elements using class name.  
- Returns a live collection.

**querySelector()**  
- Selects the first matching element using CSS selectors.

**querySelectorAll()**  
- Selects all matching elements.  
- Returns a static NodeList.

Simple idea:  
- ID → one element  
- Class → many elements  
- querySelector → first match  
- querySelectorAll → all matches  

---


### 2. How do you create and insert a new element into the DOM?
Steps:  
1. Create element  
2. Add content  
3. Insert into page  

Example:

```javascript
let newDiv = document.createElement("div");
newDiv.innerText = "Hello World";

document.body.appendChild(newDiv);
```
---

### 3. What is Event Bubbling? And how does it work?
Event bubbling means the event starts from the clicked element and moves upward to parent elements.

Example:
If you click a button inside a div →
First button event runs → then div event runs.

It is default behavior in JavaScript events.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation means adding one event listener to a parent instead of many children.

Example:

```javascript 
document.getElementById("list").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        console.log("List item clicked");
    }
});
```
---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()

Stops default browser actions.

Example: Stop form submission.

stopPropagation()

Stops event from going to parent elements.

Stops event bubbling.

Simple difference:

preventDefault → stops browser action

stopPropagation → stops event movement

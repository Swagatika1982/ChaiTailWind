document.addEventListener("DOMContentLoaded", () => {
    applyChaiStyles();
    setupRuntimeControls();
});

function applyChaiStyles() {
    const allElements = document.querySelectorAll("*");

    allElements.forEach((element) => {
        const classes = Array.from(element.classList);

        classes.forEach((className) => {
            if (className.startsWith("chai-")) {
                parseChaiClass(element, className);
            }
        });
    });
}

function parseChaiClass(element, className) {
    const parts = className.split("-");

    if (parts[1] === "p") {
        element.style.padding = `${parts[2]}px`;
    }

    if (parts[1] === "m") {
        element.style.margin = `${parts[2]}px`;
    }

    if (parts[1] === "bg") {
        element.style.backgroundColor = parts[2];
    }

    if (parts[1] === "text" && isColor(parts[2])) {
        element.style.color = parts[2];
    }

    if (parts[1] === "text" && ["left", "center", "right"].includes(parts[2])) {
        element.style.textAlign = parts[2];
    }

    if (parts[1] === "font") {
        element.style.fontSize = `${parts[2]}px`;
    }
    if (parts[1] === "border") {
        const borderSize = parts[2] || 1;
        element.style.border = `${borderSize}px solid black`;
    }

    if (parts[1] === "rounded") {
        element.style.borderRadius = parts[2] ? `${parts[2]}px` : "8px";
    }

    if (parts[1] === "w") {
        element.style.width = `${parts[2]}px`;
    }

    if (parts[1] === "h") {
        element.style.height = `${parts[2]}px`;
    }

    if (parts[1] === "flex") {
        element.style.display = "flex";
    }

    if (parts[1] === "gap") {
        element.style.gap = `${parts[2]}px`;
    }

    if (parts[1] === "justify") {
        if (parts[2] === "start") {
            element.style.justifyContent = "flex-start";
        }

        if (parts[2] === "center") {
            element.style.justifyContent = "center";
        }

        if (parts[2] === "end") {
            element.style.justifyContent = "flex-end";
        }

        if (parts[2] === "between") {
            element.style.justifyContent = "space-between";
        }

        if (parts[2] === "around") {
            element.style.justifyContent = "space-around";
        }
    }

    if (parts[1] === "items") {
        if (parts[2] === "start") {
            element.style.alignItems = "flex-start";
        }

        if (parts[2] === "center") {
            element.style.alignItems = "center";
        }

        if (parts[2] === "end") {
            element.style.alignItems = "flex-end";
        }
    }
}

function isColor(value) {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "black",
        "white",
        "gray",
        "purple",
        "orange",
        "CadetBlue",
        "Crimson",
        "DarkCyan",
        "ForestGreen",
        "DimGray",
        "LawnGreen",
        "Maroon",
        "MidnightBlue",
        "OliveDrab",
        "Turquoise",
        "Thistle",
        Sienna,

    ];

    return colors.includes(value);
}

function setupRuntimeControls() {
    const demoBox = document.getElementById("demoBox");

    setupDropdown("background", demoBox, "chai-bg-");
    setupDropdown("padding", demoBox, "chai-p-");
    setupDropdown("margin", demoBox, "chai-m-");

    setupDropdown("textColor", demoBox, "chai-text-", [
        "chai-text-left",
        "chai-text-center",
        "chai-text-right",
    ]);

    setupDropdown("textAlign", demoBox, "chai-text-", [
        "chai-text-white",
        "chai-text-black",
        "chai-text-red",
        "chai-text-blue",
    ]);

    setupDropdown("fontSize", demoBox, "chai-font-");
    setupDropdown("border", demoBox, "chai-border");
    setupDropdown("radius", demoBox, "chai-rounded");
    setupDropdown("width", demoBox, "chai-w-");
    setupDropdown("height", demoBox, "chai-h-");

    setupDropdown("flex", demoBox, "chai-flex");
    setupDropdown("gap", demoBox, "chai-gap-");
    setupDropdown("justify", demoBox, "chai-justify-");
    setupDropdown("items", demoBox, "chai-items-");
}

function setupDropdown(selectId, element, prefix, ignoreList = []) {
    const select = document.getElementById(selectId);

    select.addEventListener("change", () => {
        removeChaiClassByPrefix(element, prefix, ignoreList);

        if (select.value !== "") {
            element.classList.add(select.value);
        }

        applyChaiStyles();
    });
}

function removeChaiClassByPrefix(element, prefix, ignoreList = []) {
    const classes = Array.from(element.classList);

    classes.forEach((className) => {
        if (className.startsWith(prefix) && !ignoreList.includes(className)) {
            element.classList.remove(className);
        }
    });
}
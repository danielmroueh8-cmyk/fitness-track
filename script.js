// ======================================================
// FITNESS & NUTRITION TRACKER
// FINAL SCRIPT.JS
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // FOOD DATABASE - VALUES PER 100G
    // ==================================================

    const defaultFoods = [
        { name: "Whole Egg", calories: 143, protein: 12.6, carbs: 0.7, fats: 9.5, fiber: 0 },
        { name: "Tanour Bread", calories: 326.42, protein: 10.94, carbs: 71.70, fats: 1.89, fiber: 10.38 },
        { name: "Banana", calories: 89, protein: 1.1, carbs: 22.8, fats: 0.3, fiber: 2.6 },
        { name: "Peach", calories: 39, protein: 0.9, carbs: 9.5, fats: 0.3, fiber: 1.5 },
        { name: "Apricot", calories: 48, protein: 1.4, carbs: 11.1, fats: 0.4, fiber: 2 },
        { name: "Melon", calories: 34, protein: 0.8, carbs: 8.2, fats: 0.2, fiber: 0.9 },
        { name: "Carrot", calories: 41, protein: 0.9, carbs: 9.6, fats: 0.2, fiber: 2.8 },
        { name: "Broccoli", calories: 34, protein: 2.8, carbs: 6.6, fats: 0.4, fiber: 2.6 },
        { name: "Tomato", calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2, fiber: 1.2 },
        { name: "Light Mozzarella", calories: 170, protein: 24, carbs: 3, fats: 7, fiber: 0 },
        { name: "White Tuna", calories: 100, protein: 18.73, carbs: 0, fats: 2.8, fiber: 0 },
        { name: "Potato Raw", calories: 77, protein: 2, carbs: 17.5, fats: 0.1, fiber: 2.2 },
        { name: "Chicken Breast Raw", calories: 120, protein: 22.5, carbs: 0, fats: 2.6, fiber: 0 },
        { name: "Lean Beef Raw", calories: 150, protein: 21.5, carbs: 0, fats: 7, fiber: 0 },
        { name: "White Rice Cooked", calories: 130, protein: 2.7, carbs: 28.2, fats: 0.3, fiber: 0.4 },
        { name: "Green Apple", calories: 52, protein: 0.3, carbs: 13.8, fats: 0.2, fiber: 2.4 },
        { name: "Potato Wedges Cooked", calories: 93, protein: 2.5, carbs: 21.2, fats: 0.1, fiber: 2.2 },
        { name: "Olive Oil", calories: 884, protein: 0, carbs: 0, fats: 100, fiber: 0 },
        { name: "Skim Milk", calories: 40, protein: 3.3, carbs: 5, fats: 0.2, fiber: 0 },
        { name: "Dates Pitted", calories: 277, protein: 1.8, carbs: 75, fats: 0.2, fiber: 6.7 },
        { name: "Green Bell Pepper", calories: 20, protein: 0.9, carbs: 4.6, fats: 0.2, fiber: 1.7 },
        { name: "Red Bell Pepper", calories: 31, protein: 1, carbs: 6, fats: 0.3, fiber: 2.1 },
        { name: "Watermelon", calories: 30, protein: 0.6, carbs: 7.6, fats: 0.2, fiber: 0.4 },
        { name: "Chicken Thigh Skinless", calories: 209, protein: 26, carbs: 0, fats: 10.9, fiber: 0 },
        { name: "Toast Bread", calories: 233, protein: 7.2, carbs: 46.5, fats: 2.8, fiber: 4.9 },
        { name: "Kousa", calories: 17, protein: 1.2, carbs: 3.1, fats: 0.3, fiber: 1 },
        { name: "Lettuce", calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2, fiber: 1.3 },
        { name: "Corn Kernels Cooked", calories: 96, protein: 3.4, carbs: 21, fats: 1.5, fiber: 2.4 },
        { name: "Mozzarella Full Fat", calories: 300, protein: 22, carbs: 2.2, fats: 22, fiber: 0 },
        { name: "Tuna Chili with Oil", calories: 186, protein: 27, carbs: 0, fats: 8.7, fiber: 0 },
        { name: "Mortadella", calories: 205, protein: 12.5, carbs: 10.7, fats: 12.5, fiber: 0 },
        { name: "Atlantic Hake Raw", calories: 71, protein: 18, carbs: 0.1, fats: 1.2, fiber: 0 },
        { name: "Chicken Breast Cooked", calories: 165, protein: 31, carbs: 0, fats: 3.6, fiber: 0 },
        { name: "Walnuts Raw", calories: 654, protein: 15.2, carbs: 13.7, fats: 65.2, fiber: 6.7 },
        { name: "Almonds Raw", calories: 579, protein: 21.2, carbs: 21.6, fats: 49.9, fiber: 12.5 },
        { name: "Cashews Raw", calories: 553, protein: 18.2, carbs: 30.2, fats: 43.9, fiber: 3.3 },
        { name: "Cucumber", calories: 15, protein: 0.65, carbs: 3.63, fats: 0.11, fiber: 0.5 },
        { name: "Chicken Breast Boiled", calories: 151, protein: 28.7, carbs: 0, fats: 3, fiber: 0 },
        { name: "Bamayi Sauce", calories: 173, protein: 4.5, carbs: 10, fats: 13, fiber: 2 },
        { name: "Laban Full Fat", calories: 61, protein: 3.5, carbs: 4.7, fats: 3.3, fiber: 0 },
        { name: "Yellow Mustard", calories: 60, protein: 3.7, carbs: 5.8, fats: 3.3, fiber: 3.2 },
        { name: "Garlic Raw", calories: 149, protein: 6.4, carbs: 33.1, fats: 0.5, fiber: 2.1 },
        { name: "Plain Yogurt", calories: 66, protein: 8, carbs: 4, fats: 2, fiber: 0 },
        { name: "Ma3karouna Dry", calories: 371, protein: 13, carbs: 74.7, fats: 1.5, fiber: 3.2 },
        { name: "Crispy Chicken Air Fried", calories: 220, protein: 24, carbs: 14, fats: 7, fiber: 0.8 }
    ];


    // ==================================================
    // YOUR EXACT WORKOUT PROGRAM
    // ==================================================

    const workoutPlans = {

        "Upper A": [
            { exercise: "Bench Press", rest: "2-3 min", sets: 3, reps: "6-10", start: "25 kg" },
            { exercise: "Lat Pulldown", rest: "90-120 sec", sets: 3, reps: "8-12", start: "35 kg" },
            { exercise: "Incline Barbell/Machine Press", rest: "90-120 sec", sets: 3, reps: "8-12" },
            { exercise: "Seated Cable Row", rest: "90-120 sec", sets: 3, reps: "8-12", start: "35 kg" },
            { exercise: "Cable Lateral Raise", rest: "60-90 sec", sets: 3, reps: "12-15" },
            { exercise: "Triceps Rope Pushdown", rest: "60-90 sec", sets: 3, reps: "10-15", start: "35 kg" },
            { exercise: "EZ-Bar/Cable Biceps Curl", rest: "60-90 sec", sets: 3, reps: "10-15" }
        ],

        "Lower A": [
            { exercise: "Barbell Back Squat (or V-Squat Machine)", rest: "2-3 min", sets: 3, reps: "6-10", start: "40 kg" },
            { exercise: "Leg Press", rest: "90-120 sec", sets: 3, reps: "10-12", start: "90 kg" },
            { exercise: "Leg Extension", rest: "60-90 sec", sets: 3, reps: "10-15" },
            { exercise: "Seated Leg Curl", rest: "60-90 sec", sets: 3, reps: "10-15", start: "45 kg" },
            { exercise: "Standing Calf Raise", rest: "60-90 sec", sets: 3, reps: "12-15" },
            { exercise: "Hanging Knee Raise/Cable Crunch", rest: "45-60 sec", sets: 3, reps: "10-15" }
        ],

        "Upper B": [
            { exercise: "Chest Supported Row", rest: "90-120 sec", sets: 3, reps: "8-12", start: "22.5 kg" },
            { exercise: "Shoulder Press Machine", rest: "90-120 sec", sets: 3, reps: "8-12", start: "17.5 kg (each hand)" },
            { exercise: "Close-Grip Lat Pulldown", rest: "90-120 sec", sets: 3, reps: "10-12", start: "40 kg" },
            { exercise: "Machine/Cable Chest Press", rest: "90-120 sec", sets: 3, reps: "8-12" },
            { exercise: "Cable Chest Fly", rest: "60-90 sec", sets: 3, reps: "12-15" },
            { exercise: "Rear Delt Fly", rest: "60-90 sec", sets: 3, reps: "12-15" },
            { exercise: "Overhead Rope Triceps Extension", rest: "60-90 sec", sets: 3, reps: "10-15", start: "30 kg" },
            { exercise: "Hammer Curl", rest: "60-90 sec", sets: 3, reps: "10-15", start: "10 kg (each hand)" }
        ],

        "Lower B": [
            { exercise: "Barbell Back Squat", rest: "2-3 min", sets: 3, reps: "6-10", start: "35 kg" },
            { exercise: "Cable Kickback", rest: "60-90 sec", sets: 3, reps: "12-15" },
            { exercise: "45° Back Extension", rest: "90-120 sec", sets: 3, reps: "12-15", start: "2.5 kg" },
            { exercise: "Seated Leg Curl", rest: "60-90 sec", sets: 3, reps: "10-15", start: "45 kg" },
            { exercise: "Seated Calf Raise", rest: "60-90 sec", sets: 3, reps: "12-15", start: "30 kg" },
            { exercise: "Machine Crunch", rest: "45-60 sec", sets: 3, reps: "10-15", start: "5 kg" }
        ]
    };


    // ==================================================
    // LOAD SAVED DATA
    // ==================================================

    let foodDatabase = loadData("foodDatabase", []);
    let foodLog = loadData("foodLog", []);
    let dailyTracker = loadData("dailyTracker", []);
    let bodyProgress = loadData("bodyProgress", []);
    let workoutHistory = loadData("workoutHistory", []);

    let caloriesChart = null;
    let deficitChart = null;
    let proteinChart = null;
    let weightChart = null;

    let photoDB = null;


    function loadData(key, fallback) {
        try {
            const data = JSON.parse(localStorage.getItem(key));
            return Array.isArray(data) ? data : fallback;
        } catch {
            return fallback;
        }
    }


    function saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }


    // ==================================================
    // ADD DEFAULT FOODS WITHOUT DELETING YOUR FOODS
    // ==================================================

    defaultFoods.forEach(defaultFood => {

        const exists = foodDatabase.some(food =>
            String(food.name).toLowerCase() ===
            defaultFood.name.toLowerCase()
        );

        if (!exists) {
            foodDatabase.push(defaultFood);
        }

    });

    saveData("foodDatabase", foodDatabase);


    // ==================================================
    // DATE FUNCTIONS
    // ==================================================

    function today() {

        const date = new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function formatDate(date) {

        if (!date) return "";

        const parts = date.split("-");

        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }


    function shortDate(date) {

        if (!date) return "";

        const parts = date.split("-");

        return `${parts[2]}/${parts[1]}`;
    }


    // ==================================================
    // NAVIGATION
    // ==================================================

    window.showPage = function(pageId, button) {

        document.querySelectorAll(".page").forEach(page => {
            page.classList.remove("active");
        });

        const page = document.getElementById(pageId);

        if (page) {
            page.classList.add("active");
        }

        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.classList.remove("active-nav");
        });

        if (button) {
            button.classList.add("active-nav");
        }

        if (pageId === "dashboard") updateDashboard();
        if (pageId === "foodLog") {
            displayFoodLog();
            renderFavoriteFoods();
        }

        if (pageId === "dailyTracker") {
            loadTrackerDay();
            displayDailyTracker();
        }

        if (pageId === "bodyProgress") {
            displayBodyProgress();
        }

        if (pageId === "workoutTracker") {
            displayCurrentWorkout();
            displayWorkoutHistory();
        }

        if (pageId === "foodDatabase") {
            displayFoods();
        }
    };


    // ==================================================
    // FOOD DATABASE
    // ==================================================

    function displayFoods() {

        const table = document.getElementById("foodTable");

        if (!table) return;

        table.innerHTML = "";

        const searchText =
            (document.getElementById("foodDatabaseSearch")?.value || "")
                .toLowerCase();

        const filtered =
            foodDatabase
                .map((food, index) => ({ ...food, originalIndex: index }))
                .filter(food =>
                    !searchText || food.name.toLowerCase().includes(searchText)
                );

        if (filtered.length === 0) {
            renderEmptyState(
                table, 8,
                foodDatabase.length === 0
                    ? "No foods yet. Add one below."
                    : "No foods match your search."
            );
            return;
        }

        filtered.forEach(food => {

            const index = food.originalIndex;
            const favorite = isFavoriteFood(food.name);

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>
                    <button class="favorite-star ${favorite ? "active" : ""}"
                        onclick="toggleFavoriteFood('${food.name.replace(/'/g, "\\'")}')"
                        title="Toggle favorite">
                        ${favorite ? "★" : "☆"}
                    </button>
                    ${food.name}
                </td>
                <td>100 g</td>
                <td>${Number(food.calories).toFixed(1)}</td>
                <td>${Number(food.protein).toFixed(1)} g</td>
                <td>${Number(food.carbs).toFixed(1)} g</td>
                <td>${Number(food.fats).toFixed(1)} g</td>
                <td>${Number(food.fiber).toFixed(1)} g</td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteFood(${index})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        });
    }


    let selectedFoodIndex = null;


    function getSortedFoodList() {

        return foodDatabase
            .map((food, index) => ({ ...food, originalIndex: index }))
            .sort((a, b) => a.name.localeCompare(b.name));
    }


    function renderFoodSearchResults(query) {

        const container = document.getElementById("foodSearchResults");

        if (!container) return;

        container.innerHTML = "";

        if (!query) {
            container.classList.remove("active");
            return;
        }

        const matches = getSortedFoodList().filter(food =>
            food.name.toLowerCase().includes(query.toLowerCase())
        );

        matches.forEach(food => {

            const item = document.createElement("div");

            item.className = "food-search-item";
            item.textContent = food.name;

            item.addEventListener("mousedown", event => {
                event.preventDefault();
                selectedFoodIndex = food.originalIndex;
                const input = document.getElementById("foodSearchInput");
                if (input) input.value = food.name;
                container.innerHTML = "";
                container.classList.remove("active");
            });

            container.appendChild(item);
        });

        container.classList.toggle("active", matches.length > 0);
    }


    function updateFoodSelect() {

        selectedFoodIndex = null;

        const input = document.getElementById("foodSearchInput");

        if (input) input.value = "";

        const container = document.getElementById("foodSearchResults");

        if (container) {
            container.innerHTML = "";
            container.classList.remove("active");
        }
    }


    function addFood() {

        const nameInput = document.getElementById("foodName");

        if (!nameInput) return;

        const name = nameInput.value.trim();

        if (!name) {
            alert("Enter a food name.");
            return;
        }

        const exists = foodDatabase.some(food =>
            String(food.name).toLowerCase() === name.toLowerCase()
        );

        if (exists) {
            alert("This food already exists.");
            return;
        }

        const food = {
            name,
            calories: Number(document.getElementById("calories")?.value) || 0,
            protein: Number(document.getElementById("protein")?.value) || 0,
            carbs: Number(document.getElementById("carbs")?.value) || 0,
            fats: Number(document.getElementById("fats")?.value) || 0,
            fiber: Number(document.getElementById("fiber")?.value) || 0
        };

        foodDatabase.push(food);

        saveData("foodDatabase", foodDatabase);

        displayFoods();
        updateFoodSelect();

        ["foodName", "calories", "protein", "carbs", "fats", "fiber"]
            .forEach(id => {
                const element = document.getElementById(id);
                if (element) element.value = "";
            });
    }


    window.deleteFood = function(index) {

        if (!confirm("Delete this food?")) return;

        foodDatabase.splice(index, 1);

        saveData("foodDatabase", foodDatabase);

        displayFoods();
        updateFoodSelect();
    };


    // ==================================================
    // NUTRITION TOTALS
    // ==================================================

    function getNutritionTotals(date) {

        const totals = {
            calories: 0,
            protein: 0,
            carbs: 0,
            fats: 0,
            fiber: 0
        };

        foodLog
            .filter(entry => entry.date === date)
            .forEach(entry => {

                totals.calories += Number(entry.calories) || 0;
                totals.protein += Number(entry.protein) || 0;
                totals.carbs += Number(entry.carbs) || 0;
                totals.fats += Number(entry.fats) || 0;
                totals.fiber += Number(entry.fiber) || 0;
            });

        return totals;
    }


    // ==================================================
    // FOOD LOG
    // ==================================================

    function addToMeal() {

        const gramsInput = document.getElementById("foodGrams");
        const dateInput = document.getElementById("logDate");
        const searchInput = document.getElementById("foodSearchInput");

        if (!gramsInput || !dateInput) return;

        const grams = Number(gramsInput.value);

        if (selectedFoodIndex === null || selectedFoodIndex === undefined) {
            alert("Select a food.");
            return;
        }

        if (!grams || grams <= 0) {
            alert("Enter the amount in grams.");
            return;
        }

        const food = foodDatabase[selectedFoodIndex];

        if (!food) {
            alert("Food not found.");
            return;
        }

        const multiplier = grams / 100;

        foodLog.push({
            id: Date.now(),
            date: dateInput.value,
            meal: document.getElementById("mealSelect")?.value || "Lunch",
            food: food.name,
            grams,
            calories: Number(food.calories) * multiplier,
            protein: Number(food.protein) * multiplier,
            carbs: Number(food.carbs) * multiplier,
            fats: Number(food.fats) * multiplier,
            fiber: Number(food.fiber) * multiplier
        });

        saveData("foodLog", foodLog);

        gramsInput.value = "";
        selectedFoodIndex = null;

        if (searchInput) searchInput.value = "";

        displayFoodLog();
        calculateDailyTracker();
        updateDashboard();
    }


    function displayFoodLog() {

        const table = document.getElementById("foodLogTable");

        if (!table) return;

        table.innerHTML = "";

        const selectedDate =
            document.getElementById("logDate")?.value || today();

        const mealOrder = {
            Breakfast: 1,
            Lunch: 2,
            Dinner: 3,
            Snacks: 4
        };

        const entries = foodLog
            .map((entry, index) => ({ ...entry, realIndex: index }))
            .filter(entry => entry.date === selectedDate)
            .sort((a, b) =>
                (mealOrder[a.meal] || 99) -
                (mealOrder[b.meal] || 99)
            );

        if (entries.length === 0) {
            renderEmptyState(table, 9, "No meals logged for this day yet. Add one above.");
            updateNutritionSummary();
            return;
        }

        entries.forEach(entry => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${entry.meal}</td>
                <td>${entry.food}</td>
                <td>${entry.grams} g</td>
                <td>${Number(entry.calories).toFixed(1)}</td>
                <td>${Number(entry.protein).toFixed(1)} g</td>
                <td>${Number(entry.carbs).toFixed(1)} g</td>
                <td>${Number(entry.fats).toFixed(1)} g</td>
                <td>${Number(entry.fiber).toFixed(1)} g</td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteLogEntry(${entry.realIndex})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        });

        updateNutritionSummary();
    }


    window.deleteLogEntry = function(index) {

        foodLog.splice(index, 1);

        saveData("foodLog", foodLog);

        displayFoodLog();
        calculateDailyTracker();
        updateDashboard();
    };


    // ==================================================
    // NUTRITION SUMMARY
    // ==================================================

    function updateNutritionSummary() {

        const logDate =
            document.getElementById("logDate")?.value || today();

        const totals = getNutritionTotals(logDate);

        setText("summaryCalories", `${totals.calories.toFixed(0)} kcal`);
        setText("summaryProtein", `${totals.protein.toFixed(1)} g`);
        setText("summaryCarbs", `${totals.carbs.toFixed(1)} g`);
        setText("summaryFats", `${totals.fats.toFixed(1)} g`);
        setText("summaryFiber", `${totals.fiber.toFixed(1)} g`);

        setText("logCalories", `${totals.calories.toFixed(0)} kcal`);
        setText("logProtein", `${totals.protein.toFixed(1)} g`);
        setText("logCarbs", `${totals.carbs.toFixed(1)} g`);
        setText("logFats", `${totals.fats.toFixed(1)} g`);
        setText("logFiber", `${totals.fiber.toFixed(1)} g`);

        setNutritionStatus("summaryCalories", totals.calories, "calories");
        setNutritionStatus("summaryProtein", totals.protein, "protein");
        setNutritionStatus("summaryCarbs", totals.carbs, "carbs");
        setNutritionStatus("summaryFats", totals.fats, "fats");
        setNutritionStatus("summaryFiber", totals.fiber, "fiber");

        // Battery-style goal progress
        const goals = getGoals();

        const calorieTarget =
            Number(goals.calories) || 1900;

        updateNutritionBattery("summaryCalories", totals.calories, calorieTarget);
        updateNutritionBattery("summaryProtein", totals.protein, goals.protein);
        updateNutritionBattery("summaryCarbs", totals.carbs, goals.carbs);
        updateNutritionBattery("summaryFats", totals.fats, goals.fats);
        updateNutritionBattery("summaryFiber", totals.fiber, goals.fiber);
    }


    function updateNutritionBattery(elementId, current, target) {

        const container =
            document.getElementById(elementId + "Battery");

        if (!container) return;

        const fill = container.querySelector(".battery-fill");
        const label = container.querySelector(".battery-label");

        if (!fill || !label) return;

        const targetValue = Number(target) || 0;

        const percent =
            targetValue > 0
                ? Math.round((Number(current) / targetValue) * 100)
                : 0;

        const clampedWidth = Math.max(0, Math.min(100, percent));

        fill.style.width = `${clampedWidth}%`;
        label.textContent = `${percent}%`;

        fill.classList.remove(
            "battery-low",
            "battery-mid",
            "battery-good",
            "battery-over"
        );

        if (percent < 40) {
            fill.classList.add("battery-low");
        }
        else if (percent < 75) {
            fill.classList.add("battery-mid");
        }
        else if (percent <= 100) {
            fill.classList.add("battery-good");
        }
        else {
            fill.classList.add("battery-over");
        }
    }


    function setText(id, text) {

        const element = document.getElementById(id);

        if (element) {
            element.textContent = text;
        }
    }


    // ==================================================
    // DAILY TRACKER
    // ==================================================

    const workoutCalories = {
        "Rest": 0,
        "Upper A": 350,
        "Upper B": 350,
        "Lower A": 450,
        "Lower B": 450
    };


    function calculateDailyTracker() {

        const trackerDate = document.getElementById("trackerDate");

        if (!trackerDate) return;

        const date = trackerDate.value;

        const steps =
            Number(document.getElementById("stepsInput")?.value) || 0;

        const workout =
            document.getElementById("workoutInput")?.value || "Rest";

        const stepsCalories = steps * 0.04;

        const exerciseCalories =
            workoutCalories[workout] || 0;

        const nutrition = getNutritionTotals(date);

        const caloriesEaten = nutrition.calories;

        const baseCalories = 1800;

        const tdee =
            baseCalories +
            stepsCalories +
            exerciseCalories;

        const deficit =
            tdee - caloriesEaten;

        setValue("stepsCaloriesInput", stepsCalories.toFixed(0));
        setValue("exerciseCaloriesInput", exerciseCalories.toFixed(0));
        setValue("caloriesEatenInput", caloriesEaten.toFixed(0));
        setValue("tdeeInput", tdee.toFixed(0));
        setValue("deficitInput", deficit.toFixed(0));
    }


    function setValue(id, value) {

        const element = document.getElementById(id);

        if (element) {
            element.value = value;
        }
    }


    function loadTrackerDay() {

        const date =
            document.getElementById("trackerDate")?.value;

        if (!date) return;

        const saved =
            dailyTracker.find(day => day.date === date);

        if (saved) {

            setValue("sleepInput", saved.sleep ?? "");
            setValue("stepsInput", saved.steps ?? "");
            setValue("workoutInput", saved.workout || "Rest");
            setValue("dailyNotesInput", saved.notes || "");

        } else {

            setValue("sleepInput", "");
            setValue("stepsInput", "");
            setValue("workoutInput", "Rest");
            setValue("dailyNotesInput", "");
        }

        calculateDailyTracker();
    }


    function saveTrackerDay() {

        const date =
            document.getElementById("trackerDate")?.value;

        if (!date) {
            alert("Select a date.");
            return;
        }

        calculateDailyTracker();

        const day = {
            date,
            sleep: Number(document.getElementById("sleepInput")?.value) || 0,
            steps: Number(document.getElementById("stepsInput")?.value) || 0,
            stepsCalories: Number(document.getElementById("stepsCaloriesInput")?.value) || 0,
            workout: document.getElementById("workoutInput")?.value || "Rest",
            exerciseCalories: Number(document.getElementById("exerciseCaloriesInput")?.value) || 0,
            caloriesEaten: getNutritionTotals(date).calories,
            tdee: Number(document.getElementById("tdeeInput")?.value) || 0,
            deficit: Number(document.getElementById("deficitInput")?.value) || 0,
            notes: document.getElementById("dailyNotesInput")?.value.trim() || ""
        };

        const index =
            dailyTracker.findIndex(item => item.date === date);

        if (index >= 0) {
            dailyTracker[index] = day;
        } else {
            dailyTracker.push(day);
        }

        saveData("dailyTracker", dailyTracker);

        displayDailyTracker();
        updateDashboard();

        showToast("Day saved ✓");
    }


    function displayDailyTracker() {

        const table =
            document.getElementById("dailyTrackerTable");

        if (!table) return;

        table.innerHTML = "";

        const sorted =
            dailyTracker
                .map((day, index) => ({ ...day, realIndex: index }))
                .sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

        if (sorted.length === 0) {
            renderEmptyState(table, 11, "No days tracked yet. Save today's numbers above.");
            return;
        }

        sorted.forEach(day => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${formatDate(day.date)}</td>
                <td>${day.sleep || 0} h</td>
                <td>${Number(day.steps || 0).toLocaleString()}</td>
                <td>${Number(day.stepsCalories || 0).toFixed(0)} kcal</td>
                <td>${day.workout || "Rest"}</td>
                <td>${Number(day.exerciseCalories || 0).toFixed(0)} kcal</td>
                <td>${Number(day.caloriesEaten || 0).toFixed(0)} kcal</td>
                <td>${Number(day.tdee || 0).toFixed(0)} kcal</td>
                <td>${Number(day.deficit || 0).toFixed(0)} kcal</td>
                <td class="notes-cell" title="${(day.notes || "").replace(/"/g, "&quot;")}">${day.notes || "-"}</td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteTrackerDay(${day.realIndex})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        });
    }


    window.deleteTrackerDay = function(index) {

        if (!confirm("Delete this day?")) return;

        dailyTracker.splice(index, 1);

        saveData("dailyTracker", dailyTracker);

        displayDailyTracker();
        updateDashboard();
    };


    // ==================================================
    // BODY PHOTO DATABASE
    // ==================================================

    if ("indexedDB" in window) {

        const request =
            indexedDB.open("FitnessTrackerPhotos", 1);

        request.onupgradeneeded = event => {

            const db = event.target.result;

            if (!db.objectStoreNames.contains("photos")) {
                db.createObjectStore("photos", {
                    keyPath: "id"
                });
            }
        };

        request.onsuccess = event => {
            photoDB = event.target.result;
        };

        request.onerror = () => {
            console.warn("Photo database could not be opened.");
        };
    }


    function savePhoto(id, file) {

        return new Promise(resolve => {

            if (!photoDB || !file) {
                resolve();
                return;
            }

            const transaction =
                photoDB.transaction(["photos"], "readwrite");

            transaction
                .objectStore("photos")
                .put({ id, file });

            transaction.oncomplete = () => resolve();
            transaction.onerror = () => resolve();
        });
    }


    function getPhoto(id) {

        return new Promise(resolve => {

            if (!photoDB) {
                resolve(null);
                return;
            }

            const transaction =
                photoDB.transaction(["photos"], "readonly");

            const request =
                transaction.objectStore("photos").get(id);

            request.onsuccess = () =>
                resolve(request.result?.file || null);

            request.onerror = () =>
                resolve(null);
        });
    }


    function deletePhoto(id) {

        if (!photoDB) return;

        const transaction =
            photoDB.transaction(["photos"], "readwrite");

        transaction.objectStore("photos").delete(id);
    }


    // ==================================================
    // PHOTO PREVIEW
    // ==================================================

    function previewPhoto(input, imageId, placeholderId) {

        const file = input.files?.[0];

        const image = document.getElementById(imageId);
        const placeholder = document.getElementById(placeholderId);

        if (!image || !placeholder) return;

        if (!file) {
            image.style.display = "none";
            placeholder.style.display = "block";
            return;
        }

        const reader = new FileReader();

        reader.onload = event => {

            image.src = event.target.result;
            image.style.display = "block";
            placeholder.style.display = "none";
        };

        reader.readAsDataURL(file);
    }


    // ==================================================
    // BODY PROGRESS
    // ==================================================

    async function saveBodyProgressEntry() {

        const date =
            document.getElementById("progressDate")?.value;

        if (!date) {
            alert("Select a date.");
            return;
        }

        const frontFile =
            document.getElementById("frontPhotoInput")?.files?.[0];

        const backFile =
            document.getElementById("backPhotoInput")?.files?.[0];

        const existing =
            bodyProgress.find(item => item.date === date);

        const entry = {
            date,
            weight: Number(document.getElementById("progressWeight")?.value) || 0,
            waist: Number(document.getElementById("waistInput")?.value) || 0,
            chest: Number(document.getElementById("chestInput")?.value) || 0,
            leftArm: Number(document.getElementById("leftArmInput")?.value) || 0,
            rightArm: Number(document.getElementById("rightArmInput")?.value) || 0,
            leftThigh: Number(document.getElementById("leftThighInput")?.value) || 0,
            rightThigh: Number(document.getElementById("rightThighInput")?.value) || 0,
            hasFrontPhoto: Boolean(frontFile) || Boolean(existing?.hasFrontPhoto),
            hasBackPhoto: Boolean(backFile) || Boolean(existing?.hasBackPhoto)
        };

        const index =
            bodyProgress.findIndex(item => item.date === date);

        if (index >= 0) {
            bodyProgress[index] = entry;
        } else {
            bodyProgress.push(entry);
        }

        if (frontFile) {
            await savePhoto(`${date}-front`, frontFile);
        }

        if (backFile) {
            await savePhoto(`${date}-back`, backFile);
        }

        saveData("bodyProgress", bodyProgress);

        clearProgressForm();
        displayBodyProgress();
        updateDashboard();

        showToast("Body progress saved ✓");
    }


    function clearProgressForm() {

        [
            "progressWeight",
            "waistInput",
            "chestInput",
            "leftArmInput",
            "rightArmInput",
            "leftThighInput",
            "rightThighInput"
        ].forEach(id => setValue(id, ""));

        const frontInput =
            document.getElementById("frontPhotoInput");

        const backInput =
            document.getElementById("backPhotoInput");

        if (frontInput) frontInput.value = "";
        if (backInput) backInput.value = "";

        const front =
            document.getElementById("frontPhotoPreview");

        const back =
            document.getElementById("backPhotoPreview");

        if (front) {
            front.src = "";
            front.style.display = "none";
        }

        if (back) {
            back.src = "";
            back.style.display = "none";
        }

        const fp =
            document.getElementById("frontPhotoPlaceholder");

        const bp =
            document.getElementById("backPhotoPlaceholder");

        if (fp) fp.style.display = "block";
        if (bp) bp.style.display = "block";
    }


    function displayBodyProgress() {

        const table =
            document.getElementById("bodyProgressTable");

        if (!table) return;

        table.innerHTML = "";

        const sorted =
            bodyProgress
                .map((entry, index) => ({
                    ...entry,
                    realIndex: index
                }))
                .sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

        if (sorted.length === 0) {
            renderEmptyState(table, 11, "No progress check-ins yet. Add your first one above.");
            updateBeforeAfterSlider();
            updateMeasurementCharts();
            updateMeasurementBatteries();
            return;
        }

        sorted.forEach(entry => {

            const front =
                entry.hasFrontPhoto
                    ? `<button class="view-photo-btn"
                         onclick="openProgressPhoto('${entry.date}','front')">
                         View
                       </button>`
                    : "-";

            const back =
                entry.hasBackPhoto
                    ? `<button class="view-photo-btn"
                         onclick="openProgressPhoto('${entry.date}','back')">
                         View
                       </button>`
                    : "-";

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${formatDate(entry.date)}</td>
                <td>${entry.weight || "-"}</td>
                <td>${entry.waist || "-"}</td>
                <td>${entry.chest || "-"}</td>
                <td>${entry.leftArm || "-"}</td>
                <td>${entry.rightArm || "-"}</td>
                <td>${entry.leftThigh || "-"}</td>
                <td>${entry.rightThigh || "-"}</td>
                <td>${front}</td>
                <td>${back}</td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteBodyProgress(${entry.realIndex})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        });

        updateBeforeAfterSlider();
        updateMeasurementCharts();
        updateMeasurementBatteries();
    }


    window.openProgressPhoto = async function(date, side) {

        const file =
            await getPhoto(`${date}-${side}`);

        if (!file) {
            alert("Photo not found.");
            return;
        }

        const modal =
            document.getElementById("photoModal");

        const image =
            document.getElementById("photoModalImage");

        if (!modal || !image) return;

        const url = URL.createObjectURL(file);

        image.src = url;
        modal.classList.add("active");
    };


    function closePhotoModal() {

        const modal =
            document.getElementById("photoModal");

        const image =
            document.getElementById("photoModalImage");

        if (modal) modal.classList.remove("active");

        if (image) {
            if (image.src.startsWith("blob:")) {
                URL.revokeObjectURL(image.src);
            }

            image.src = "";
        }
    }


    window.deleteBodyProgress = function(index) {

        if (!confirm("Delete this progress check-in?")) {
            return;
        }

        const entry = bodyProgress[index];

        if (entry) {
            deletePhoto(`${entry.date}-front`);
            deletePhoto(`${entry.date}-back`);
        }

        bodyProgress.splice(index, 1);

        saveData("bodyProgress", bodyProgress);

        displayBodyProgress();
        updateDashboard();
    };


    // ==================================================
    // BEFORE / AFTER PHOTO SLIDER
    // ==================================================

    async function updateBeforeAfterSlider() {

        const section = document.getElementById("beforeAfterSection");

        if (!section) return;

        const withFront =
            [...bodyProgress]
                .filter(entry => entry.hasFrontPhoto)
                .sort((a, b) => new Date(a.date) - new Date(b.date));

        if (withFront.length < 2) {
            section.style.display = "none";
            return;
        }

        section.style.display = "block";

        const oldest = withFront[0];
        const newest = withFront[withFront.length - 1];

        const oldestFile = await getPhoto(`${oldest.date}-front`);
        const newestFile = await getPhoto(`${newest.date}-front`);

        if (!oldestFile || !newestFile) {
            section.style.display = "none";
            return;
        }

        const beforeImg = document.getElementById("beforeAfterBefore");
        const afterImg = document.getElementById("beforeAfterAfter");
        const beforeLabel = document.getElementById("beforeAfterBeforeLabel");
        const afterLabel = document.getElementById("beforeAfterAfterLabel");

        if (beforeImg) beforeImg.src = URL.createObjectURL(oldestFile);
        if (afterImg) afterImg.src = URL.createObjectURL(newestFile);
        if (beforeLabel) beforeLabel.textContent = formatDate(oldest.date);
        if (afterLabel) afterLabel.textContent = formatDate(newest.date);
    }


    on("beforeAfterSlider", "input", event => {

        const wrapper = document.getElementById("beforeAfterAfterWrapper");

        if (wrapper) {
            wrapper.style.width = `${event.target.value}%`;
        }
    });


    // ==================================================
    // WORKOUT TRACKER
    // ==================================================

    function findPreviousExercise(workoutName, exerciseName) {

        const previousSessions =
            [...workoutHistory]
                .filter(session =>
                    session.workout === workoutName
                )
                .sort((a, b) =>
                    new Date(b.date) - new Date(a.date)
                );

        for (const session of previousSessions) {

            const found =
                session.exercises?.find(exercise =>
                    exercise.exercise === exerciseName
                );

            if (found && Number(found.weight) > 0) {
                return Number(found.weight);
            }
        }

        return 0;
    }


    function displayCurrentWorkout() {

        const select =
            document.getElementById("workoutPlanSelect");

        const table =
            document.getElementById("currentWorkoutTable");

        if (!select || !table) return;

        const workout = select.value;

        setText("currentWorkoutTitle", workout);

        table.innerHTML = "";

        const plan = workoutPlans[workout] || [];

        plan.forEach((exercise, index) => {

            const previousWeight =
                findPreviousExercise(
                    workout,
                    exercise.exercise
                );

            const startHint = exercise.start
                ? `Start: ${exercise.start}`
                : "kg";

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>
                    <strong>${exercise.exercise}</strong>
                    <div style="font-size:12px;color:#667085;margin-top:4px;">
                        Rest: ${exercise.rest}
                        <button type="button" class="rest-timer-btn"
                            onclick="startRestTimer(${parseRestSeconds(exercise.rest)})"
                            title="Start rest timer">
                            ⏱
                        </button>
                    </div>
                </td>

                <td>${exercise.sets}</td>

                <td>${exercise.reps}</td>

                <td>
                    <input
                        type="number"
                        class="workout-weight"
                        data-index="${index}"
                        placeholder="${
                            previousWeight
                                ? `Last: ${previousWeight} kg`
                                : startHint
                        }"
                        step="0.5"
                        min="0"
                    >

                    ${
                        previousWeight
                            ? `<span class="weight-badge weight-badge-previous">Previous: ${previousWeight} kg</span>`
                            : exercise.start
                                ? `<span class="weight-badge weight-badge-suggested">Suggested: ${exercise.start}</span>`
                                : ""
                    }
                </td>

                <td>
                    <input
                        type="text"
                        class="workout-notes"
                        data-index="${index}"
                        placeholder="Notes"
                    >
                </td>
            `;

            table.appendChild(row);
        });
    }


    function saveWorkoutSession() {

        const date =
            document.getElementById("workoutDate")?.value;

        const workout =
            document.getElementById("workoutPlanSelect")?.value;

        if (!date) {
            alert("Select workout date.");
            return;
        }

        if (!workout || !workoutPlans[workout]) {
            alert("Select a workout.");
            return;
        }

        const weights =
            document.querySelectorAll(".workout-weight");

        const notes =
            document.querySelectorAll(".workout-notes");

        let anyPR = false;

        const exercises =
            workoutPlans[workout].map((exercise, index) => {

                const weightValue = Number(weights[index]?.value) || 0;

                const previousBest =
                    findPreviousExercise(workout, exercise.exercise);

                const isPR =
                    weightValue > 0 &&
                    previousBest > 0 &&
                    weightValue > previousBest;

                if (isPR) anyPR = true;

                return {
                    exercise: exercise.exercise,
                    rest: exercise.rest,
                    targetSets: exercise.sets,
                    targetReps: exercise.reps,
                    weight: weightValue,
                    notes: notes[index]?.value.trim() || "",
                    isPR
                };
            });

        workoutHistory.push({
            id: Date.now(),
            date,
            workout,
            exercises
        });

        saveData("workoutHistory", workoutHistory);

        displayWorkoutHistory();
        displayCurrentWorkout();

        if (anyPR) {
            triggerConfetti();
            showToast("New personal record! 🏆");
        }

        if (!anyPR) {
            showToast(`${workout} saved ✓`);
        }
    }


    function displayWorkoutHistory() {

        const table =
            document.getElementById("workoutHistoryTable");

        if (!table) return;

        table.innerHTML = "";

        const searchText =
            (document.getElementById("workoutHistorySearch")?.value || "")
                .toLowerCase();

        let sorted =
            [...workoutHistory].sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            );

        if (searchText) {
            sorted = sorted.filter(session =>
                session.workout.toLowerCase().includes(searchText) ||
                (session.exercises || []).some(exercise =>
                    exercise.exercise.toLowerCase().includes(searchText)
                )
            );
        }

        if (sorted.length === 0) {
            renderEmptyState(
                table, 4,
                workoutHistory.length === 0
                    ? "No workouts logged yet. Save your first session above."
                    : "No workouts match your search."
            );
            return;
        }

        sorted.forEach(session => {

            const exercises =
                (session.exercises || [])
                    .map(exercise => {

                        const hasWeight = Number(exercise.weight) > 0;

                        let tags = "";

                        if (hasWeight) {
                            tags += `<span class="weight-badge">${exercise.weight} kg</span>`;
                        }

                        if (exercise.isPR) {
                            tags += `<span class="pr-badge">🏆 New PR</span>`;
                        }

                        return `
                            <div class="exercise-record">
                                <strong>${exercise.exercise}</strong>
                                ${tags ? `<div class="exercise-tags">${tags}</div>` : ""}
                            </div>
                        `;
                    })
                    .join("");

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${formatDate(session.date)}</td>
                <td><strong>${session.workout}</strong></td>
                <td>${exercises}</td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteWorkoutSession(${session.id})">
                        Delete
                    </button>
                </td>
            `;

            table.appendChild(row);
        });
    }


    window.deleteWorkoutSession = function(id) {

        if (!confirm("Delete this workout?")) {
            return;
        }

        workoutHistory =
            workoutHistory.filter(session =>
                session.id !== id
            );

        saveData("workoutHistory", workoutHistory);

        displayWorkoutHistory();
        displayCurrentWorkout();
    };


    // ==================================================
    // DASHBOARD
    // ==================================================

    function getDashboardDays() {

        const range =
            document.getElementById("dashboardRange")?.value || "7";

        let days =
            [...dailyTracker].sort((a, b) =>
                new Date(a.date) - new Date(b.date)
            );

        if (range !== "all") {
            days = days.slice(-Number(range));
        }

        return days;
    }


    function updateDashboard() {

        updateNutritionSummary();

        const days = getDashboardDays();

        let calories = 0;
        let protein = 0;
        let deficit = 0;
        let steps = 0;
        let sleep = 0;

        days.forEach(day => {

            const nutrition =
                getNutritionTotals(day.date);

            calories += nutrition.calories;
            protein += nutrition.protein;
            deficit += Number(day.deficit) || 0;
            steps += Number(day.steps) || 0;
            sleep += Number(day.sleep) || 0;
        });

        const count = days.length;

        setText(
            "averageCalories",
            count ? `${(calories / count).toFixed(0)} kcal` : "0 kcal"
        );

        setText(
            "averageProtein",
            count ? `${(protein / count).toFixed(1)} g` : "0 g"
        );

        setText(
            "averageDeficit",
            count ? `${(deficit / count).toFixed(0)} kcal` : "0 kcal"
        );

        setText(
            "averageSteps",
            count
                ? Math.round(steps / count).toLocaleString()
                : "0"
        );

        setText(
            "averageSleep",
            count ? `${(sleep / count).toFixed(1)} h` : "0 h"
        );

        const weights =
            [...bodyProgress]
                .filter(item => Number(item.weight) > 0)
                .sort((a, b) =>
                    new Date(a.date) - new Date(b.date)
                );

        const latest =
            weights[weights.length - 1];

        setText(
            "latestWeight",
            latest ? `${latest.weight} kg` : "--"
        );

        updateWeightTrend(weights);
        updateStreakCounter();
        updateAchievements();
        updateCalendarHeatmap();
        updateBackupReminder();

        createCharts(days, weights);

        updateFitnessScore();
    }


    // ==================================================
    // WEIGHT TREND ARROW
    // ==================================================

    function updateWeightTrend(weights) {

        const el = document.getElementById("weightTrendIndicator");

        if (!el) return;

        if (weights.length < 2) {
            el.textContent = "";
            return;
        }

        const latest = weights[weights.length - 1];
        const previous = weights[weights.length - 2];

        const diff = Number(latest.weight) - Number(previous.weight);

        el.classList.remove("trend-up", "trend-down", "trend-flat");

        if (Math.abs(diff) < 0.05) {
            el.textContent = "→ No change";
            el.classList.add("trend-flat");
        }
        else if (diff > 0) {
            el.textContent = `↑ +${diff.toFixed(1)} kg`;
            el.classList.add("trend-up");
        }
        else {
            el.textContent = `↓ ${diff.toFixed(1)} kg`;
            el.classList.add("trend-down");
        }
    }


    // ==================================================
    // STREAK COUNTER
    // ==================================================

    function updateStreakCounter() {

        const el = document.getElementById("streakBadge");

        if (!el) return;

        const loggedDates =
            new Set(dailyTracker.map(day => day.date));

        if (loggedDates.size === 0) {
            el.textContent = "🔥 0 day streak";
            return;
        }

        const sortedDates =
            [...loggedDates].sort().reverse();

        let streak = 0;

        const cursor = new Date(sortedDates[0] + "T00:00:00");

        while (true) {

            const year = cursor.getFullYear();
            const month = String(cursor.getMonth() + 1).padStart(2, "0");
            const day = String(cursor.getDate()).padStart(2, "0");
            const cursorStr = `${year}-${month}-${day}`;

            if (!loggedDates.has(cursorStr)) break;

            streak++;
            cursor.setDate(cursor.getDate() - 1);
        }

        el.textContent =
            streak === 1
                ? "🔥 1 day streak"
                : `🔥 ${streak} day streak`;
    }




    // ==================================================
    // LAST BACKUP REMINDER
    // ==================================================

    function updateBackupReminder() {

        const el = document.getElementById("backupReminder");

        if (!el) return;

        const lastBackup =
            Number(localStorage.getItem("lastBackupTime")) || 0;

        if (!lastBackup) {
            el.textContent = "You haven't backed up yet — export a copy to be safe.";
            el.classList.add("backup-reminder-warning");
            return;
        }

        const daysSince =
            Math.floor((Date.now() - lastBackup) / (1000 * 60 * 60 * 24));

        if (daysSince >= 3) {
            el.textContent = `Last backup was ${daysSince} days ago — export a fresh copy.`;
            el.classList.add("backup-reminder-warning");
        } else {
            el.textContent =
                daysSince === 0
                    ? "Backed up today ✓"
                    : `Last backup: ${daysSince} day${daysSince === 1 ? "" : "s"} ago`;
            el.classList.remove("backup-reminder-warning");
        }
    }


    // ==================================================
    // CHARTS
    // ==================================================

    function createCharts(days, weights) {

        if (typeof Chart === "undefined") {
            return;
        }

        const labels =
            days.map(day => shortDate(day.date));

        const calories =
            days.map(day =>
                getNutritionTotals(day.date).calories
            );

        const tdee =
            days.map(day => Number(day.tdee) || 0);

        const deficit =
            days.map(day => Number(day.deficit) || 0);

        const protein =
            days.map(day =>
                getNutritionTotals(day.date).protein
            );


        caloriesChart = replaceChart(
            caloriesChart,
            "caloriesChart",
            "bar",
            labels,
            [
                {
                    label: "Calories Eaten",
                    data: calories
                },
                {
                    label: "TDEE",
                    data: tdee
                }
            ]
        );


        deficitChart = replaceChart(
            deficitChart,
            "deficitChart",
            "bar",
            labels,
            [
                {
                    label: "Calorie Deficit",
                    data: deficit
                }
            ]
        );


        proteinChart = replaceChart(
            proteinChart,
            "proteinChart",
            "line",
            labels,
            [
                {
                    label: "Protein (g)",
                    data: protein,
                    tension: 0.3
                }
            ]
        );


        weightChart = replaceChart(
            weightChart,
            "weightChart",
            "line",
            weights.map(item => shortDate(item.date)),
            [
                {
                    label: "Weight (kg)",
                    data: weights.map(item => Number(item.weight)),
                    tension: 0.3
                }
            ]
        );
    }


    function replaceChart(
        oldChart,
        canvasId,
        type,
        labels,
        datasets
    ) {

        if (oldChart) {
            oldChart.destroy();
        }

        const canvas =
            document.getElementById(canvasId);

        if (!canvas) return null;

        return new Chart(canvas, {
            type,
            data: {
                labels,
                datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    // ==================================================
    // BACKUP - EXPORT / IMPORT ALL DATA
    // ==================================================

    function blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    function base64ToBlob(base64) {
        return fetch(base64).then(res => res.blob());
    }

    function collectPhotoKeys() {
        const keys = [];
        bodyProgress.forEach(entry => {
            if (entry.hasFrontPhoto) keys.push(`${entry.date}-front`);
            if (entry.hasBackPhoto) keys.push(`${entry.date}-back`);
        });
        return keys;
    }

    async function exportAllData() {

        const photoKeys = collectPhotoKeys();
        const photos = {};

        for (const key of photoKeys) {
            const file = await getPhoto(key);
            if (file) {
                photos[key] = await blobToBase64(file);
            }
        }

        const backup = {
            exportedAt: new Date().toISOString(),
            foodDatabase,
            foodLog,
            dailyTracker,
            bodyProgress,
            workoutHistory,
            personalGoals: getGoals(),
            photos
        };

        const jsonText = JSON.stringify(backup, null, 2);
        const blob = new Blob([jsonText], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `fitness-tracker-backup-${today()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        localStorage.setItem("lastBackupTime", String(Date.now()));
        updateBackupReminder();
        showToast("Backup exported ✓");
    }

    async function importAllData(file) {

        if (!file) return;

        const text = await file.text();

        let backup;

        try {
            backup = JSON.parse(text);
        } catch {
            alert("This file is not a valid backup file.");
            return;
        }

        const confirmed = confirm(
            "This will REPLACE all current data (food log, tracker, workouts, progress, photos) with the backup file. Continue?"
        );

        if (!confirmed) return;

        foodDatabase = Array.isArray(backup.foodDatabase) ? backup.foodDatabase : [];
        foodLog = Array.isArray(backup.foodLog) ? backup.foodLog : [];
        dailyTracker = Array.isArray(backup.dailyTracker) ? backup.dailyTracker : [];
        bodyProgress = Array.isArray(backup.bodyProgress) ? backup.bodyProgress : [];
        workoutHistory = Array.isArray(backup.workoutHistory) ? backup.workoutHistory : [];

        saveData("foodDatabase", foodDatabase);
        saveData("foodLog", foodLog);
        saveData("dailyTracker", dailyTracker);
        saveData("bodyProgress", bodyProgress);
        saveData("workoutHistory", workoutHistory);

        if (backup.personalGoals) {
            localStorage.setItem("personalGoals", JSON.stringify(backup.personalGoals));
        }

        if (backup.photos && photoDB) {
            const entries = Object.entries(backup.photos);
            for (const [key, base64] of entries) {
                const blob = await base64ToBlob(base64);
                await savePhoto(key, blob);
            }
        }

        showToast("Backup restored ✓ Reloading...");
        setTimeout(() => location.reload(), 1200);
    }


    // ==================================================
    // TOAST NOTIFICATIONS
    // ==================================================

    function showToast(message, type = "success") {

        const toast = document.createElement("div");

        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add("toast-visible");
        });

        setTimeout(() => {
            toast.classList.remove("toast-visible");
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }


    // ==================================================
    // EMPTY STATE HELPER
    // ==================================================

    function renderEmptyState(table, colspan, message) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td colspan="${colspan}" class="empty-message">
                ${message}
            </td>
        `;

        table.appendChild(row);
    }


    // ==================================================
    // CONFETTI EFFECT
    // ==================================================

    function triggerConfetti() {

        const colors = ["#E24B4A", "#7F77DD", "#CECBF6", "#F0997B", "#FAC775"];

        for (let i = 0; i < 40; i++) {

            const piece = document.createElement("div");

            piece.className = "confetti-piece";

            piece.style.left = `${Math.random() * 100}vw`;
            piece.style.background =
                colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDuration = `${1.2 + Math.random() * 1}s`;
            piece.style.animationDelay = `${Math.random() * 0.3}s`;
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(piece);

            setTimeout(() => piece.remove(), 2500);
        }
    }


    // ==================================================
    // REST TIMER
    // ==================================================

    let restTimerInterval = null;
    let restTimerSecondsLeft = 0;
    let restTimerPaused = false;

    function parseRestSeconds(restString) {

        if (!restString) return 60;

        const numbers =
            (restString.match(/[\d.]+/g) || []).map(Number);

        if (numbers.length === 0) return 60;

        const average =
            numbers.reduce((a, b) => a + b, 0) / numbers.length;

        return restString.toLowerCase().includes("min")
            ? Math.round(average * 60)
            : Math.round(average);
    }

    function formatTimerDisplay(seconds) {

        const m = Math.floor(seconds / 60);
        const s = seconds % 60;

        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }

    function updateTimerDisplay() {

        const display = document.getElementById("restTimerDisplay");

        if (display) {
            display.textContent = formatTimerDisplay(restTimerSecondsLeft);
        }
    }

    window.startRestTimer = function(seconds) {

        clearInterval(restTimerInterval);

        restTimerSecondsLeft = seconds;
        restTimerPaused = false;

        const widget = document.getElementById("restTimerWidget");

        if (widget) widget.classList.add("active");

        updateTimerDisplay();

        const pauseBtn = document.getElementById("restTimerPause");
        if (pauseBtn) pauseBtn.textContent = "Pause";

        restTimerInterval = setInterval(() => {

            if (restTimerPaused) return;

            restTimerSecondsLeft--;

            if (restTimerSecondsLeft <= 0) {
                clearInterval(restTimerInterval);
                restTimerSecondsLeft = 0;
                updateTimerDisplay();
                showToast("Rest complete — go! 💪");
                if (widget) widget.classList.remove("active");
                return;
            }

            updateTimerDisplay();

        }, 1000);
    };

    function toggleRestTimerPause() {

        restTimerPaused = !restTimerPaused;

        const pauseBtn = document.getElementById("restTimerPause");

        if (pauseBtn) {
            pauseBtn.textContent = restTimerPaused ? "Resume" : "Pause";
        }
    }

    function closeRestTimer() {

        clearInterval(restTimerInterval);

        const widget = document.getElementById("restTimerWidget");

        if (widget) widget.classList.remove("active");
    }

    on("restTimerPause", "click", toggleRestTimerPause);
    on("restTimerClose", "click", closeRestTimer);


    // ==================================================
    // FAVORITE FOODS
    // ==================================================

    function isFavoriteFood(name) {

        const favorites =
            JSON.parse(localStorage.getItem("favoriteFoods") || "[]");

        return favorites.includes(name);
    }

    window.toggleFavoriteFood = function(name) {

        let favorites =
            JSON.parse(localStorage.getItem("favoriteFoods") || "[]");

        if (favorites.includes(name)) {
            favorites = favorites.filter(item => item !== name);
        } else {
            favorites.push(name);
        }

        localStorage.setItem("favoriteFoods", JSON.stringify(favorites));

        displayFoods();
        renderFavoriteFoods();
    };

    function renderFavoriteFoods() {

        const container = document.getElementById("favoriteFoodsRow");

        if (!container) return;

        const favorites =
            JSON.parse(localStorage.getItem("favoriteFoods") || "[]");

        container.innerHTML = "";

        if (favorites.length === 0) {
            container.style.display = "none";
            return;
        }

        container.style.display = "flex";

        favorites.forEach(name => {

            const index =
                foodDatabase.findIndex(food => food.name === name);

            if (index === -1) return;

            const chip = document.createElement("button");

            chip.type = "button";
            chip.className = "favorite-food-chip";
            chip.textContent = name;

            chip.addEventListener("click", () => {
                selectedFoodIndex = index;
                const input = document.getElementById("foodSearchInput");
                if (input) input.value = name;
            });

            container.appendChild(chip);
        });
    }


    // ==================================================
    // ACHIEVEMENTS
    // ==================================================

    function getAchievementsList() {

        const perfectDays =
            Object.keys(localStorage)
                .filter(key => key.startsWith("confettiShown-"))
                .length;

        return [
            {
                id: "first-food",
                icon: "🍽",
                title: "First Meal Logged",
                unlocked: foodLog.length >= 1
            },
            {
                id: "first-workout",
                icon: "🏋",
                title: "First Workout Logged",
                unlocked: workoutHistory.length >= 1
            },
            {
                id: "ten-workouts",
                icon: "💪",
                title: "10 Workouts Logged",
                unlocked: workoutHistory.length >= 10
            },
            {
                id: "fifty-workouts",
                icon: "🏆",
                title: "50 Workouts Logged",
                unlocked: workoutHistory.length >= 50
            },
            {
                id: "first-checkin",
                icon: "📸",
                title: "First Progress Check-In",
                unlocked: bodyProgress.length >= 1
            },
            {
                id: "week-streak",
                icon: "🔥",
                title: "7 Day Streak",
                unlocked: getCurrentStreak() >= 7
            },
            {
                id: "month-streak",
                icon: "⚡",
                title: "30 Day Streak",
                unlocked: getCurrentStreak() >= 30
            },
            {
                id: "perfect-score",
                icon: "🎯",
                title: "Perfect Score Day",
                unlocked: perfectDays >= 1
            }
        ];
    }

    function getCurrentStreak() {

        const loggedDates =
            new Set(dailyTracker.map(day => day.date));

        if (loggedDates.size === 0) return 0;

        const sortedDates =
            [...loggedDates].sort().reverse();

        let streak = 0;

        const cursor = new Date(sortedDates[0] + "T00:00:00");

        while (true) {

            const year = cursor.getFullYear();
            const month = String(cursor.getMonth() + 1).padStart(2, "0");
            const day = String(cursor.getDate()).padStart(2, "0");
            const cursorStr = `${year}-${month}-${day}`;

            if (!loggedDates.has(cursorStr)) break;

            streak++;
            cursor.setDate(cursor.getDate() - 1);
        }

        return streak;
    }

    function updateAchievements() {

        const container = document.getElementById("achievementsGrid");

        if (!container) return;

        const achievements = getAchievementsList();

        container.innerHTML = "";

        achievements.forEach(item => {

            const badge = document.createElement("div");

            badge.className =
                `achievement-badge ${item.unlocked ? "unlocked" : "locked"}`;

            badge.innerHTML = `
                <span class="achievement-icon">${item.icon}</span>
                <span class="achievement-title">${item.title}</span>
            `;

            container.appendChild(badge);
        });
    }


    // ==================================================
    // CALENDAR HEATMAP
    // ==================================================

    function updateCalendarHeatmap() {

        const container = document.getElementById("calendarHeatmap");

        if (!container) return;

        container.innerHTML = "";

        const foodDates =
            new Set(foodLog.map(entry => entry.date));

        const trackerDates =
            new Set(dailyTracker.map(day => day.date));

        const workoutDates =
            new Set(workoutHistory.map(session => session.date));

        const totalDays = 84;
        const endDate = new Date();
        endDate.setHours(0, 0, 0, 0);

        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - (totalDays - 1));

        const startDayOfWeek = startDate.getDay();
        startDate.setDate(startDate.getDate() - startDayOfWeek);

        const cursor = new Date(startDate);

        while (cursor <= endDate) {

            const year = cursor.getFullYear();
            const month = String(cursor.getMonth() + 1).padStart(2, "0");
            const day = String(cursor.getDate()).padStart(2, "0");
            const dateStr = `${year}-${month}-${day}`;

            let level = 0;
            if (foodDates.has(dateStr)) level++;
            if (trackerDates.has(dateStr)) level++;
            if (workoutDates.has(dateStr)) level++;

            const cell = document.createElement("div");

            cell.className = `heatmap-cell level-${level}`;
            cell.title = `${dateStr}${level > 0 ? ` — ${level}/3 logged` : " — no activity"}`;

            if (cursor > endDate) {
                cell.style.visibility = "hidden";
            }

            container.appendChild(cell);

            cursor.setDate(cursor.getDate() + 1);
        }
    }


    // ==================================================
    // BODY MEASUREMENT CHARTS
    // ==================================================

    let waistChart = null;
    let chestChart = null;
    let armsChart = null;
    let thighsChart = null;

    function updateMeasurementCharts() {

        if (typeof Chart === "undefined") return;

        const canvas = document.getElementById("waistChart");
        if (!canvas) return;

        const sorted =
            [...bodyProgress].sort((a, b) =>
                new Date(a.date) - new Date(b.date)
            );

        const labels =
            sorted.map(entry => shortDate(entry.date));

        waistChart = replaceChart(
            waistChart, "waistChart", "line", labels,
            [{ label: "Waist (cm)", data: sorted.map(e => Number(e.waist) || null), tension: 0.3 }]
        );

        chestChart = replaceChart(
            chestChart, "chestChart", "line", labels,
            [{ label: "Chest (cm)", data: sorted.map(e => Number(e.chest) || null), tension: 0.3 }]
        );

        armsChart = replaceChart(
            armsChart, "armsChart", "line", labels,
            [
                { label: "Left Arm (cm)", data: sorted.map(e => Number(e.leftArm) || null), tension: 0.3 },
                { label: "Right Arm (cm)", data: sorted.map(e => Number(e.rightArm) || null), tension: 0.3 }
            ]
        );

        thighsChart = replaceChart(
            thighsChart, "thighsChart", "line", labels,
            [
                { label: "Left Thigh (cm)", data: sorted.map(e => Number(e.leftThigh) || null), tension: 0.3 },
                { label: "Right Thigh (cm)", data: sorted.map(e => Number(e.rightThigh) || null), tension: 0.3 }
            ]
        );
    }


    // ==================================================
    // MEASUREMENT GOALS
    // ==================================================

    const defaultMeasurementGoals = {
        waist: 0,
        chest: 0,
        arms: 0,
        thighs: 0
    };

    function getMeasurementGoals() {

        try {
            const saved =
                JSON.parse(localStorage.getItem("measurementGoals"));
            return { ...defaultMeasurementGoals, ...(saved || {}) };
        } catch {
            return { ...defaultMeasurementGoals };
        }
    }

    function loadMeasurementGoals() {

        const goals = getMeasurementGoals();

        setValue("goalWaist", goals.waist || "");
        setValue("goalChest", goals.chest || "");
        setValue("goalArms", goals.arms || "");
        setValue("goalThighs", goals.thighs || "");
    }

    function saveMeasurementGoals() {

        const goals = {
            waist: Number(document.getElementById("goalWaist")?.value) || 0,
            chest: Number(document.getElementById("goalChest")?.value) || 0,
            arms: Number(document.getElementById("goalArms")?.value) || 0,
            thighs: Number(document.getElementById("goalThighs")?.value) || 0
        };

        localStorage.setItem("measurementGoals", JSON.stringify(goals));

        showToast("Body goals saved ✓");

        updateMeasurementBatteries();
    }

    function measurementCloseness(current, target) {

        if (!target || target <= 0 || !current) return 0;

        const diffPercent =
            Math.abs(current - target) / target * 100;

        return Math.max(0, Math.round(100 - diffPercent));
    }

    function updateMeasurementBatteries() {

        const latest =
            [...bodyProgress].sort((a, b) =>
                new Date(b.date) - new Date(a.date)
            )[0];

        if (!latest) return;

        const goals = getMeasurementGoals();

        updateNutritionBattery("latestWaist", latest.waist || 0, goals.waist);
        updateNutritionBattery("latestChest", latest.chest || 0, goals.chest);

        const avgArm =
            ((Number(latest.leftArm) || 0) + (Number(latest.rightArm) || 0)) / 2;

        const avgThigh =
            ((Number(latest.leftThigh) || 0) + (Number(latest.rightThigh) || 0)) / 2;

        updateNutritionBattery("latestArms", avgArm, goals.arms);
        updateNutritionBattery("latestThighs", avgThigh, goals.thighs);

        setText("latestWaist", latest.waist ? `${latest.waist} cm` : "--");
        setText("latestChest", latest.chest ? `${latest.chest} cm` : "--");
        setText("latestArms", avgArm ? `${avgArm.toFixed(1)} cm` : "--");
        setText("latestThighs", avgThigh ? `${avgThigh.toFixed(1)} cm` : "--");
    }

    on("saveMeasurementGoals", "click", saveMeasurementGoals);


    // ==================================================
    // SEARCH / FILTER - FOOD DATABASE & WORKOUT HISTORY
    // ==================================================

    on("foodDatabaseSearch", "input", () => {
        displayFoods();
    });

    on("workoutHistorySearch", "input", () => {
        displayWorkoutHistory();
    });


    // ==================================================
    // SAFE EVENT LISTENER
    // ==================================================

    function on(id, event, callback) {

        const element = document.getElementById(id);

        if (element) {
            element.addEventListener(event, callback);
        }
    }


    // ==================================================
    // BUTTONS
    // ==================================================

    on("addFood", "click", addFood);
    on("addToLog", "click", addToMeal);
    on("saveDailyTracker", "click", saveTrackerDay);
    on("saveBodyProgress", "click", saveBodyProgressEntry);
    on("saveWorkout", "click", saveWorkoutSession);
    on("exportDataBtn", "click", exportAllData);

    on("importDataInput", "change", event => {
        const file = event.target.files?.[0];
        importAllData(file);
        event.target.value = "";
    });


    // ==================================================
    // FOOD LOG EVENTS
    // ==================================================

    on("logDate", "change", () => {
        displayFoodLog();
        updateDashboard();
    });

    on("foodSearchInput", "input", event => {
        selectedFoodIndex = null;
        renderFoodSearchResults(event.target.value);
    });

    on("foodSearchInput", "focus", event => {
        if (event.target.value) {
            renderFoodSearchResults(event.target.value);
        }
    });

    on("foodSearchInput", "blur", () => {
        setTimeout(() => {
            const container = document.getElementById("foodSearchResults");
            if (container) container.classList.remove("active");
        }, 150);
    });


    // ==================================================
    // DAILY TRACKER EVENTS
    // ==================================================

    on("trackerDate", "change", loadTrackerDay);

    on("stepsInput", "input", calculateDailyTracker);

    on("workoutInput", "change", calculateDailyTracker);


    // ==================================================
    // BODY PHOTO EVENTS
    // ==================================================

    on("frontPhotoInput", "change", event => {

        previewPhoto(
            event.target,
            "frontPhotoPreview",
            "frontPhotoPlaceholder"
        );
    });


    on("backPhotoInput", "change", event => {

        previewPhoto(
            event.target,
            "backPhotoPreview",
            "backPhotoPlaceholder"
        );
    });


    on("closePhotoModal", "click", closePhotoModal);


    on("photoModal", "click", event => {

        if (event.target.id === "photoModal") {
            closePhotoModal();
        }
    });


    // ==================================================
    // WORKOUT EVENTS
    // ==================================================

    on(
        "workoutPlanSelect",
        "change",
        displayCurrentWorkout
    );


    // ==================================================
    // DASHBOARD
    // ==================================================

    on(
        "dashboardRange",
        "change",
        updateDashboard
    );


    // ==================================================
    // SET TODAY
    // ==================================================

    const currentDate = today();

    setValue("logDate", currentDate);
    setValue("trackerDate", currentDate);
    setValue("progressDate", currentDate);
    setValue("workoutDate", currentDate);

function setNutritionStatus(elementId, value, type) {

    const element = document.getElementById(elementId);

    if (!element) return;

    let status = "";
    let className = "";

    // PROTEIN
    if (type === "protein") {

        if (value < 100) {
            status = "Too Low";
            className = "status-too-low";
        }
        else if (value < 130) {
            status = "Good";
            className = "status-good";
        }
        else if (value <= 170) {
            status = "Excellent";
            className = "status-excellent";
        }
        else {
            status = "High";
            className = "status-high";
        }
    }


    // CARBS
    if (type === "carbs") {

        if (value < 120) {
            status = "Too Low";
            className = "status-too-low";
        }
        else if (value < 170) {
            status = "Good";
            className = "status-good";
        }
        else if (value <= 240) {
            status = "Excellent";
            className = "status-excellent";
        }
        else {
            status = "High";
            className = "status-high";
        }
    }


    // FAT
    if (type === "fats") {

        if (value < 35) {
            status = "Too Low";
            className = "status-too-low";
        }
        else if (value < 45) {
            status = "Good";
            className = "status-good";
        }
        else if (value <= 70) {
            status = "Excellent";
            className = "status-excellent";
        }
        else {
            status = "High";
            className = "status-high";
        }
    }


    // FIBER
    if (type === "fiber") {

        if (value < 15) {
            status = "Too Low";
            className = "status-too-low";
        }
        else if (value < 25) {
            status = "Good";
            className = "status-good";
        }
        else if (value <= 40) {
            status = "Excellent";
            className = "status-excellent";
        }
        else {
            status = "High";
            className = "status-high";
        }
    }


    // CALORIES - judged against the daily calorie goal
    if (type === "calories") {

        const goal =
            Number(getGoals().calories) || 1900;

        const eaten = Number(value) || 0;
        const tol = CALORIE_GOAL_TOLERANCE;

        if (eaten < goal - tol * 3) {
            status = "Too Low";
            className = "status-too-low";
        }
        else if (eaten < goal - tol) {
            status = "Good";
            className = "status-good";
        }
        else if (eaten <= goal + tol) {
            status = "Excellent";
            className = "status-excellent";
        }
        else {
            status = "High";
            className = "status-high";
        }
    }


    // Remove previous status
    const oldStatus =
        element.parentElement.querySelector(".nutrition-status");

    if (oldStatus) {
        oldStatus.remove();
    }


    // Change number color
    element.classList.remove(
        "status-excellent",
        "status-good",
        "status-low",
        "status-too-low",
        "status-high"
    );

    if (className) {
        element.classList.add(className);
    }


    // Add status underneath
    const statusElement =
        document.createElement("span");

    statusElement.className =
        `nutrition-status ${className}`;

    statusElement.textContent = status;

    element.parentElement.appendChild(statusElement);
}
// ==================================================
// PERSONAL GOALS
// ==================================================

const defaultGoals = {
    calories: 1900,
    carbs: 200,
    protein: 140,
    fats: 60,
    fiber: 30,
    steps: 8000,
    sleep: 8,
    deficit: 500
};


// Anything within this many kcal of the goal counts as on target.
// 1900 +/- 100 gives the 1800-2000 window.
const CALORIE_GOAL_TOLERANCE = 100;


function getGoals() {

    try {

        const saved =
            JSON.parse(localStorage.getItem("personalGoals"));

        return {
            ...defaultGoals,
            ...(saved || {})
        };

    } catch {

        return { ...defaultGoals };
    }
}


function loadGoals() {

    const goals = getGoals();

    setValue("goalCalories", goals.calories);
    setValue("goalProtein", goals.protein);
    setValue("goalCarbs", goals.carbs);
    setValue("goalFats", goals.fats);
    setValue("goalFiber", goals.fiber);
    setValue("goalSteps", goals.steps);
    setValue("goalSleep", goals.sleep);
    setValue("goalDeficit", goals.deficit);
}


function saveGoals() {

    const goals = {

        calories:
            Number(document.getElementById("goalCalories")?.value) || 1900,

        protein:
            Number(document.getElementById("goalProtein")?.value) || 140,

        carbs:
            Number(document.getElementById("goalCarbs")?.value) || 200,

        fats:
            Number(document.getElementById("goalFats")?.value) || 60,

        fiber:
            Number(document.getElementById("goalFiber")?.value) || 30,

        steps:
            Number(document.getElementById("goalSteps")?.value) || 8000,

        sleep:
            Number(document.getElementById("goalSleep")?.value) || 8,

        deficit:
            Number(document.getElementById("goalDeficit")?.value) || 500
    };


    localStorage.setItem(
        "personalGoals",
        JSON.stringify(goals)
    );


    const message =
        document.getElementById("goalsSavedMessage");

    if (message) {

        message.textContent = "Goals Saved";

        setTimeout(() => {
            message.textContent = "";
        }, 2000);
    }


    updateFitnessScore();
    updateNutritionSummary();
}


// ==================================================
// SCORE HELPERS
// ==================================================

function scoreTarget(value, target, maximum) {

    value = Number(value) || 0;
    target = Number(target) || 0;

    if (target <= 0) return 0;

    const percentage = value / target;

    // Full score when reaching the goal.
    if (percentage >= 1) {
        return maximum;
    }

    return Math.round(maximum * percentage);
}


function scoreRange(value, target, maximum) {

    value = Number(value) || 0;
    target = Number(target) || 0;

    if (target <= 0) return 0;

    const difference =
        Math.abs(value - target);

    const percentageDifference =
        difference / target;


    if (percentageDifference <= 0.10) {
        return maximum;
    }

    if (percentageDifference <= 0.20) {
        return Math.round(maximum * 0.8);
    }

    if (percentageDifference <= 0.35) {
        return Math.round(maximum * 0.6);
    }

    if (percentageDifference <= 0.50) {
        return Math.round(maximum * 0.4);
    }

    return Math.round(maximum * 0.2);
}


// ==================================================
// FITNESS SCORE
// ==================================================

function updateFitnessScore() {

    const goals = getGoals();

    // Use the same date as the Food Log.
    const date =
        document.getElementById("logDate")?.value ||
        today();

    const nutrition =
        getNutritionTotals(date);

    const tracker =
        dailyTracker.find(day =>
            day.date === date
        );


    const steps =
        Number(tracker?.steps) || 0;

    const deficit =
        Number(tracker?.deficit) || 0;

    const workout =
        tracker?.workout || "Rest";


    // ----------------------------------------------
    // PROTEIN - 20 POINTS
    // ----------------------------------------------

    const proteinScore =
        scoreTarget(
            nutrition.protein,
            goals.protein,
            20
        );


    // ----------------------------------------------
    // DEFICIT - 20 POINTS
    // ----------------------------------------------

    let caloriesScore = 0;

    if (tracker) {

        caloriesScore =
            scoreRange(
                deficit,
                goals.deficit,
                20
            );
    }


    // ----------------------------------------------
    // FIBER - 20 POINTS
    // ----------------------------------------------

    const fiberScore =
        scoreTarget(
            nutrition.fiber,
            goals.fiber,
            20
        );


    // ----------------------------------------------
    // STEPS - 20 POINTS
    // ----------------------------------------------

    const stepsScore =
        scoreTarget(
            steps,
            goals.steps,
            20
        );


    // ----------------------------------------------
    // WORKOUT - 20 POINTS
    // ----------------------------------------------

    let workoutScore = 0;

    if (tracker) {

        if (workout !== "Rest") {
            workoutScore = 20;
        }
        else {
            // Rest days are still valid days.
            workoutScore = 20;
        }
    }


    // ----------------------------------------------
    // TOTAL
    // ----------------------------------------------

    const totalScore =
        proteinScore +
        caloriesScore +
        fiberScore +
        stepsScore +
        workoutScore;


    setText(
        "fitnessScore",
        `${totalScore} / 100`
    );

    setText(
        "scoreProtein",
        `${proteinScore} / 20`
    );

    setText(
        "scoreCalories",
        `${caloriesScore} / 20`
    );

    setText(
        "scoreFiber",
        `${fiberScore} / 20`
    );

    setText(
        "scoreSteps",
        `${stepsScore} / 20`
    );

    setText(
        "scoreWorkout",
        `${workoutScore} / 20`
    );


    // ----------------------------------------------
    // STATUS
    // ----------------------------------------------

    const scoreElement =
        document.getElementById("fitnessScore");

    const statusElement =
        document.getElementById("fitnessScoreStatus");


    if (!scoreElement || !statusElement) {
        return;
    }


    scoreElement.classList.remove(
        "score-excellent",
        "score-good",
        "score-low",
        "score-too-low"
    );

    statusElement.classList.remove(
        "score-excellent",
        "score-good",
        "score-low",
        "score-too-low"
    );


    let status = "";
    let statusClass = "";


    if (totalScore >= 85) {

        status = "Excellent";
        statusClass = "score-excellent";

    }
    else if (totalScore >= 70) {

        status = "Good";
        statusClass = "score-good";

    }
    else if (totalScore >= 50) {

        status = "Low";
        statusClass = "score-low";

    }
    else {

        status = "Too Low";
        statusClass = "score-too-low";
    }


    statusElement.textContent = status;

    scoreElement.classList.add(statusClass);
    statusElement.classList.add(statusClass);

    if (totalScore === 100) {

        const confettiKey = `confettiShown-${date}`;

        if (!localStorage.getItem(confettiKey)) {
            triggerConfetti();
            showToast("Perfect score! 100/100 🎉");
            localStorage.setItem(confettiKey, "1");
        }
    }
}


// ==================================================
// PERSONAL GOALS BUTTON
// ==================================================

on(
    "saveGoals",
    "click",
    saveGoals
);
    // ==================================================
    // HOVER-TO-OPEN NAVIGATION
    // ==================================================

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.click();
        });
    });


    // ==================================================
    // MOUSE TRAIL EFFECT
    // ==================================================

    function initMouseTrail() {

        const colors = ["#E24B4A", "#7F77DD", "#CECBF6", "#F0997B"];

        let lastTime = 0;

        document.addEventListener("mousemove", event => {

            const now = Date.now();

            if (now - lastTime < 40) return;

            lastTime = now;

            const dot = document.createElement("div");

            dot.className = "mouse-trail-dot";

            const size = Math.random() * 4 + 3;

            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${event.clientX}px`;
            dot.style.top = `${event.clientY}px`;
            dot.style.background =
                colors[Math.floor(Math.random() * colors.length)];

            document.body.appendChild(dot);

            setTimeout(() => {
                dot.remove();
            }, 700);
        });
    }

    initMouseTrail();


    // ==================================================
    // START
    // ==================================================

    displayFoods();
    updateFoodSelect();
    displayFoodLog();
    renderFavoriteFoods();
    loadTrackerDay();
    displayDailyTracker();
    displayBodyProgress();
    displayCurrentWorkout();
    displayWorkoutHistory();
    updateDashboard();
    loadGoals();
    loadMeasurementGoals();
    updateFitnessScore();


});
// Define translations for English and Hebrew
const translations = {
    en: {
        headerTitle: "Michelle D'Amico, LICSW",
        headerSubtitle: "Therapist & Clinical Social Worker",
        introHeading: "Congratulations on taking that first step to obtaining support!",
        introParagraph1: "Searching for a therapist can be a difficult and overwhelming process. Taking this step and setting up an initial therapy appointment can be terrifying, so let me tell you what you can expect if we decide to work together. Maybe you're grieving a loss, struggling with a life transition, or feeling in a rut. Together, we can build up your skills to better understand and manage distressing feelings and the challenges that are currently weighing you down.",
        introParagraph2: "The process of personal growth often involves making difficult changes and I will collaborate with you to develop, highlight and use your inner resources to make these important changes. Together, our work will be strength-based & solution-focused. Utilizing a combination of eclectic and traditional treatment modalities, we will work toward your goals.",
        specialtiesHeading: "My Specialties Include:",
        specialtiesList: [
            "Anxiety based disorders",
            "Life Transitions",
            "Family, Marital and Interpersonal Relationships",
            "Parenting children and youth experiencing anxiety/depression, ADHD and/or learning disabilities"
        ],
        locationHeading: "Location & Contact",
        buildingName: "Saugus North Professional Building",
        feesHeading: "Fees",
        feesDetails: "I do not accept insurance at this time. However, I offer a sliding scale fee structure to accommodate what you are able to afford. My standard rate is $110 per individual session."
    },
    he: {
        headerTitle: "\u202Bמִיכַל עינת, LICSW\u202C",
        headerSubtitle: "מטפלת ועובדת סוציאלית קלינית",
        introHeading: "מזל טוב על הצעד הראשון לקבלת תמיכה!",
        introParagraph1: "חיפוש מטפל יכול להיות תהליך קשה ומלחיץ. לקיחת הצעד הזה וקביעת פגישה טיפולית ראשונה יכולה להיות מפחידה, אז תן לי לספר לך למה לצפות אם נחליט לעבוד יחד. אולי אתה מתאבל על אובדן, מתמודד עם מעבר חיים, או מרגיש תקוע. יחד, נוכל לבנות את הכישורים שלך כדי להבין ולנהל טוב יותר רגשות מציקים ואת האתגרים שמכבידים עליך כרגע.",
        introParagraph2: "תהליך הצמיחה האישית כרוך לעיתים קרובות בביצוע שינויים קשים ואני אשתף איתך פעולה כדי לפתח, להדגיש ולהשתמש במשאבים הפנימיים שלך כדי לבצע את השינויים החשובים הללו. יחד, העבודה שלנו תהיה מבוססת על חוזקות וממוקדת פתרונות. תוך שימוש בשילוב של שיטות טיפול אקלקטיות ומסורתיות, נעבוד לקראת המטרות שלך.",
        specialtiesHeading: "ההתמחויות שלי כוללות:",
        specialtiesList: [
            "הפרעות חרדה",
            "מעברי חיים",
            "יחסים משפחתיים, זוגיים ובין אישיים",
            "הורות לילדים ונוער המתמודדים עם חרדה/דיכאון, ADHD ו/או לקויות למידה"
        ],
        locationHeading: "מיקום ויצירת קשר",
        buildingName: "בניין מקצועי צפון סאוגוס",
        feesHeading: "תעריפים",
        feesDetails: "אני לא מקבלת ביטוח בשלב זה. עם זאת, אני מציעה מבנה תעריפים גמיש כדי להתאים למה שאתה יכול להרשות לעצמך. התעריף הסטנדרטי שלי הוא $110 למפגש אישי."
    }
};

// Define the current language (default to English)
let currentLanguage = "en";

// Function to toggle the language
function toggleLanguage() {
    // Switch the language
    currentLanguage = currentLanguage === "en" ? "he" : "en";

    // Update the page content
    switchLanguage(currentLanguage);

    // Update the button text
    const toggleButton = document.getElementById("language-toggle");
    toggleButton.textContent = currentLanguage === "en" ? "לעבור לעברית" : "Switch to English";
}

// Function to update text content dynamically
function switchLanguage(lang) {
    // Set the direction of the document based on the language
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr");

    // Ensure the navbar and card-row remain LTR
    document.querySelector("nav").setAttribute("dir", "ltr");
    document.querySelector(".card-row").setAttribute("dir", "ltr");

    // Update header and intro text
    document.querySelector("h1").textContent = translations[lang].headerTitle;
    document.querySelector("h2").textContent = translations[lang].headerSubtitle;
    document.querySelector(".card-center h3").textContent = translations[lang].introHeading;

    const paragraphs = document.querySelectorAll(".card-center p");
    paragraphs[0].textContent = translations[lang].introParagraph1;
    paragraphs[1].textContent = translations[lang].introParagraph2;

    // Update specialties section
    document.querySelector(".specialties h3").textContent = translations[lang].specialtiesHeading;
    const specialtiesList = document.querySelector(".specialties ul");
    specialtiesList.innerHTML = ""; // Clear existing list
    translations[lang].specialtiesList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        specialtiesList.appendChild(li);
    });

    // Update location section
    document.querySelector(".column:nth-child(2) h3").textContent = translations[lang].locationHeading;
    document.querySelector(".column:nth-child(2) p").innerHTML = `
        ${translations[lang].buildingName}<br>
        <a href="https://www.google.com/maps?q=99+Walnut+Street,+Saugus,+MA+01906" target="_blank">
            99 Walnut Street, Saugus, MA 01906
        </a><br><br>
        Phone: <a href="tel:+19782319775">(978) 231-9775</a>
    `;

    // Update fees section
    document.querySelector(".column:nth-child(3) h3").textContent = translations[lang].feesHeading;

    const feesParagraph = document.querySelector(".column:nth-child(3) p");
    if (feesParagraph) {
        feesParagraph.textContent = translations[lang].feesDetails;
    }
}

// Add event listener for the toggle button
document.getElementById("language-toggle").addEventListener("click", toggleLanguage);
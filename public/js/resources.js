const data = {
    schedule: [
        {
            day: "Monday",
            times: ["1st Monday 1:30-4 pm", "3rd Monday 3:30-5 pm"],
            additionalSources: [
                { name: "3SquaresVT", description: "Helps you buy food from grocery..." },
                { name: "Meals for Kids", description: "Summer meal sites serve free meals..." },
                { name: "The Take Care Project", description: "Expands access to free hygiene products..." }
            ],
        },
        // Additional day entries can be added here
    ]
};

function renderSchedule() {
    const templateScript = document.getElementById("schedule-template").innerHTML;
    const template = Handlebars.compile(templateScript);
    const compiledHtml = template(data);
    document.getElementById("schedule-container").innerHTML = compiledHtml;
}

function submitForm() {
    const form = document.getElementById("bloodDonationForm");

    const formData = {
        fullName: form.fullName.value,
        age: parseInt(form.age.value),
        city: form.city.value,
        bloodAmount: parseInt(form.bloodAmount.value),
        bloodType: form.bloodType.value,
        hospital: form.hospital.value,
        gender: form.gender.value
    };

    // Assume you have an API endpoint to post the data (replace with your actual API URL)
    const apiUrl = "https://odd-cyan-hermit-crab-hem.cyclic.app/Doners";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data submitted successfully:", data);
        // You can add further handling or redirect the user after successful submission
    })
    .catch(error => {
        console.error("Error submitting data:", error);
    });
}

document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const patientName = document.getElementById("patientName").value;
    const age = parseInt(document.getElementById("age").value);
    const familyHistory = document
      .getElementById("familyHistory")
      .value.toLowerCase();
    const genomicData = document.getElementById("genomicData").value;
    const imagingFile = document.getElementById("imagingFile").files[0];

    let riskScore = 0;

    if (age > 50) riskScore += 1;
    if (familyHistory === "yes") riskScore += 1;
    if (genomicData) riskScore += 1;
    if (imagingFile) riskScore += 2;

    let riskLevel;
    if (riskScore >= 4) {
      riskLevel = "High Risk: Further screening recommended.";
    } else if (riskScore === 3) {
      riskLevel = "Moderate Risk: Follow-up recommended.";
    } else {
      riskLevel = "Low Risk: Routine screening recommended.";
    }

    document.getElementById(
      "resultOutput"
    ).innerText = `Patient: ${patientName}\nRisk Level: ${riskLevel}`;
  });
